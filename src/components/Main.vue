<template>
  <div>
    <create-card
        :showCreateModal="showCreateModal"
        @closeCreateModal="showCreateModal = false"
    />
    <div class="progress-main grid-styles d-inline-flex justify-center" v-if="!isLoading">
      <div class="d-flex flex-column">
        <v-progress-circular
            class="mb-2"
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
        <p>Загрузка</p>
      </div>
    </div>
    <div class="grid-styles" v-if="isLoading">
      <cards
          @studentsCount="studentsCount($event)"
          :studentList="studentList"
          :colNum ="colNum"
          :visibleDeleteMode="visibleDeleteMode"
      />
      <pagination/>
    </div>
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
import ActionButton from "@/components/buttons/actions/action-button";
import {generateLayout} from "@/functions";
import Snackbar from "@/components/notification/snackbar";
import CreateCard from "@/components/CRUD/createCard";
import Pagination from "@/components/buttons/pagination/pagination";

export default {
  name: "Main",
  components: {Pagination, CreateCard, Snackbar, ActionButton, Cards},
  data: () => ({
    studentList: {
      layout: [],
      index: 0,
      students: [],
    },
    widthStudentCard: 2,
    heightStudentCard: 12,
    colNum: 12,
    visibleDeleteMode: false,
    notification: {},
    showCreateModal: false,
    isLoading: true,
  }),
  methods: {
    studentsCount(evt) {
      this.studentList.layout = generateLayout(evt, this.widthStudentCard, this.heightStudentCard)
    },
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
.progress-main {
  width: 100%;
  padding: 40vh;
}

.progress-main > div {
  width: 100px;
  height: 100px;
  align-items: center;
}

.grid-styles {
  scrollbar-width: thin;
  overflow: auto;
  overflow-x: hidden;
  height: calc(100vh - 100px) !important;
}

</style>