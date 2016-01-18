var gulp = require('gulp'),
sass = require('gulp-ruby-sass');


gulp.task("sas", function(){
	return gulp.src('/scss/**/*.scss')
	.pipe(sas().on('error', sass.logError))
	.pipe(gulp.dest('/css/'));

});

