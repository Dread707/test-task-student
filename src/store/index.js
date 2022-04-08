import Vue from 'vue';
import Vuex from 'vuex';
import actionsCard from './modules/actionsCard';


Vue.use(Vuex);

export default new Vuex.Store({
    modules:
        {
            actionsCard,
        }
})