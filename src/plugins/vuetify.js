import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
// import ru from 'vuetify/es5/locale/ru'


Vue.use(Vuetify);


export default new Vuetify({

    // treeShake: true,
    // lang: {
    //     locales: {
    //         ru: ru.default
    //     },
    //     current: 'ru'
    // },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        dark: true,
        themes: {
            light: {
                background: "#ffffff", // #E53935
                primary: "#f5ae51", // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5

            },
            dark: {

                background: "#100e17", // #E53935
                primary: "#f5ae51", // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5

            },
        },

    },

});
