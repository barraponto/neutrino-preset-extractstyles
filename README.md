# Neutrino ExtractStyles preset
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
[![Join Slack][slack-image]][slack-url]

`neutrino-preset-extractstyles` is a Neutrino preset that adds support for
extracting css to its own files using [extract-text-webpack-plugin][plugin].

It differs from [neutrino-middleware-extractstyles][nme-package] by supporting
other loaders in the `style` rule. It is therefore safe to use with
[neutrino-middleware-postcss][nmp-package] and
[neutrino-preset-postcss-cssnext][nppc-package].

## Documentation

Install this preset to your development dependencies, then set it in
`.neutrinorc.js`:

```javascript
  module.exports = {
    use: [
      "neutrino-preset-web",
      "neutrino-preset-extractstyles",
    ],
    ...
  };
```

Extra options can be passed both to loader options (`options.loader`) and
plugin options (`options.plugin`).

[nppc-package]: https://www.npmjs.com/package/neutrino-preset-postcss-cssnext
[nme-package]: https://www.npmjs.com/package/neutrino-middleware-extractstyles
[nmp-package]: https://www.npmjs.com/package/neutrino-middleware-postcss
[plugin]: https://github.com/webpack-contrib/extract-text-webpack-plugin
[npm-image]: https://img.shields.io/npm/v/neutrino-preset-extractstyles.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-extractstyles.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-extractstyles
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
