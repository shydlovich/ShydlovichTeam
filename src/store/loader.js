export default {
    state:{
        loader: {
            show: false,
            delay: 0,
            manual: false,
        },
    },
    mutations:{
        setLoader(state, {show = false, delay = 0, manual = false} = {}) {
            state.loader.show = show;
            state.loader.delay = delay;
            state.loader.manual = manual;
        },
    },
    actions:{
        setLoader({commit}, {show = false,  delay = 3200, manual = false} = {}) {
            commit('setLoader', {show,  delay, manual});

            if (show && !manual) {
                setTimeout(() => {
                    commit('setLoader');
                    console.log('Лоадер закрылся автоматически');
                }, delay);
            }
        },
    },
    getters:{
        loader(state) {
            return state.loader;
        },
    },
};
