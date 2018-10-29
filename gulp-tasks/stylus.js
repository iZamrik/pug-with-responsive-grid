import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// Development tasks

gulp.task('stylus:dev', () => {
    return gulp.src('src/static/stylus/index.styl')
        .pipe($.sourcemaps.init())
        .pipe($.stylus({
            'include css': true
        }))
        .on('error', $.notify.onError((error) => {
            return {
                title: 'Stylus',
                message: error.message
            };
        }))
        .pipe($.sourcemaps.write())
        .pipe($.autoprefixer({
            browsers: ['last 10 version']
        }))
        .pipe($.csscomb())
        .pipe(gulp.dest('build/static/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Production tascks

gulp.task('stylus:build', () => {
    return gulp.src('src/static/stylus/index.styl')
        .pipe($.stylus({
            'include css': true
        }))
        .on('error', $.notify.onError((error) => {
            return {
                title: 'Stylus',
                message: error.message
            };
        }))
        .pipe($.autoprefixer({
            browsers: ['last 10 version']
        }))
        .pipe($.csscomb())
	.pipe($.crass())
        .pipe($.csso())
        .pipe(gulp.dest('build/static/css'));
});