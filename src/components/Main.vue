<template>
  <div>
    <v-row justify="center">
      <v-dialog
          v-model="showCreateModal"
          persistent
          max-width="800px"
      >
        <create-card
            @closeCreateModal="showCreateModal = false"
        />
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog
          v-model="showEditModal"
          persistent
          max-width="800px"
      >
        <edit-card
            :student="editStudent"
            @closeEditModal="showEditModal = false"
        />
      </v-dialog>
    </v-row>

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
    <div class="grid-styles" v-if="isLoading && !displayOption">
      <cards
          ref="studentCards"
          @studentsCount="studentsCount($event)"
          :studentList="studentList"
          :colNum ="colNum"
          @activeEditModal="activeEditModal($event)"
          :visibleDeleteMode="visibleDeleteMode"
          :visibleEditMode="visibleEditMode"
          :page="selectedPage"
      />
      <pagination
          @page="getSelectedPage($event)"
      />
    </div>
    <div class="grid-styles" v-if="isLoading && displayOption">
      <Table
          :page="selectedPage"
      />

      <pagination
          @page="getSelectedPage($event)"
      />
    </div>
    <action-button
        v-show="!displayOption"
        @addCard="showCreateModal = !showCreateModal"
        @editMode="editMode"
        @deleteMode="deleteMode"
    />
    <snackbar
        :visibleDeleteNotification="notification"
        :visibleEditNotification="notification"
        @closeActiveMode="closeActiveMode($event)"
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
import Table from "@/components/table/table";
import EditCard from "@/components/CRUD/editCard";

export default {
  name: "Main",
  components: {EditCard, Table, Pagination, CreateCard, Snackbar, ActionButton, Cards},
  props: {
    displayOption: Boolean
  },
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
    visibleEditMode: false,
    notification: {},
    showCreateModal: false,
    showEditModal: false,
    isLoading: true,
    selectedPage: 1,
    editStudent: {},
  }),
  methods: {
    getSelectedPage(page) {
      this.selectedPage = page
    },
    activeEditModal(evt) {
      this.showEditModal = true;
      this.editStudent = evt

    },
    closeActiveMode(evt) {
      switch (evt) {
        case 'Edit' :
          this.visibleEditMode = false
          break;
        case 'Delete' :
          this.visibleDeleteMode = false
      }
    },

    studentsCount(evt) {
      this.studentList.layout = generateLayout(evt, this.widthStudentCard, this.heightStudentCard)
    },
    editMode() {
      this.visibleEditMode = !this.visibleEditMode;
      this.visibleDeleteMode ? this.visibleDeleteMode = false : '';

      this.notification = {
        notificationType: 'Edit',
        timeoutNotification: 10000,
        colorNotification: 'success',
        textNotification: 'Выбран режим редактирования, чтобы его выключить, закройте это оповещение',
        showNotification: true,
        isButtonNotificationActiveAction: true,
      }
    },

    deleteMode() {
      this.visibleDeleteMode = !this.visibleDeleteMode;
      this.visibleEditMode ? this.visibleEditMode = false : '';

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