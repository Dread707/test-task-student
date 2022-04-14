<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Редактирование карточки ученика</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <span class="subtitle-1">Основная информация</span>
        <v-row>
          <v-col cols="2">
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-avatar
                  v-if="!showPreview"
                  color="indigo"
                  size="84"
              >
                <input
                    type="file"
                    id="field-file"
                    ref="file"
                    style="display: none"
                    accept="image/*"
                    @change="handleFileUpload()">
                <a @click="handleFileClick">
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </a>
              </v-avatar>

              <v-avatar size="84" v-if="showPreview && student.avatarUrl === ''">
                <img
                    :src="imagePreview"
                    alt="Аватар"
                >
              </v-avatar>
              <v-avatar size="84" v-if="student.avatarUrl !== ''">
                <img
                    :src="student.avatarUrl"
                    alt="Аватар"
                >
              </v-avatar>
            </v-col>
          </v-col>
          <v-col cols="10">
            <v-row>
              <v-col sm="6">
                <v-text-field
                    @keypress="filterKeyboard($event, '[А-Яа-яЁё ]+')"
                    label="Имя"
                    v-model="firstName"
                    required
                    :rules="[v => !!v || 'Укажите имя']"
                    clearable
                ></v-text-field>
              </v-col>
              <v-col sm="6">
                <v-text-field
                    @keypress="filterKeyboard($event, '[А-Яа-яЁё ]+')"
                    label="Фамилия"
                    v-model="lastName"
                    :rules="[v => !!v || 'Укажите фамилию']"
                    required
                    clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="6">
                <v-text-field
                    clearable
                    label="Почта"
                    v-model="student.email"
                    :rules="[rules.required, rules.email]"
                    required
                    placeholder="ivanov@example.ru"
                ></v-text-field>
              </v-col>
              <v-col sm="6">
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    max-width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        :value="computedDateFormatted"
                        clearable
                        label="Дата рождения"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="student.birthdayDate = null"
                        :rules="[v => !!v || 'Укажите дату рождения']"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="student.birthdayDate"
                      @change="menu = false"
                      locale="ru-ru"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="6">
                <v-select
                    v-model="student.section"
                    :rules="[v => !!v || 'Укажите секцию']"
                    :items="sections"
                    label="Секция"
                    dense
                ></v-select>
              </v-col>
              <v-col sm="6">
                <v-text-field
                    clearable
                    v-mask="'+7(9##)###-##-##'"
                    label="Номер телефона"
                    v-model="student.phoneNumber"
                    :rules="[v => !!v || 'Укажите номер телефона']"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <span class="subtitle-1">Дополнительная информация</span>
        <div class="mt-4">
          <div class="d-flex">
            <v-col
                cols="12"
            >
              <v-textarea
                  solo
                  v-model="student.commmentInfo"
                  name="input-7-4"
                  label="Напишите о себе и своих достижения"
              ></v-textarea>
            </v-col>
          </div>
        </div>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="blue darken-1"
          text
          @click="cancelAddStudent"
      >
        Отменить
      </v-btn>
      <v-btn
          color="green darken-1"
          text
          @click="addStudent"
      >
        Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {filterKeyboard} from "@/functions"
import axios from "axios";

export default {
  name: "editCard",
  props: {
    showEditModal: Boolean,
    student: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    showPreview: false,
    imagePreview: '',
    firstName: '',
    lastName: '',
    menu: false,
    rules: {
      required: value => !!value || 'Укажите e-mail',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Неправильно набран e-mail.'
      }
    },
    sections: [],
  }),
  mounted() {
    this.getSections();
    this.student.avatarUrl ? this.showPreview = true : '';
    this.firstName = this.student.name.split(' ')[0]
    this.lastName = this.student.name.split(' ')[1]
  },
  computed: {
    computedDateFormatted () {
      return this.student.birthdayDate ? this.$moment(this.student.birthdayDate).format('DD.MM.YYYY') : ''
    },
    computedName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
  watch: {
    computedName(val) {
      this.student.name = val
    }
  },
  methods: {
    filterKeyboard,
    async getSections() {
      let {data} = await axios.get("http://localhost:3001/getSections");
      this.sections = data;
    },
    handleFileClick() {
      this.$refs.file.click()
    },
    handleFileUpload() {
      this.newStudent.avatarUrl = this.$refs.file.files[0];
      let reader  = new FileReader();
      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.imagePreview = reader.result;
      }.bind(this), false);
      if( this.newStudent.avatarUrl ){
        if ( /\.(jpe?g|png|gif)$/i.test( this.newStudent.avatarUrl.name ) ) {
          reader.readAsDataURL( this.newStudent.avatarUrl );
        }
      }
    },
    async addStudent() {
      await axios.put("http://localhost:3001/getStudents/" + this.student.id, this.student)
          .then(() => {
            this.student = {}
            this.$emit('closeEditModal')
            this.$toast.success("Данные успешно изменены")
          })
          .catch(function (error) {
            console.log(error);
            this.$toast.error("Ошибка изменения данных")
          });
    },
    cancelAddStudent() {
      this.student = {}
      this.$emit('closeEditModal')
    }
  }
}
</script>

<style scoped>
.v-input {
  padding-top: 12px !important;
}
</style>