/**
 * @typedef {import('simple-icons')} SimpleIcon
 */

import * as icons from 'simple-icons';
import handlebars from 'handlebars';

/**
 * @param {string} name
 * @returns {string | handlebars.SafeString}
 */
export function Icon(name) {
  const normalizedName = normalizeName(name);
  const icon = icons[normalizedName];

  if (!icon || !icon.svg) {
    return name;
  }

  return new handlebars.SafeString(icon.svg);
}

/**
 * @param {string} name
 * @returns {keyof SimpleIcon}
 */
function normalizeName(name) {
  name = name.toLowerCase().replace(' ', '');
  const slug = name.charAt(0).toUpperCase() + name.slice(1);
  return /** @type {keyof SimpleIcon} */ (`si${slug}`);
}
