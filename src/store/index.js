import Vue from 'vue'
import Vuex from 'vuex'
import loader from "./loader";
Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        accounts: [],
        currentBlock: '#mh-home',
        error: {
            name: '',
            message: '',
            stack: '',
        },
    },
    mutations: {
        setCurrentBlock(state, data) {
            state.currentBlock = data;
        },
        setError(state, e) {
            state.error.name = e.name;
            state.error.message = e.message;
            state.error.stack = e.stack;
        },
        clearError(state) {
            state.error.name = '';
            state.error.message = '';
            state.error.stack = '';
        },
        addRowAccounts(state, newItem) {
            if (!state.accounts.filter(item => item.AcctNum == newItem.AcctNum)[0])
                state.accounts.push({AcctNum: newItem.AcctNum});
        },
    },
    actions: {
        fetchAllData({commit}) {
            commit('fetchAllData');
        }
    },
    getters: {
        error(state) {
            return state.error;
        },
        getCurrentBlock: state => state.currentBlock,
    },
    modules: {
        //loader
        loader,
    },
})
