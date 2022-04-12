<template>
  <div class="pagination-container">
    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="4"
          :total-visible="4"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data: () => ({
    page: 1
  }),
  watch: {
    page() {
      this.$emit('page', this.page)
    }
  }
}
</script>

<style scoped>
.pagination-container {
  width: 100%;
  position: fixed;
  bottom: 70px;
  z-index: 200;
}
</style>