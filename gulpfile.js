/* Load gulp  */
var gulp = require('gulp-help')(require('gulp'));
var clean = require('del');
var sequence = require('run-sequence');
var pngquant = require('imagemin-pngquant');
var pjson = require('./package.json');

/* Load all of the needed plugins  */
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files', 'wiredep'],
	replaceString: /\bgulp[\-.]/
});
/* Load the help plugin  */
var help = plugins.help(require('gulp'));

var tmpDest = './tmp/';
var buildDest = './dist/';
var devDest = './app/';
var jsFiles = devDest + 'src/**/*.js';
var htmlFiles = devDest + 'src/**/*.html';
var cssFiles = devDest + 'css/**/*.css';
var fontCssFiles = devDest + 'fonts/**/*.css';
var fontFiles = devDest + 'fonts/**/*.{ttf,woff,woff2,eof,svg}';
var imgFiles = devDest + 'img/**';
var jsonFiles = devDest + 'json/**';
var libFiles = devDest + 'lib/**';
var scriptFilename = 'app.min.js';
var scriptVendorFilename = 'vendor.min.js';
var templateFilename = 'templates.min.js';
var cssFilename = 'style.min.css';
var cssVendorFilename = 'vendor.min.css';
var cssFontsFilename = 'fonts.min.css';
var moduleName = pjson.name;
var version = pjson.version;

var AUTOPREFIXER_BROWSERS =
[
	'last 3 versions',
	'ie >= 9'
];

gulp.task('build-clean-temp', 'Deletes the build folder', false, function ()
{
	return clean.sync(tmpDest + '**');
});

gulp.task('build-clean', 'Deletes the build folder', false, function ()
{
	return clean.sync(buildDest + '**');
});

gulp.task('validate-js', 'Validates JS files by running JS Hint', function ()
{
	return gulp.src(jsFiles)
			  .pipe(plugins.jshint())
			  .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', 'Build an optimized version of all JS files', function ()
{
	return gulp.src(jsFiles)
			  .pipe(plugins.concat(scriptFilename))
			  .pipe(plugins.uglify())
			  .pipe(gulp.dest(tmpDest + 'js/'));
});

gulp.task('build-vendor-js', 'Build an optimized version of vendor JS files', function ()
{			  
	return gulp.src([devDest + 'lib/angular/*.js', devDest + 'lib/jquery/**/*.js', devDest + 'lib/angular/*.js', libFiles + '/*.js'])
			  .pipe(plugins.concat(scriptVendorFilename))
			  .pipe(plugins.uglify())
			  .pipe(gulp.dest(tmpDest + 'lib/'));
});

gulp.task('build-css', 'Build an optimized version of all CSS files', function ()
{
	return gulp.src([devDest + 'css/global.css', cssFiles])
			  .pipe(plugins.concat(cssFilename))
			  .pipe(plugins.autoprefixer(AUTOPREFIXER_BROWSERS))
			  .pipe(plugins.csso())
			  .pipe(gulp.dest(tmpDest + 'css/'));
});

gulp.task('build-vendor-css', 'Build an optimized version of vendor CSS files', function ()
{
	return gulp.src(libFiles + '/*.css')
			  .pipe(plugins.concat(cssVendorFilename))
			  .pipe(plugins.autoprefixer(AUTOPREFIXER_BROWSERS))
			  .pipe(plugins.csso())
			  .pipe(gulp.dest(tmpDest + 'lib/'));
});

gulp.task('build-angular-templates', 'Convert the views to an angular template cache file', function ()
{
	return gulp.src(htmlFiles)
			  .pipe(plugins.htmlmin({collapseWhitespace: true}))
			  .pipe(plugins.angularTemplatecache({module: moduleName, base: function (file) {
					  return 'src/' + file.relative;
				  }}))
			  .pipe(plugins.uglify())
			  .pipe(plugins.rename(templateFilename))
			  .pipe(gulp.dest(tmpDest + 'js/'));
});


gulp.task('build-img', 'Copy images to the build location', function ()
{
	return gulp.src(imgFiles)
			  .pipe(plugins.imagemin({
				  progressive: true,
				  svgoPlugins: [{removeViewBox: false}],
				  use: [pngquant()]
			  }))
			  .pipe(gulp.dest(tmpDest + 'img/'));
});

gulp.task('build-json', 'Build an optimized version of all JSON files', function ()
{
	return gulp.src(jsonFiles)
			  .pipe(plugins.jsonminify())
			  .pipe(gulp.dest(tmpDest + 'json/'));
});

gulp.task('build-fonts-css', 'Build an optimized version of all font files', function ()
{
	return gulp.src(fontCssFiles)
			  .pipe(plugins.concat(cssFontsFilename))
			  .pipe(plugins.autoprefixer(AUTOPREFIXER_BROWSERS))
			  .pipe(plugins.csso())
			  .pipe(gulp.dest(tmpDest + 'fonts/'));
});

gulp.task('build-fonts-images', 'Build an optimized version of all font files', function ()
{
	return	gulp.src(fontFiles)
			  .pipe(gulp.dest(tmpDest + 'fonts/'));
});

gulp.task('build-fonts', 'Build an optimized version of all font files', function (callback)
{
	sequence('build-fonts-css', 'build-fonts-images', callback);
});



gulp.task('build-inject', 'Build an optimized version of index.html', function ()
{
	return gulp.src(devDest + 'index.html')
			  .pipe(plugins.inject(gulp.src([tmpDest + 'lib/*.js', tmpDest + 'lib/*.css'], {read: false}), {addRootSlash: false, ignorePath: '/tmp/', name: 'bower'}))
			  .pipe(plugins.inject(gulp.src([tmpDest + 'js/*.js', tmpDest + 'fonts/*.css', tmpDest + 'css/*.css'], {read: false}), {addRootSlash: false, ignorePath: '/tmp/'}))
			  .pipe(gulp.dest(tmpDest));
});

gulp.task('dev-lib-clean', 'Deletes the build folder', false, function ()
{
	return clean.sync(devDest + 'lib/**');
});

gulp.task('dev-copy-main-lib', 'Parses out only the main library files', function ()
{
	return gulp.src(plugins.mainBowerFiles(), {base: './bower_components'})
				.pipe(plugins.rename(function(path)
				{
						path.dirname = path.dirname.split('.').join('-');      
				}))
			  .pipe(gulp.dest(tmpDest));
});

gulp.task('dev-copy-lib', 'Parses out only the required library files for this project', function ()
{
	return gulp.src
	([
		tmpDest + '**', 
		'!' + tmpDest + '**/*.scss', 
		'!' + tmpDest + 'angulartics/**/angulartics-adobe.js', 
		'!' + tmpDest + 'angulartics/**/angulartics-chartbeat.js',
		'!' + tmpDest + 'angulartics/**/angulartics-clicky.js',
		'!' + tmpDest + 'angulartics/**/angulartics-cnzz.js',
		'!' + tmpDest + 'angulartics/**/angulartics-flurry.js',
		'!' + tmpDest + 'angulartics/**/angulartics-ga-cordova.js',
		'!' + tmpDest + 'angulartics/**/angulartics-gtm.js',
		'!' + tmpDest + 'angulartics/**/angulartics-inspectlet.js',
		'!' + tmpDest + 'angulartics/**/angulartics-intercom.js',
		'!' + tmpDest + 'angulartics/**/angulartics-kissmetrics.js',
		'!' + tmpDest + 'angulartics/**/angulartics-marketo.js',
		'!' + tmpDest + 'angulartics/**/angulartics-mixpanel.js',
		'!' + tmpDest + 'angulartics/**/angulartics-newrelic-insights.js',
		'!' + tmpDest + 'angulartics/**/angulartics-piwik.js',
		'!' + tmpDest + 'angulartics/**/angulartics-scroll.js',
		'!' + tmpDest + 'angulartics/**/angulartics-segmentio.js',
		'!' + tmpDest + 'angulartics/**/angulartics-splunk.js',
		'!' + tmpDest + 'angulartics/**/angulartics-woopra.js'
	])
			   .pipe(gulp.dest(devDest + 'lib/'));
});

gulp.task('dev-bower-lib', 'Parses out only the required library files', function (callback)
{
	sequence('dev-lib-clean', 'dev-copy-main-lib', 'dev-copy-lib', 'build-clean-temp', callback);
});

gulp.task('dev-inject', 'Build an optimized version of index.html', function ()
{
	return gulp.src(devDest + 'index.html')
			  .pipe(plugins.inject(gulp.src([devDest + 'lib/angular/*.js', devDest + 'lib/jquery/**/*.js', libFiles + '/*.js', libFiles + '/*.css'], {read: false}), {addRootSlash: false, ignorePath: '/app/', name: 'bower'}))
			  .pipe(plugins.inject(gulp.src([jsFiles, fontCssFiles, devDest + 'css/global.css', cssFiles], {read: false}), {addRootSlash: false, ignorePath: '/app/'}))
			  .pipe(gulp.dest(devDest));
});


gulp.task('build-rev', function () {

    var revAll = new plugins.revAll({ dontRenameFile: [/^\/index.html/g, /^\/json\/en-us.json/g] });
    return gulp.src(tmpDest + '**')
				.pipe(revAll.revision())
				.pipe(gulp.dest(buildDest));

});

gulp.task('build', 'Build an optimiszed version of the entire application', function (callback)
{
	sequence('build-clean', 'validate-js', 'build-js', 'build-angular-templates', 'build-css', 'build-vendor-js', 'build-vendor-css', 'build-img', 'build-json', 'build-fonts', 'build-inject', 'build-rev', 'build-clean-temp', callback);
});