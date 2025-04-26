<script>

export default {
  name: "language-switcher",
}
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="$i18n.availableLocales" class="uppercase"/>
</template>

<style scoped>

</style>