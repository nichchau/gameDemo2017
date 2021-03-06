[![Build Status](https://travis-ci.org/telerik/kendo-theme-default.svg?branch=master)](https://travis-ci.org/telerik/kendo-theme-default)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-theme-default.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-theme-default)


# Kendo UI Default Theme

* [Overview](https://github.com/telerik/kendo-default-theme#overview)
* [Basic Usage](https://github.com/telerik/kendo-default-theme#basic-usage)

## Overview

The Kendo UI Default Theme is a SCSS-based theme for the Kendo UI components.

Currently, it is available for the following suites:  

* Kendo UI for React.
* Kendo UI for Angular 2.

We are working on providing support for the Default Theme in Kendo UI jQuery suite too.

## Basic Usage

For more information on how to use the Default Theme in Angular 2 and React projects, refer to [its introductory topic](docs/index.md).

## Customization

To customize the Default Theme in one swoop, use the colors defined in the [`styles/_variables.scss` file](styles/_variables.scss). Any change in this file is propagated to every component.

To style a specific component, use the variables used in its specific `.scss` file.

The theme is built by running `npm run build`. The `dist/all.css` file contains the complete theme that you can use in your project.

## Development

Styles are split into components and the dependencies are managed by the [`import-once` mixin](styles/mixins/_import-once.scss). When configuring the styles, define them within an `import-once` block so that they are bundled once when required from multiple files.

During development, the SCSS files are linted on every `commit` and built on every `push` command. The theme package can be tested against a component by linking the theme in the components package.

Upon build, browser-specific properties are generated through the [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).
