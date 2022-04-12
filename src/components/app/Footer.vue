<template>
  <v-footer padless>
    <v-col
        class="primary lighten py-4 text-center white--text"
        cols="12"
    >
      {{ new Date().getFullYear() }} - Github
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>