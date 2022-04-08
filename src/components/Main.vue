<template>
  <div>
    <cards
        :gridLayout="gridLayout"
    />
    <action-button
        @addCard="addItemCard"
    />
  </div>
</template>

<script>
import Cards from "@/components/cards/cards";
import ActionButton from "@/components/buttons/action-button";
export default {
  name: "Main",
  components: {ActionButton, Cards},
  data() {
    return {
      gridLayout: {
        layout: [
          { x: 0, y: 0, w: 2, h: 12, maxH: 12, i: "0" },
          { x: 2, y: 0, w: 2, h: 12, maxH: 12, i: "1" },
          { x: 4, y: 0, w: 2, h: 12, maxH: 12, i: "2" },
          { x: 6, y: 0, w: 2, h: 12, maxH: 12, i: "3" },
          { x: 8, y: 0, w: 2, h: 12, maxH: 12, i: "4" },
        ],
        draggable: true,
        resizable: true,
        colNum: 12,
        index: 0,
      },

    }
  },
  methods: {
    addItemCard() {
      this.gridLayout.layout.push({
        x: (this.gridLayout.layout.length * 2) % (this.gridLayout.colNum || 12),
        y: this.gridLayout.layout.length + (this.gridLayout.colNum || 12),
        w: 2,
        h: 12,
        maxH: 12,
        i: this.gridLayout.index,
      });
      this.gridLayout.index++;
    },
  }
}
</script>

<style scoped>

</style>