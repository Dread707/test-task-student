<template>
  <div>
    <cards
        :studentList="studentList"
        :colNum ="colNum"
    />
    <action-button
        @addCard="addItemCard"
    />
  </div>
</template>

<script>
import Cards from "@/components/cards/studentsList";
import ActionButton from "@/components/buttons/action-button";
import {generateLayout} from "@/functions";

export default {
  name: "Main",
  components: {ActionButton, Cards},
  data() {
    return {
      studentList: {
        layout: [],
        index: 0,
        students: [],
      },
      layoutLength: 20,
      widthStudentCard: 2,
      heightStudentCard: 13,
      colNum: 12,
    }
  },

  mounted() {
    this.studentList.layout = generateLayout(this.layoutLength, this.widthStudentCard, this.heightStudentCard)
  },
  methods: {
    addItemCard() {
      this.studentList.layout.push({
        x: (this.studentList.layout.length * this.widthStudentCard) % (this.colNum || this.heightStudentCard),
        y: this.studentList.layout.length + (this.colNum || this.heightStudentCard),
        w: this.widthStudentCard,
        h: this.heightStudentCard,
        i: this.studentList.index,
      });
      this.studentList.index++;
    },
  }
}
</script>

<style scoped>

</style>