'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
requireDir('gulp-tasks');

gulp.task('dev', gulp.series(
    'clean',
    gulp.parallel(
        'pug',
        'stylus:dev',
        'fonts',
        'img:dev',
        'copy'
    )
));

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'pug',
        'stylus:build',
        'fonts',
        'img:build',
        'copy'
    )
));

gulp.task('default', gulp.series(
    'dev',
    gulp.parallel(
        'watch',
        'server'
    )
));