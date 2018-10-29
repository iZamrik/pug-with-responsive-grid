import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// Development tasks

gulp.task('img:dev', () => {
    return gulp.src('src/static/img/**/*.{png,gif,jpg,json}')
        .pipe(gulp.dest('build/static/img'))
        .on('end', browserSync.reload);
});

// Production tascks

gulp.task('img:build', () => {
    return gulp.src('src/static/img/**/*.{png,gif,jpg,json}')
        .pipe($.imagemin())
        .on('error', $.notify.onError((error) => {
            return {
                title: 'imagemin',
                message: error.message
            };
        }))
        .pipe(gulp.dest('build/static/img'))

});