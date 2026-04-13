// Gulp and package
const {src, dest, parallel, series, watch} = require('gulp');

// Plugins
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const tildeImporter = require('node-sass-tilde-importer');
const cssnano = require('cssnano');
const pixrem = require('pixrem');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const gulUglifyES = require('gulp-uglify-es');
const rtlcss = require('gulp-rtlcss');

const sass = gulpSass(dartSass);
const uglify = gulUglifyES.default;


const pluginFile = {
    vendorsCSS: [],
    vendorsJS: []
}


const paths = {
    baseSrcAssets: "./public",   // source assets directory
    baseDistAssets: "./public",  // build assets directory
};


const processCss = [
    autoprefixer(), // adds vendor prefixes
    pixrem(), // add fallbacks for rem units
];

const minifyCss = [
    cssnano({preset: 'default'}), // minify result
];

const scss = function () {
    const out = paths.baseDistAssets + "/css/";

    return src(paths.baseSrcAssets + "/scss/**/*.scss")
        .pipe(
            sass({
                importer: tildeImporter,
                includePaths: [paths.baseSrcAssets + "/scss"],
            }).on('error', sass.logError),
        )
        .pipe(plumber()) // Checks for errors
        .pipe(postcss(processCss))
        .pipe(dest(out))
        .pipe(rename({suffix: '.min'}))
        .pipe(postcss(minifyCss)) // Minifies the result
        .pipe(dest(out));
};

const rtl = function () {
    const out = paths.baseDistAssets + "/css/";

    return src(paths.baseSrcAssets + "/scss/**/*.scss")
        .pipe(
            sass({
                importer: tildeImporter,
                includePaths: [paths.baseSrcAssets + "/scss"],
            }).on('error', sass.logError),
        )
        .pipe(plumber()) // Checks for errors
        .pipe(postcss(processCss))
        .pipe(dest(out))
        .pipe(rtlcss())
        .pipe(rename({suffix: "-rtl.min"}))
        .pipe(postcss(minifyCss)) // Minifies the result
        .pipe(dest(out));
};


const vendorStyles = function () {
const out = paths.baseDistAssets + "/css/";

return src(pluginFile.vendorsCSS, {sourcemaps: true, allowEmpty: true})
    .pipe(concat('vendors.css'))
    .pipe(plumber()) // Checks for errors
    .pipe(postcss(processCss))
    .pipe(dest(out))
    .pipe(rename({suffix: '.min'}))
    .pipe(postcss(minifyCss)) // Minifies the result
    .pipe(dest(out));
}


const vendorScripts = function () {
    const out = paths.baseDistAssets + "/js/";

    return src(pluginFile.vendorsJS, {sourcemaps: true, allowEmpty: true})
        .pipe(concat('vendors.js'))
        .pipe(dest(out))
        .pipe(plumber()) // Checks for errors
        .pipe(uglify()) // Minifies the js
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(out, {sourcemaps: '.'}));
}


const watchFiles = function () {
    watch(paths.baseSrcAssets + "/scss/**/*.scss", series(scss));
}

// Production Tasks
exports.default = series(
    vendorStyles, vendorScripts,
    parallel(scss),
    parallel(watchFiles)
);

// Build Tasks
exports.build = series(
    vendorStyles, vendorScripts,
    parallel(scss)
);

// RTL Tasks
exports.rtl = series(
    vendorStyles, vendorScripts,
    parallel(rtl),
    parallel(watchFiles)
);

// RTL Build Tasks
exports.rtlBuild = series(
    vendorStyles, vendorScripts,
    parallel(rtl),
);