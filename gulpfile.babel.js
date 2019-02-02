import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';

import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import webpack from 'webpack-stream';
import named from 'vinyl-named';

import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminZopfli from 'imagemin-zopfli';
import imageminGiflossy from 'imagemin-giflossy';

import del from 'del';

const PRODUCTION = yargs.argv.prod;

export const css = () =>
  src('themes/calliope/src/css/styles.scss')
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cssnano()))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write('.')))
    .pipe(dest('themes/calliope/static/css'));

export const js = () =>
  src(['themes/calliope/src/js/script.js'])
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: []
                }
              }
            }
          ]
        },
        mode: PRODUCTION ? 'production' : 'development',
        devtool: !PRODUCTION ? 'inline-source-map' : false,
        output: {
          filename: '[name].js'
        }
      })
    )
    .pipe(dest('themes/calliope/static/js'));

export const images = () =>
  src('themes/calliope/src/img/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(
      gulpif(
        PRODUCTION,
        imagemin([
          imageminPngquant({
            speed: 1,
            quality: 98
          }),
          imageminZopfli({
            more: true
            // iterations: 50
          }),
          imageminGiflossy({
            optimizationLevel: 3,
            optimize: 3,
            lossy: 2
          }),
          imagemin.svgo({
            plugins: [
              {
                remoteViewBox: false
              }
            ]
          }),
          imagemin.jpegtran({
            progressive: true
          }),
          imageminMozjpeg({ quality: '90' })
        ])
      )
    )
    .pipe(dest('themes/calliope/static/img'));

export const clean = () => del(['themes/calliope/static']);

export const watchForChanges = () => {
  watch('themes/calliope/src/css/**/*.scss', css);
  watch('themes/calliope/src/js/**/*.js', js);
  watch('themes/calliope/src/img/**/*.{jpg,jpeg,png,svg,gif}', images);
};

export const dev = series(clean, parallel(css, js, images), watchForChanges);

export const build = series(clean, parallel(css, js, images));

export default dev;
