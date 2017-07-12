# Neutrino CSSNext preset
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
[![Join Slack][slack-image]][slack-url]

`neutrino-preset-cssnext` is a Neutrino preset that adds support for
[cssnext][cssnext].

## Documentation

Install this preset to your development dependencies, then set it in
`.neutrinorc.js`:

```javascript
  module.exports = {
    use: [
      "neutrino-preset-web",
      "neutrino-preset-cssnext",
    ],
    ...
  };
```

You can configure the features through `options` object, following the
instructions at [cssnext documentation][cssnext-browserslist] and the
[Browserslist query syntax][browserslist-docs]).

This is an example using options:

```javascript
  module.exports = {
    use: [
      "neutrino-preset-web",
      ["neutrino-preset-cssnext", {
        browsers: ["> 1%", "last 2 versions"],
      }],
    ],
    ...
  };
```

## Breaking Changes

Bumping to Neutrino 6 and cssnext 3.
The most meaningful change is in image-set polyfill.
See https://github.com/MoOx/postcss-cssnext/releases/tag/3.0.0

[cssnext]: http://cssnext.io/
[cssnext-browserslist]: http://cssnext.io/usage/#browsers
[postcss-middleware]: https://npmjs.org/package/neutrino-middleware-postcss
[browserslist-docs]: https://github.com/ai/browserslist#queries
[npm-image]: https://img.shields.io/npm/v/neutrino-preset-cssnext.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-cssnext.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-cssnext
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
