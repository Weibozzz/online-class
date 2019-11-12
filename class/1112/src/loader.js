const getOptions = require('loader-utils').getOptions

module.exports = function(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return source;
}
