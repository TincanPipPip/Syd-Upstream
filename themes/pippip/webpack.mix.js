/* global require __dirname */

/**
 * -----------------------
 * Un.titled - Laravel Mix
 * -----------------------
 */

/**
 * Dependencies
 */
const mix = require('laravel-mix'),
  copyWebpackPlugin = require('copy-webpack-plugin'),
  imageminPlugin = require('imagemin-webpack-plugin').default,
  path = require('path'),
  mixGlob = require('laravel-mix-glob');

/**
 * Variables
 */
const hostname = 'pippip.localhost',
  basePath = './assets',
  glob = new mixGlob({ mix });

/**
 * Config
 */
mix.setPublicPath('dist');
mix.disableSuccessNotifications();

mix.options({
  processCssUrls: false,
});

mix.browserSync({
  proxy: `https://${hostname}`,
  ghostMode: false,
});

if (mix.inProduction()) {
  mix.version();
  mix.disableNotifications();
} else {
  mix.sourceMaps();
}

mix.webpackConfig({
  stats: 'errors-warnings',
});

/**
 * Assets
 */
glob.sass(`${basePath}/sass/*.scss`, 'css');
glob.js(`${basePath}/js/*.js`, 'js');
mix.copyDirectory(`${basePath}/font`, 'dist/font');

/**
 * Custom Webpack Configuration
 * 1. Generate Modernizr file
 * - Add options
 * - https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
 * 2. Copy icon/img assets after being optimised
 * 3. Optimise SVGs
 */
mix.webpackConfig({
  module: {
    rules: [
      {
        loader: 'modernizr-loader',
        test: /\.modernizrrc\.js$/,
      },
    ],
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, '.modernizrrc.js'),
      swiper$: 'swiper/dist/js/swiper.js',
    },
  },
  plugins: [
    new copyWebpackPlugin([{ from: `${basePath}/icon`, to: 'icon' }, { from: `${basePath}/img`, to: 'img' }]),
    new imageminPlugin({
      test: /\.(svg)$/i,
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      },
    }),
  ],
});

/**
 * Custom Webpack Configuration
 * Optimise pngs/jpgs/svgs (production only)
 */
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new imageminPlugin({
        test: /\.(jpe?g|png|svg)$/i,
        svgo: {
          plugins: [
            {
              removeViewBox: false,
            },
          ],
        },
        pngquant: {
          quality: '70-90',
          dithering: 0,
          speed: 1,
        },
        jpegtran: {
          progressive: true,
          quality: 60,
        },
      }),
    ],
  });
}
