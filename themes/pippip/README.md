# Pippip v3

Contents:

- [About](#About)
- [Browser support](#browser-support)
- [Setup](#setup)
- [Laravel Mix](#laravel-mix)
- [CSS](#css)
- [Included helper classes](#included-helper-classes)
- [SASS file structure](#sass-file-structure)
- [Grid](#grid)
- [JS](#js)
- [Included JS files](#included-js-files)
- [Included plugins](#included-plugins)

## About

Pippip v3 is a Drupal 8 base theme, utilising Laravel Mix, Browsersync, ES6 & SASS. Styles and templates structure loosely follows the [Patterlab methodology](https://patternlab.io/).

#### Browser support

- Edge
- Chrome
- FF
- Safari

## Setup

- Place all provided image assets in `./assets/img`
- Place all fonts in `./dist/fonts`
- From the root pippip folder:
  - Run `npm install`
  - Update `hostname` in `webpack.mix.js` with local site domain
  - Run `npm start` to start compiling & watching the files

## Laravel Mix

Pippip v3 runs [Laravel Mix](https://laravel.com/docs/5.7/mix). Run `npm start` to begin development.

### Tasks

1. `npm start` standard task, used for watching files. Spins up an instance of Browser Sync for cross device testing.
2. `npm run dev` builds all assets and optimises icon svgs.
3. `npm run production` builds all assets and optimises for production.

### Laravel Mix Glob

Laravel Mix Glob is an extension for Laravel Mix and allows you to use glob patterns for css/js files.
https://github.com/MohamedLamineAllal/laravel-mix-glob

## Icons

Icons can be imported directly into **.twig** files using `{{ get_icon('icon') }}`.

## CSS

Pippip v3 is [SASS](https://sass-lang.com) based.

#### Included helper classes

- `.hidden` - forcibly hides element from view & screen readers

#### SASS file structure

- `./assets/sass/global.scss` contains all imports to generate single `dist/css/style.css`
- `./config/*` contains global variables
- `./helpers/*` contains animations, breakpoints & global mixins
- `./base/*` contains D8 specific, global and typography stylesheets
- `./templates/*` contains template level stylesheets (e.g. CT level)
- `./organisms/*` contains organism level stylesheets (e.g. header, footer)
- `./molecules/*` contains molecule level stylesheets (e.g. entities, nav)
- `./atoms/*` contains atom level stylesheets (e.g. buttons)

#### Grid

Pippip utilises [Reflex grid](http://reflexgrid.com/docs/) for grid layouts. Reflex grid is a lightweight flexbox based mobile-first grid system.

See [documentation](http://reflexgrid.com/docs/) for details & usage.

## JS

Pippip v3 is ES6 based (rather than jQuery) by default, and gets converted to ES5 on compile for better browser support.

#### Included JS files

- `assets/js/defaults.js` contains all the default plugins & global functions
- `assets/js/global.js` is a blank file for global project specific JS
- `assets/js/emmsg.js` contains emergency message JS

#### Included plugins

Usage notes for each plugin can be found in `assets/js/defaults.js`

- [BaugetteBox](https://www.npmjs.com/package/baguettebox.js)
  - Image lightbox
- [LazyLoad](https://github.com/verlok/lazyload)
  - Lazyload images
- [Van11y accessible accordion](https://github.com/nico3333fr/van11y-accessible-accordion-aria)
  - Accessible vanilla JS accordion
- [Zenscroll](https://github.com/zengabor/zenscroll)
  - Anchor scroll animation
