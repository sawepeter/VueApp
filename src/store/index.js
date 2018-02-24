import Vuex from 'vuex';
import { UPDATE_USERNAME } from
'@/store/actionTypes';

export default new Vuex.Store({
    state: {
        username: '',
    },
    mutations: {
        [UPDATE_USERNAME](state, newusername){
            state.username = newusername;
        }
    }


};