<template>
  <div>
    <Proposal :proposal="proposal"/>
  </div>
</template>

<script>
import Proposal from "@/components/Proposal";

export default {
  name: "Review",
  components: {Proposal},

  computed: {
    proposal() {
      return this.$store.getters['proposal/proposalById'](+this.$route.params.id);
    }
  }
}
</script>
