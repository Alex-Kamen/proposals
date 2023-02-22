<template>
  <div class="button">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
