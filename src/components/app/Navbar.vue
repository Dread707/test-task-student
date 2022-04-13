<template>
  <div>
    <v-app-bar
        dense
    >
      <v-toolbar-title>Тестовое задание</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              @click="displayOption"
              v-bind="attrs"
              v-on="on"
              icon>
            <v-icon>
              {{ isTableOption ? 'mdi-table' : 'mdi-grid' }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ isTableOption ? 'Отобразить таблицей' : 'Отобразить сеткой' }}</span>
      </v-tooltip>

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
  name: "Navbar",
  data: () => ({
    isTableOption: true,
  }),
  methods: {
    displayOption() {
      this.isTableOption = !this.isTableOption;
      this.$emit('displayOption')
    }
  }
}
</script>

<style scoped>

</style>