<template>
  <v-data-table
      :headers="headers"
      :items="students"
      sort-by="calories"
      class="elevation-1 mt-4"
      hide-default-footer
      :items-per-page="13"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-spacer></v-spacer>
        <v-dialog
            v-model="showCreateTableModal"
            persistent
            max-width="800px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
            >
              Новый ученик
            </v-btn>
          </template>
          <create-card
              @closeCreateModal="showCreateTableModal = false"
          />
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.birthdayDate="{ item }">
      {{ $moment(item.birthdayDate).format('DD.MM.YYYY') }}
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
          color="primary"
          @click="getStudentsTable"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
import CreateCard from "@/components/CRUD/createCard";

export default {
  name: "table",
  components: {CreateCard},
  data: () => ({
    showCreateTableModal: false,
    dialogDelete: false,
    headers: [
      { text: 'Имя', value: 'name' },
      { text: 'Дата рождения', value: 'birthdayDate' },
      { text: 'Email', value: 'email' },
      { text: 'Номер телефона', value: 'phoneNumber' },
      { text: 'Секции', value: 'section' },
      { text: 'Действия', value: 'actions', sortable: false },
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.getStudentsTable()
  },

  methods: {
    async getStudentsTable() {
      let {data} = await axios.get("http://localhost:3001/getStudents", {
        params: {
          _page: this.page,
          _limit: 12
        }
      });
      this.students = data;
    },

    editItem (item) {
      this.editedIndex = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.students.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedItem)
      } else {
        this.students.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style scoped>
.v-application .elevation-1 {
  box-shadow: none !important;
}
</style>