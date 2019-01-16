const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// image :default
function defaultTask(cb) {
    gulp.src('src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
    cb();
}
// html
gulp.task('minify-html', () => {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'))
})
// css
gulp.task('minify-css',()=>{
    return gulp.src('src/css/*.css')
        .pipe(cleanCss({compatibility:'ie8'}))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('minify-js', ()=>{
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

exports.default = defaultTask;