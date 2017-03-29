const postcss = require('neutrino-middleware-postcss');
const cssnext = require('postcss-cssnext');
const merge = require('deepmerge');

module.exports = (neutrino, options) => {
  const defaultOptions = {
    plugins: [
      cssnext()
    ]
  };
  neutrino.use(postcss, merge(defaultOptions, options));
};
