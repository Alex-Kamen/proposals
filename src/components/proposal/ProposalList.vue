<template>
  <div>
    <ProposalListItem
      v-for="proposal in proposalList"
      :key="proposal.id"
      :proposal="proposal"
    />
  </div>
</template>

<script>
import ProposalListItem from "@/components/proposal/ProposalListItem";

export default {
  name: "ProposalList",

  components: {
    ProposalListItem
  },

  computed: {
    proposalList() {
      return this.$store.getters['proposal/list'];
    }
  }
}
</script>
