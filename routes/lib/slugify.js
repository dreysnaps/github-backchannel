var slugify = require("slugify");

exports.slugify = val => {
  return slugify(val, {
    replacement: "_",
    lower: true
  });
};
