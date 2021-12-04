/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    plugins:
        process.env.NODE_ENV === 'production'
            ? [
                autoprefixer,
                pxtorem(),
                cssnano({ discardComments: { removeAll: true, filterPlugins: false } }),
            ]
            : [autoprefixer, pxtorem()],
};
