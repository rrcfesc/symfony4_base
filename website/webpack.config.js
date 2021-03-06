var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // delete old files before creating them
    .cleanupOutputBeforeBuild()
    // add debug data in development
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    // generate only two files: app.js and app.css
    .addEntry('layoutcore', './assets/app.js')
    // enable sass/scss parser
    .enableSassLoader()
    // .enableVueLoader()
    // show OS notifications when builds finish/fail
    .enableBuildNotifications()
    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()
    // for "legacy" applications that require $/jQuery as a global variable
    .autoProvidejQuery()
    .enableVueLoader()

    .enableTypeScriptLoader()

    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: false
    })
    .enableSingleRuntimeChunk()
    // add hash after file name
    .configureFilenames({
        js: '[name].js?[chunkhash]',
        css: '[name].css?[contenthash]',
        images: 'images/[name].[ext]?[hash:8]',
        fonts: 'fonts/[name].[ext]?[hash:8]'
    })
;
module.exports = Encore.getWebpackConfig();