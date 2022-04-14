<template>
  <v-snackbar
      :timeout="-1"
      :value="true"
      top
      :color="visibleDeleteNotification.colorNotification"
      right
      text
      v-model="visibleDeleteNotification.showNotification"
  >
    {{ visibleDeleteNotification.textNotification }}

    <template v-slot:action="{ attrs }">
      <v-btn
          :color="visibleDeleteNotification.colorNotification"
          text
          v-bind="attrs"
          @click="visibleDeleteNotification.isButtonNotificationActiveAction ? closeActiveMode() : !visibleDeleteNotification.showNotification"
      >
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "snackbar",
  props: {
    visibleDeleteNotification: Object,
    visibleEditNotification: Object
  },
  methods: {
    closeActiveMode() {
      this.visibleDeleteNotification.showNotification = false;
      this.$emit('closeActiveMode', this.visibleDeleteNotification.notificationType)
    }
  },
}
</script>

<style scoped>

</style>