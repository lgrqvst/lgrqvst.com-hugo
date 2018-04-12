const gulp = require('gulp');
const pump = require('pump');

gulp.task('css', function(done) {
  const sass = require('gulp-sass');
  const sourcemaps = require('gulp-sourcemaps');
  const cssnano = require('gulp-cssnano');

  pump([
      gulp.src('src/css/styles.scss'),
      sourcemaps.init(),
      sass().on('error',sass.logError),
      cssnano(),
      sourcemaps.write('.'),
      gulp.dest('static/css')
    ],
    done
  );
  done();
});

gulp.task('js', function(done) {
  const concat = require('gulp-concat');
  const rename = require('gulp-rename');
  const uglify = require('gulp-uglify');
  const babel = require('gulp-babel');

  pump([
      gulp.src('src/js/**/*.js'),
      babel({
        presets: ['env']
      }).on('error', console.error.bind(console)),
      uglify(),
      gulp.dest('static/js')
    ],
    done
  );
  done();
});

gulp.task('watch', function(done) {
  gulp.watch('src/css/*.scss', gulp.parallel('css'));
  gulp.watch('src/js/**/*.js', gulp.parallel('js'));
  done();
});

gulp.task('default', gulp.series('css','js','watch', function(done) {
  done();
}));
