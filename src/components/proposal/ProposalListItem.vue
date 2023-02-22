<template>
  <p
    :class="{
      'proposal__list__item': true,
      'proposal__approved': proposal.status === ProposalStatus.APPROVED,
      'proposal__clarify': proposal.status === ProposalStatus.CLARIFY,
      'proposal__denied': proposal.status === ProposalStatus.DENIED
    }"
    @click="openProposal"
  >
    {{proposal.name}}
  </p>
</template>

<script>
import {ProposalStatus} from "@/constants/ProposalStatus";

export default {
  name: "ProposalListItem",

  props: {
    proposal: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      ProposalStatus: ProposalStatus
    }
  },

  methods: {
    openProposal() {
      if (!this.proposal.status) {
        this.$router.push({path: `/review/${this.proposal.id}`});
      }
    }
  }
}
</script>

<style scoped>
.proposal__list__item {
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
