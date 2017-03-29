const postcss = require('neutrino-middleware-postcss');

module.exports = (neutrino) => {
  const cssnext = require.resolve('postcss-cssnext');
  neutrino.use(postcss, {
    plugins: [
      cssnext()
    ]
  });
};
