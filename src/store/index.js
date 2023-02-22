import Vue from 'vue';
import Vuex from 'vuex';
import ProposalState from '@/store/modules/proposal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    proposal: ProposalState,
  }
})
