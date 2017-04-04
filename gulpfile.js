var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');
//编译less
gulp.task('less', function () {
return gulp.src('src/index.less')
 .pipe(less())
 //.pipe(minifyCSS())
 .pipe(gulp.dest('dist/css'));
});
//监听less文件
gulp.task('autoless', function () {
gulp.watch('src/*.less', ['less'])
})
//编译es6
gulp.task('babel', () => {
return gulp.src(['dist/**.js'])
 .pipe(babel({ presets: ['es2015'] }))
 .pipe(gulp.dest('dist/js'));
});
//监听js文件
gulp.task('autojs', function () {
gulp.watch('./dist/**.js', ['babel'])
});
//监听所有打包之后的文件变动，自动刷新页面
gulp.task('watch', function () {
// Create LiveReload server
livereload.listen();
// Watch any files in dist/, reload on change
gulp.watch('./src/*.less', ['less']);
gulp.watch(['./dist/**']).on('change', livereload.changed);
gulp.watch('./dist/index.html').on('change', browserSync.reload);
});
// 使用 gulp.task('default') 定义默认任务
gulp.task('default', ['less', 'autoless', 'babel', 'autojs', 'watch']

//就这吧。。。。