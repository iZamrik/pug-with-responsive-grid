import gulp from 'gulp';
import fs from 'fs';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('pug', () => {
    return gulp.src('src/pug/pages/**/*.pug')
        .pipe($.pug({
    	    pretty: true
        }))
        .on('error', $.notify.onError((error) => {
            return {
                title: 'Pug',
                message: error.message
            };
        }))
        .pipe(gulp.dest('build'))
        .on('end', browserSync.reload);
});