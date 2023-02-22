<template>
  <div>
    <h1>{{proposal.name}}</h1>
    <div class="button__list">
      <div class="button" @click="activeDesire(ProposalStatus.APPROVED)">Одобрить</div>
      <div class="button" @click="activeDesire(ProposalStatus.DENIED)">Отказать</div>
      <div class="button" @click="activeDesire(ProposalStatus.CLARIFY)">Уточнить деталь</div>
    </div>
  </div>
</template>

<script>
import {ProposalStatus} from "@/constants/ProposalStatus";

export default {
  name: "Proposal",

  props: {
    proposal: Object
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
