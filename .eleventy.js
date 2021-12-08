const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('styles/*');
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
  });
}
