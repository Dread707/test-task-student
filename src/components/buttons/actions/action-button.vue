<template>
  <v-fade-transition>
    <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
            v-model="fab"
            color="blue darken-2"
            dark
            fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn
          fab
          dark
          small
          color="green"
          @click="$emit('editMode')"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
          fab
          dark
          small
          color="indigo"
          @click="$emit('addCard')"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
          @click="$emit('deleteMode')"
          fab
          dark
          small
          color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-fade-transition>
</template>

<script>
export default {
  name: "action-button",
  data() {
    return {
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }
  }
}
</script>

<style>
#app .v-speed-dial {
  position: fixed;
  z-index: 100;
}
</style>