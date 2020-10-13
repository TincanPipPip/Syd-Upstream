# Syd Upstream Changelog

## 26-02-2020
### Added
- Image & Text entity
- Social links block type
- Support for WEBP (disabled until Pantheon adds server support)

### Changed
- Pippip template & partials cleaned up & modernised
- Sticky admin toolbar
- Core & contrib module updates

---

## 28-02-2020
### Added
- Fix for pathauto aliases missing slashes

### Changed
- Tweaked node.html.twig teaser classes
- Removed extraneous field from teaser.twig

---

## 02-03-2020
### Added
- Search API module
- Search API Exclude module

### Changed
- Tweaked admin tabs markup
- Updated default pagination styling
- Removed margin from nav toggle

---

## 06-03-2020
### Added
- views-view-unformatted.html.twig base template

### Changed
- Default .m-entity margin
- .o-teaser added flexbox

--- 

## 16-03-2020
### Added
- Pippip banner partial CT class
- Downloads entity styling & layout
- Safari lazyload fix

### Changed
- _image-credit.scss tidied
- node.html.twig updated default classes

## 17-03-2020
### Changed
- quirk of the image pipeline module

---

## 22-04-2020
### Added
- Default breadcrumb setup & styling
- `menu.html.twig` to fix missing 'is-active-trail' classes

### Removed
- Footer region

### Changed
- Renamed partials to end `.twig` not `.html.twig`
- Renamed `page--user.html.twig` to `page--member.html.twig`
- Updated Emergency Message styling
- Updated CTA entity link url
- Removed typo in `node.html.twig`
- `block--bundle--partners.html.twig` pointing to correct base template
- `pippip_preprocess_node` changed to allow for multiple menu support without breaking subnav title

---

## 03-07-2020
## Added
- Autoprefixer set to cover IE11

## Removed
- Modernizr.js

## Changed
- Safari lazyload image fix
- Cleaned up `defaults.js`, moved `toggleState()` function to module
- Updated dependencies in package.json *Note: now requires npm minimum v10*

---

## 03-07-2020 #2
## Changed
- Updated contrib modules

---

## 21-07-2020
## Changed
- Updated 'skip to content' link url

---

## 10-08-2020
## Changed
- Updated npm packages package.json in Pippip
- Added keybarod navigation for image captions

## Added
- `font-display:swap` to default font css
- Focus styles for form elements

---

## 26-08-2020
## Changed
- Updated `webpack.mix.js` file to fix `copyWebpackPlugin` configuration
- Updated `package.json` dependency versions to latest

## 06-Oct-2020
## Changed
- Drupal 8.9.6 Update
- Contrib updates

## 03-Oct-2020
## Changed
- Search aria label