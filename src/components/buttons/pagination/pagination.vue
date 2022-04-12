<template>
  <div class="text-center">
    <v-pagination
        v-model="page"
        :length="5"
        :total-visible="4"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data: () => ({
    page: 1
  })
}
</script>

<style scoped>

</style>