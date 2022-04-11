<template>
  <div>
    <create-card
        :showCreateModal="showCreateModal"
        @closeCreateModal="showCreateModal = false"

    />
    <cards
        :studentList="studentList"
        :colNum ="colNum"
        :visibleDeleteMode="visibleDeleteMode"
    />
    <action-button
        @addCard="showCreateModal = !showCreateModal"
        @editMode="editMode"
    />
    <snackbar
        :visibleDeleteNotification="notification"
        @closeActiveMode="visibleDeleteMode = false"
    />
  </div>
</template>

<script>
import Cards from "@/components/cards/studentsList";
import ActionButton from "@/components/buttons/action-button";
import {generateLayout} from "@/functions";
import Snackbar from "@/components/notification/snackbar";
import CreateCard from "@/components/CRUD/createCard";

export default {
  name: "Main",
  components: {CreateCard, Snackbar, ActionButton, Cards},
  data: () => ({
    studentList: {
      layout: [],
      index: 0,
      students: [],
    },
    layoutLength: 20,
    widthStudentCard: 2,
    heightStudentCard: 13,
    colNum: 12,
    visibleDeleteMode: false,
    notification: {},
    showCreateModal: false
  }),
  mounted() {
    this.studentList.layout = generateLayout(this.layoutLength, this.widthStudentCard, this.heightStudentCard)
  },
  methods: {
    editMode() {
      this.visibleDeleteMode = !this.visibleDeleteMode

      this.notification = {
        notificationType: 'Delete',
        timeoutNotification: 10000,
        colorNotification: 'error',
        textNotification: 'Выбран режим удаления, чтобы его выключить, закройте это оповещение',
        showNotification: true,
        isButtonNotificationActiveAction: true,
      }
    },
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