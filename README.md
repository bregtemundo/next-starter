## Next.js Starter

![Dependencies](https://david-dm.org/bregtemundo/next-starter/status.svg)

![devDependencies](https://david-dm.org/bregtemundo/next-starter/dev-status.svg)

## fonts

- place your font files (woff, woff2) inside public/assets/fonts/
  folder.
- edit src/styles/base/\_typography.scss and load the fonts with the `font-face( $name, $path, $weight: null, $style: null, $exts: eot woff2 woff ttf svg)` function
- define a fallback font in same settings file with size-adjust to prevent content shift while loading font
- for title fonts it might help to preload them in \_document.jsx to prevent FOUT
- edit src/styles/lib/settings/\_fonts.scss and define font styles and font sizes

## favicons

- generate icons on https://realfavicongenerator.net/ and place in the public/assets/images/icons folder
