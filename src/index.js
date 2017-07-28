const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (neutrino, options = {}) => {
  // Supports neutrino-preset-web and any other preset following this pattern.
  const styleRule = neutrino.config.module.rule('style');
  const styleTest = styleRule.get('test');
  const styleFallback = {
    loader: styleRule.use('style').get('loader'),
    options: styleRule.use('style').get('options') };
  const styleLoaders = Array.from(styleRule.uses.store.keys())
    .filter((key) => key !== 'style')
    .map((key) => styleRule.use(key))
    .map((use) => ({loader: use.get('loader'), options: use.get('options')}));

  const loaders = ExtractTextPlugin.extract({
    fallback: options.fallback || styleFallback|| 'style-loader',
    use: options.use || styleLoaders || 'css-loader',
  });

  styleRule.uses.clear();
  loaders.forEach(({loader, options}) => {
    styleRule.use(loader).loader(loader).options(options);
  });

  neutrino.config.plugin('extract')
    .use(ExtractTextPlugin, [options.filename || '[name].css']);
};
