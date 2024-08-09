import fs from 'node:fs';
import path from 'node:path';
import handlebars from 'handlebars';

/**
 * @param {string} filename
 * @returns {string | handlebars.SafeString}
 */
export function SVG(filename) {
  const filepath = path.join(import.meta.dirname, '..', 'assets', filename);
  const svg = fs.readFileSync(filepath, 'utf8');

  if (!svg) {
    throw new Error(`couldn't load SVG: ${filepath}`);
  }

  return new handlebars.SafeString(svg);
}
