const { DateTime } = require('luxon');
const { minify } = require("terser");
const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
  });
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
}
