import gulp from 'gulp';
import browserSync from 'browser-sync';

browserSync.create();


gulp.task('watch', () => {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/stylus/**/*.styl', gulp.series('stylus:dev'));
    gulp.watch('src/static/img/**/*.{png,jpg,gif}', gulp.series('img:dev'));
    gulp.watch('src/static/fonts/**/*.ttf', gulp.series('fonts'));
});