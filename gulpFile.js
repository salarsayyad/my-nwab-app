var gulp = require('gulp')
var shell = require('gulp-shell')

var NodeWebkitBuilder = require('node-webkit-builder');

// Run project
gulp.task('run', shell.task([
    'node_modules/node-webkit-builder/bin/nwbuild -v 0.12.2 -r ./'
]));