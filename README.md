<h2 align='center'><samp>vite-plugin-restart-2</samp></h2>
<p align="center">This is the fork repository of original vite plugin <a href="https://github.com/antfu/vite-plugin-restart">vite-plugin-restart</a> from <a href="https://github.com/antfu">Anthony Fu</a> to add an option to provide on what type of event **add**, **unlink** or **change** the vite to restart/reload server.</p>

<p align='center'>Custom files/globs to restart Vite server</p>

<p align='center'>
<a href='https://www.npmjs.com/package/vite-plugin-restart-2'>
<img src='https://img.shields.io/npm/v/vite-plugin-restart-2?color=222&style=flat-square'>
</a>
</p>

<br>

## Usage

Install

```bash
npm i vite-plugin-restart-2 -D # yarn add vite-plugin-restart-2 -D
```

Add it to `vite.config.js`

```ts
// vite.config.js
import ViteRestart from 'vite-plugin-restart-2'

export default {
  plugins: [
    ViteRestart({
      restart: [
        'my.config.[jt]s',
      ]
    })
  ],
}
```

Changes to `my.config.js` or `my.config.ts` will now restart the server automatically.

## Motivation

Byebye `nodemon -w my.config.js -x 'vite'`

## License

MIT License © 2025 [Kathiravan K](https://github.com/kathirr007)
