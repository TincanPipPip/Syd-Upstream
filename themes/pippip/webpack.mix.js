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
const hostname = 'syd.local',
  basePath = './assets',
  glob = new mixGlob({ mix });

/**
 * Config
 */
mix.setPublicPath('dist');
mix.disableSuccessNotifications();

mix.options({
  processCssUrls: false,
  postCss: [
    require('autoprefixer')({
      grid: 'no-autoplace',
    }),
  ],
});

mix.browserSync({
  proxy: `https://${hostname}`,
  ghostMode: false,
  files: ['templates/**/*.twig', 'assets/sass/**/*.scss', 'assets/js/*.js'],
});

if (mix.inProduction()) {
  mix.version();
  mix.disableNotifications();
} else {
  mix.sourceMaps();
  mix.webpackConfig({ devtool: 'inline-source-map' });
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
 * 1. Copy icon/img assets after being optimised
 * 2. Optimise SVGs
 */
mix.webpackConfig({
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: `${basePath}/img`, to: 'img' }],
    }),
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
