'use strict';

// Если нужно установить плагины - пробуем установить их с помощью одной стороки которая написана ниже (надеюсь у вас сработает !!!!).
// npm install gulp gulp-sass gulp-rename gulp-minify-css browser-sync gulp-imagemin gulp-watch gulp-wait gulp-pug gulp-util gulp-autoprefixer del gulp-uglify --save-dev 

// test
//Init Plugins
var gulp  			= require('gulp'), //npm install --global gulp-cli   ,  npm install --save-dev gulp
	sass 			= require('gulp-sass'), // npm install gulp-sass --save-dev
	cssbeautify 	= require('gulp-cssbeautify'), // npm install --save-dev gulp-cssbeautify
	rename 			= require('gulp-rename'), // npm install --save-dev  gulp-rename
	minifyCSS 		= require('gulp-minify-css'), // npm install --save-dev  gulp-minify-css
	browserSync 	= require('browser-sync'), // npm install browser-sync --save-dev
	imagemin 		= require('gulp-imagemin'), // npm install --save-dev gulp-imagemin
	watch 			= require('gulp-watch'), // npm install --save-dev gulp-watch
	wait 			= require('gulp-wait'), // npm install --save-dev gulp-wait
	pug 			= require('gulp-pug'), // npm install --save-dev gulp-pug
	prettify 		= require('gulp-prettify'), // npm install --save-dev gulp-prettify
	cached 			= require('gulp-cached'), // npm install gulp-cached --save-dev
	gutil 			= require('gulp-util'), // npm install --save-dev gulp-util
	autoprefixer 	= require('gulp-autoprefixer'), // npm install --save-dev gulp-autoprefixer
	del 			= require('del'), // npm install --save-dev del
	vinylFtp 		= require( 'vinyl-ftp'), // npm install --save-dev vinyl-ftp
	plumber 		= require('gulp-plumber'), // npm install --save-dev gulp-plumber
    zip             = require('gulp-zip'), // npm install --save-dev gulp-zip
	uglify 			= require('gulp-uglify'); // npm install --save-dev gulp-uglify

var path = {

	//Тут мы укажем куда складывать готовые после сборки файлы
	build: {
		buildPath: 'build/**/*',
		htmlPath: 'build/',
        jsPath: 'build/js/',
        jsMinPath: 'build/js/min/',
        pluginsPath: 'build/plugins/',
        cssPath: 'build/css/',
        minCssPath: 'build/css/min/',
        scssPath: 'build/scss/',
        imagesPath: 'build/images/',
        fontsPath: 'build/fonts/',
	},

	src: {
		srcPath: 'app',
		htmlPath: 'app/*.html', 
		allPug: 'app/pug/**/*.pug',
		pugPath: 'app/pug/*.pug', 
        allJsPath: 'app/js/**/*.js',
        pluginsPath: 'app/plugins/**/*.*',
        scssPath: 'app/scss/**/*.scss',
        cssPath: 'app/css/**/*.css',
        cssGlobalPath: 'app/css',
        imagesPath: 'app/images/**/*.*',
        fontsPath: 'app/fonts/**/*.*',
        jsPath: [
        	'app/js/**/*.js',
        	'!app/js/**/*min.js'
        ]
	}

};


//<!--  Pug Task        ============================================ -->
	gulp.task('pug', function buildHTML() {
	  	return gulp.src(path.src.pugPath)
	  	//.pipe(plumber({
	    //  errorHandler: onError
	    //}))
	  	.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(prettify({
			indent_size: 4
		}))
	  	.pipe(cached('pug'))
		.pipe(gulp.dest(path.src.srcPath))
		.pipe(browserSync.reload({stream: true}))
		.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Pug converted to HTML Succesfully! - - - - - - - - - - - - - '); })
		.on('error', gutil.log);
	});

//<!--  SCss Task        ============================================ -->
	gulp.task('scss', function () {
		return gulp.src(path.src.scssPath)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(wait(500))
		.pipe(sass().on('error', sass.logError))
		.pipe(cached('scss'))
		.pipe(cssbeautify({
            indent: '  ',
            openbrace: 'end-of-line',
            autosemicolon: true
        }))
		.pipe(gulp.dest(path.src.cssGlobalPath))
		.pipe(browserSync.reload({stream: true}))
		.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Styles Complete! - - - - - - - - - - - - - '); })
		.on('error', gutil.log);
	});


//<!--  Js Task        ============================================ -->
	gulp.task('js', function () {
		return gulp.src(path.src.jsPath) 
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		//.pipe(gulp.dest(path.src.jsPath)) 
		.pipe(browserSync.reload({stream: true}))
		.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Js Complete! - - - - - - - - - - - - - '); })
		.on('error', gutil.log);
	});

//<!--  Plugins Task        ============================================ -->
	gulp.task('plugins', function () {
		return gulp.src(path.src.pluginsPath)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		//.pipe(gulp.dest(path.src.pluginsPath))
		.pipe(browserSync.reload({stream: true}))
		.on('end', function(){ gutil.log(' - - - - - - - - - - - - - Plugins Complete! - - - - - - - - - - - - - '); })
		.on('error', gutil.log);
	});


//<!--  BrowserSync server Task        ============================================ -->
	gulp.task('browser-sync', function() { // Создаем таск browser-sync
	    browserSync({ // Выполняем browser Sync
	        server: { // Определяем параметры сервера
	            baseDir: 'app' // Директория для сервера - app
	        },
	        notify: false // Отключаем уведомления
	    });
	});


//<!--  Delete build folder        ============================================ -->
	gulp.task('delete', function(){
		return del.sync('build');
	});


//<!--  Default Watch Task        ============================================ -->
	gulp.task('default', ['browser-sync', 'scss', 'pug'], function() {  
		
		gulp.watch([path.src.scssPath], ['scss']); 

		gulp.watch([path.src.allPug], ['pug']); 

		gulp.watch([path.src.allJsPath], ['js']); 

		gulp.watch([path.src.pluginsPath], ['plugins']);

	});

//<!--  DEPLOY         ============================================ -->
gulp.task( 'deploy', function () {
 
    var conn = vinylFtp.create( {
		host:     'shamriko.ftp.ukraine.com.ua',
        user:     'shamriko_alex',
        password: '4vY51ZuyK8',
        parallel: 10,
        log:      gutil.log
    } );
 
    var globs = [
        'build/**'
    ];
 
    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
 
    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html/projects/project_name' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html/projects/project_name' ) );
 
} );


//<!--  Build Task        ============================================ -->
    // Когда проект полностью готов - вызываем таск ( gulp build ) - он создает папку build и заливает готовый проект внутрь папки. 

    // Html build
    gulp.task('html:build', function () {  
        gulp.src(path.src.htmlPath)  
        .pipe(gulp.dest(path.build.htmlPath));
    });

    // Js build
    gulp.task('js:build', function () {
        gulp.src(path.src.allJsPath) 
        .pipe(gulp.dest(path.build.jsPath));
    });

    // MinJs build
    gulp.task('minjs:build', function () {
        gulp.src(path.src.jsPath)
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.jsMinPath));
    });

    // Plugins build
    gulp.task('plugins:build', function () {
        gulp.src(path.src.pluginsPath) 
        .pipe(gulp.dest(path.build.pluginsPath)); 
    });

    // Images min build
    gulp.task('images:build', function () {
            gulp.src(path.src.imagesPath)
            // .pipe(imagemin({
            //         interlaced: true,
            //         progressive: true,
            //         optimizationLevel: 5,
            //         svgoPlugins: [{removeViewBox: true}]
            // }))
            .pipe(gulp.dest(path.build.imagesPath));
    });

    // Fonts build
    gulp.task('fonts:build', function() {
        gulp.src(path.src.fontsPath)
        .pipe(gulp.dest(path.build.fontsPath));
    });

    // Scss build
    gulp.task('scss:build', function() {
        gulp.src(path.src.scssPath) 
        .pipe(gulp.dest(path.build.scssPath)); 
    });

    // Css build
    gulp.task('css:build', function() {
        gulp.src(path.src.cssPath) 
        .pipe(autoprefixer({
            //browsers: ['last 15 versions','> 1%', 'ie 8', 'ie 7'],
            //cascade: true
            browsers: ['last 16 versions'], // 'last 2 versions'
            cascade: true // false
        }))
        .pipe(gulp.dest(path.build.cssPath)) 
        .pipe(minifyCSS(''))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.minCssPath));
    });

    gulp.task('build', [
        'delete',
        'html:build',
        'js:build',
        'minjs:build',
        'plugins:build',
        'scss:build',
        'css:build',
        'fonts:build',
        'images:build'
    ]);


//<!--  ZIP Task        ============================================ -->
// Если проект нужно заархивировать - в консоли прописываем таск ( gulp zip ) - он берет нашу готовую папку production и архивирует ее.
gulp.task('zip', function () {
    gulp.src('build/**')
    .pipe(zip('build.zip'))
    .pipe(gulp.dest('build zip file'))
});