const mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/resources/app.js')
   .sass('src/scss/app.scss', 'dist/resources/app.css')
   .setPublicPath('dist');