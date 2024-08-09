export const stringHelpers = {
  /**
   * @param {string} input
   * @returns {string}
   */
  URL: (input) => {
    const matches = /^(https?:\/\/)*([a-zA-Z0-9_-]+\.[a-zA-Z]+)$/.exec(input);
    if (matches && matches[2]) {
      return matches[2];
    }

    return input;
  },
};
