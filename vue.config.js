module.exports = {
    publicPath: './',
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    "transpileDependencies": [
        "vuetify"
    ],
    productionSourceMap: false,
    css: {
        requireModuleExtension: true
    },
    pwa: {
        iconPaths: {
            favicon16: 'img/favicon/favicon.ico',
            favicon32: 'img/favicon/favicon-32x32.png',
            msTileImage: 'img/favicon/favicon.ico',
        }
    },
}
