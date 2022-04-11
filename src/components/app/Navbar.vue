<template>
  <div>
    <v-app-bar
        dense
    >
      <v-toolbar-title>Тестовое задание</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
          icon
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>