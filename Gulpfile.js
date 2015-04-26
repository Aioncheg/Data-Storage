var gulp = require('gulp'),
	connect = require('gulp-connect'),
	watch = require('gulp-watch'),
	compass = require('gulp-compass'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename');

// Local Server
gulp.task('connect', function () {
	connect.server({
		root: '',
		livereload: true,
		port: 8888
	})
});

// Styles
gulp.task('styles', function () {
	gulp.src(['_/sass/*.scss'])
		.pipe(compass({
			css: 'public/css',
			sass: '_/sass'
		}))
		.pipe(gulp.dest('public/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('public/css'))
		.pipe(connect.reload());
});

// HTML
gulp.task('html', function () {
	gulp.src('*.html')
		.pipe(connect.reload());
});

// Watcher
gulp.task('watch', function () {
	// watch .scss files
	gulp.watch('_/sass/*.scss', ['styles']);
	// watch .html files
	gulp.watch('*.html', ['html']);
});

// Default task
gulp.task('default', ['connect', 'watch']);