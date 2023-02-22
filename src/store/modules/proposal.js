import {ProposalStatus} from "@/constants/ProposalStatus";

export default {
  namespaced: true,

  state: () => ({
    list: [
      {
        id: 1,
        name: 'Купить молоко',
        status: ProposalStatus.ACTIVE
      },
      {
        id: 2,
        name: 'Запросить документ формы М2',
        status: ProposalStatus.ACTIVE
      },
      {
        id: 3,
        name: 'Починка двери',
        status: ProposalStatus.ACTIVE
      },
    ]
  }),

  mutations: {
    activeDesire(state, [proposal, status]) {
      proposal.status = status;

      state.list = state.list.map(listProposal => listProposal.id !== proposal.id ? listProposal : proposal);
    }
  },

  actions: {
    activeDesire({commit}, [proposal, status]) {
      commit('activeDesire', [proposal, status]);
    }
  },

  getters: {
    list: (state) => state.list,

    proposalById: (state) => (id) => state.list.find(proposal => proposal.id === id)
  }
}
