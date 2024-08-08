/**
 * @typedef {Required<import('../../types.d.ts').ResumeSchema>['work']} WorkArray
 * @typedef {import('../../types.d.ts').HelperOptions} Options
 * @typedef {import('../../types.d.ts').NestedWork[]} NestedWorkArray
 */
/**
 * @param {WorkArray} workArray
 * @param {Options} options
 * @returns {string}
 */
export function nestedWork(workArray, options) {
  const nestedWork = workArray.reduce(
    (acc, { location, description, name, url, ...rest }) => {
      const prev = acc[acc.length - 1];
      if (
        prev &&
        prev.name === name &&
        prev.location === location &&
        prev.description === description &&
        prev.url === url
      )
        prev.items.push(rest);
      else acc.push({ location, description, name, url, items: [rest] });
      return acc;
    },
    /** @type {NestedWorkArray} */ ([])
  );

  return options.fn(nestedWork);
}
