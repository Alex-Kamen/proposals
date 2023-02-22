<template>
  <div>
    <ul>
      <li
        v-for="proposal in proposalList"
        :key="proposal.id"
        @click="openProposal(proposal)"
        :class="{
          'proposal__approved': proposal.status === ProposalStatus.APPROVED,
          'proposal__clarify': proposal.status === ProposalStatus.CLARIFY,
          'proposal__denied': proposal.status === ProposalStatus.DENIED
        }"
      >
        {{proposal.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import {ProposalStatus} from "@/constants/ProposalStatus";

export default {
  name: "ProposalList",

  data() {
    return {
      ProposalStatus: ProposalStatus
    }
  },

  computed: {
    proposalList() {
      return this.$store.getters['proposal/list'];
    }
  },

  methods: {
    openProposal(proposal) {
      if (!proposal.status) {
        this.$router.push({path: `/review/${proposal.id}`});
      }
    }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}

.proposal__approved {
  color: green;
}

.proposal__clarify {
  color: yellow;
}

.proposal__denied {
  color: red;
}
</style>
