import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('ttf2eot', () => {
    return gulp.src('src/static/fonts/**/*.ttf')
        .pipe($.ttf2eot())
        .on('error', $.notify.onError((error) => {
            return {
                title: 'ttf2eot',
                message: error.message
            };
        }))
        .pipe(gulp.dest('build/static/fonts'))
});

gulp.task('ttf2woff', () => {
    return gulp.src('src/static/fonts/**/*.ttf')
        .pipe($.ttf2woff())
        .pipe(gulp.dest('build/static/fonts'))
});

gulp.task('ttf2svg', () => {
    return gulp.src('src/static/fonts/**/*.ttf')
        .pipe($.ttf2svg())
        .on('error', $.notify.onError((error) => {
            return {
                title: 'ttf2svg',
                message: error.message
            };
        }))
        .pipe(gulp.dest('build/static/fonts'))
});

gulp.task('ttf2prod', () => {
    return gulp.src('src/static/fonts/**/*.ttf')
        .pipe(gulp.dest('build/static/fonts'))
});

gulp.task('fonts', gulp.series(
    'ttf2prod',
    gulp.parallel(
        'ttf2eot',
        'ttf2woff',
        'ttf2svg'
    )));