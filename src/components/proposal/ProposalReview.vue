<template>
  <div>
    <h1>{{proposal.name}}</h1>
    <div class="button__list">
      <BaseButton
        title="Одобрить"
        @click.native="activeDesire(ProposalStatus.APPROVED)"
      />
      <BaseButton
        title="Отказать"
        @click.native="activeDesire(ProposalStatus.DENIED)"
      />
      <BaseButton
        title="Уточнить деталь"
        @click.native="activeDesire(ProposalStatus.CLARIFY)"
      />
    </div>
  </div>
</template>

<script>
import {ProposalStatus} from "@/constants/ProposalStatus";
import BaseButton from "@/components/BaseButton";

export default {
  name: "ProposalReview",

  components: {
    BaseButton
  },

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
    activeDesire(status) {
      this.$store.dispatch('proposal/activeDesire', [this.proposal, status]);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.button__list {
  display: flex;
}
</style>
