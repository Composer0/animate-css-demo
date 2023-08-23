import gulpif from 'gulp-if';
import { src, watch, series, parallel, dest } from 'gulp';
import browserSync, { stream } from 'browser-sync';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import del from 'del';
import touch from 'gulp-touch-cmd';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import webp from 'gulp-webp';
import rename from 'gulp-rename';
import replace from 'gulp-ext-replace'
import changed from 'gulp-changed'
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import yargs from 'yargs';

const PRODUCTION = yargs.argv.prod;
const args = yargs.argv;
const SKIP_WEBP = args[ 'original' ];
const server = browserSync.create();

const paths = {
	to: 'dist',
	styles: {
		src: 'src/scss/style.scss',
		to: 'dist/css'
	},
	images: {
		src: 'src/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
		to: 'dist/images'
	},
	scripts: {
		src: [
			'src/js/bundle.js'
		],
		to: 'dist/js'
	},
	otherFiles: [
		'src/**/*',
		'!src/{images,js,scss}',
		'!src/{images,js,scss}/**/*'
	],
	watch: {
		styles: 'src/scss/**/*.scss',
		scripts: 'src/js/**/*.js',
		markup: '*.(html|php)',
	}
};

export const styles = () => {
	return src( paths.styles.src )
		.pipe( gulpif( ! PRODUCTION, sourcemaps.init() ) )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( gulpif( PRODUCTION, postcss([ autoprefixer ]) ) )
		.pipe( gulpif( PRODUCTION, cleanCss({compatibility: 'ie8'}) ) )
		.pipe( gulpif( ! PRODUCTION, sourcemaps.write() ) )
		.pipe( dest( paths.styles.to ) )
		.pipe( server.stream() )
		.pipe( touch() );
};

export const images = () => {

	if (SKIP_WEBP) {

		console.log('original conversion')
		return src(paths.images.src)
			.pipe(changed(paths.images.to)) // check if the file has been modified or is new.
			.pipe(imagemin([
				mozjpeg({ quality: 80 }),
				pngquant({ quality: [0.75, 0.75] }),
				imagemin.svgo({
					plugins: [{ removeViewBox: false }]
				})
			]))
			.pipe(dest(paths.images.to));

	} else {

		console.log('convert webp')
		return src(paths.images.src)
			.pipe(gulpif(file => file.extname === '.svg', imagemin([
				imagemin.svgo({
					plugins: [{ removeViewBox: false }]
				})
			])))
			.pipe(gulpif(file => file.extname !== '.svg', rename({ extname: '.webp' }).pipe(webp({ quality: 82 }))))
			.pipe(dest(paths.images.to))

	}
	
};


export const scripts = () => {
	return src( paths.scripts.src )
		.pipe( named() )
		.pipe( webpack({
			module: {
				rules: [
					{
						test: /\.js$/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: [ '@babel/preset-env' ]
							}
						}
					}
				]
			},
			mode: PRODUCTION ? 'production' : 'development',
			devtool: ! PRODUCTION ? 'inline-source-map' : false,
			output: {
				filename: '[name].js'
			}
		}) )
		.pipe( dest( paths.scripts.to ) );
};

export const serve = done => {
	server.init({
        server: {
            baseDir: "./"
        }
    });
	done();
};

export const reload = done => {
	server.reload();
	done();
};

export const copy = () => {
	return src( paths.otherFiles )
		.pipe( dest( paths.to ) );
};

export const clean = () => del( paths.to );

export const watchForChanges = () => {
	watch( paths.watch.styles, styles );
	watch( paths.images.src, series( images, reload ) );
	watch( paths.otherFiles, series( copy, reload ) );
	watch( paths.watch.scripts, series( scripts, reload ) );
	watch( paths.watch.markup, reload );
};

export const dev = series( clean, parallel( styles, images, copy, scripts ), serve, watchForChanges );
export const build = series( clean, parallel( styles, images, copy, scripts ) );
export default dev;
