const { DateTime } = require('luxon');
const Terser = require("terser");
const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = Terser.minify(code);
    if( minified.error ) {
      console.log("Terser error: ", minified.error);
      return code;
    }

    return minified.code;
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
