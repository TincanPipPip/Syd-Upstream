# Tincan SASS Style Guide

## Table of Contents

1. [Markup](#markup)
1. [SASS](#sass)
   - [Formatting](#formatting)
   - [Comments](#comments)
   - [ID Selectors](#id-selectors)
   - [Border](#border)
   - [Syntax](#syntax)
   - [Ordering](#ordering-of-property-declarations)
   - [Variables](#variables)
   - [Mixins](#mixins)
   - [Nested selectors](#nested-selectors)
   - [Media queries](#media-queries)

## Markup

- Use [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) methodology

## SASS

### Formatting

- Use tab (2 spaces) for indentation
- Prefer dashes over camelCasing in class names.
- Do not use ID selectors
- When using multiple selectors in a rule declaration, give each selector its own line.
- Put a space before the opening brace `{` in rule declarations
- In properties, put a space after, but not before, the `:` character.
- Put closing braces `}` of rule declarations on a new line
- Put blank lines between rule declarations
- Always use double quotes
- Always include quotes around background image urls (i.e. `background-image:url("../images/logo.png");`)
- Pseudo selectors should use double colons, i.e. `::before`

**Bad**

```css
.avatar {border-radius: 50%; border: 2px solid white;}
.no,.nope,.not_good { // ...}
#lol-no {
  // ...
}
```

**Good**

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}

.lol-yes {
  // ...
}
```

### Comments

- Use line comments (`//`) to write comments.
- Prefer comments on their own line. Avoid end-of-line or inline comments.
- Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

### ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### Border

Use `0` instead of `none` to specify that a style has no border.

**Bad**

```css
.foo {
  border: none;
}
```

**Good**

```css
.foo {
  border: 0;
}
```

### Syntax

- Use the `.scss` syntax, never the original `.sass` syntax
- Order your regular CSS and `@include` declarations logically (see below)

### Ordering of property declarations

1. Property declarations

   List all standard property declarations, anything that isn't an `@include` or a nested selector.

   ```scss
   .btn-green {
     background: green;
     font-weight: bold;
     // ...
   }
   ```

2. `@include` declarations go first (except `@include media()`)

   Grouping `@include`s at the beginning makes it easier to read the entire selector and override any properties declared by the mixin.
   Place `@include media()` at the end.

   ```scss
   .btn-green {
     @include transition(background 0.5s ease);
     background: green;
     font-weight: bold;

     @include media('<=small') {
       font-weight: normal;
     }
     // ...
   }
   ```

3. Pseudo selectors/classes

   Pseudo selectors/classes (e.g. `::before`, `:hover`) go next after the parent element's styling

   ```scss
   .btn {
     @include transition(background 0.5s ease);
     background: green;
     font-weight: bold;

     &::before {
       content: ' ';
     }
   }
   ```

4. Nested selectors

   Nested selectors go after any pseudo selectors & parent styles

   ```scss
   .btn {
     @include transition(background 0.5s ease);
     background: green;
     font-weight: bold;

     &::before {
       content: ' ';
     }

     &__icon {
       margin-right: 10px;
     }
   }
   ```

### Variables

Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `$_my-variable`).

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions.

### Nested selectors

Try where possible to avoid non-BEM selectors being nested more than 3 levels deep. Drupal can make this problematic, so avoid where possible.

```scss
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```

When selectors become this long, you're likely writing CSS that is:

- Strongly coupled to the HTML (fragile) _—OR—_
- Overly specific (powerful) _—OR—_
- Not reusable

Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.

### Media queries

Using the included `@import media()` mixin (See `./assets/sass/helpers/_mediaq.scss` for default breakpoints), media queries should be placed inline with their parent styling, rather than at the end of the document.
