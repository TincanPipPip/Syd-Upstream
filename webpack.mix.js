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
  mixGlob = require('laravel-mix-glob'),
  themeDirectory = './themes/pippip';

/**
 * Variables
 */
const hostname = 'syd.local',
  themeAssets = `${themeDirectory}/assets`,
  glob = new mixGlob({ mix });

/**
 * Config
 */
mix.setPublicPath(`${themeDirectory}/dist`);
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
  files: [`${themeDirectory}/templates/**/*.twig`, `${themeAssets}/js/**/*.j`, `${themeAssets}/sass/**/*.scss`],
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
glob.sass(`${themeAssets}/sass/*.scss`, 'css');
glob.js(`${themeAssets}/js/*.js`, 'js');
mix.copyDirectory(`${themeAssets}/font`, `${themeDirectory}/dist/font`);

/**
 * Custom Webpack Configuration
 * Optimise pngs/jpgs/svgs (production only)
 */
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new copyWebpackPlugin({
        patterns: [{ from: `${themeAssets}/img`, to: 'img' }],
      }),
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
