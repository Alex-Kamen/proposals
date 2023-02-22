<template>
  <div>
    <ProposalReview :proposal="proposal"/>
  </div>
</template>

<script>
import ProposalReview from "@/components/proposal/ProposalReview";

export default {
  name: "Review",

  components: {
    ProposalReview
  },

  computed: {
    proposal() {
      return this.$store.getters['proposal/proposalById'](+this.$route.params.id);
    }
  }
}
</script>
