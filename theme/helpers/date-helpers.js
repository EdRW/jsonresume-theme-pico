import moment from 'moment';

export const dateHelpers = {
  /**
   * @param {Date} date
   * @returns {string}
   */
  MY: (date) => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY'),
  /**
   * @param {Date} date
   * @returns {string}
   */
  Y: (date) => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  /**
   * @param {Date} date
   * @returns {string}
   */
  DMY: (date) => moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY'),
};
