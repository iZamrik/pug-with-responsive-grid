import gulp from 'gulp';

gulp.task('copy', () => {
    return gulp.src(['src/.htaccess', 'src/robots.txt'])
        .pipe(gulp.dest('./build'));
});