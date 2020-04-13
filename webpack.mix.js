const mix = require('laravel-mix');

mix.js('src/js/app.js', 'docs/resources/app.js')
   .sass('src/scss/app.scss', 'docs/resources/app.css')
   .setPublicPath('docs');