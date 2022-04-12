<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Создать карточку ученика</span>
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
                  v-if="!isAvatarLoad"
                  color="indigo"
                  size="84"
              >
                <a>
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </a>

              </v-avatar>

              <v-avatar size="84" v-if="isAvatarLoad">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
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
                    required
                    :rules="[v => !!v || 'Укажите имя']"
                    clearable
                ></v-text-field>
              </v-col>
              <v-col sm="6">
                <v-text-field
                    @keypress="filterKeyboard($event, '[А-Яа-яЁё ]+')"
                    label="Фамилия"
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
                        @click:clear="date = null"
                        :rules="[v => !!v || 'Укажите дату рождения']"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="date"
                      @change="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="12">
                <v-select
                    :rules="[v => !!v || 'Укажите секцию']"
                    :items="sections"
                    label="Секция"
                    dense
                ></v-select>
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
          @click="$emit('closeCreateModal')"
      >
        Отменить
      </v-btn>
      <v-btn
          color="green darken-1"
          text
          @click="!showCreateModal"
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
  name: "createCard",
  props: {
    showCreateModal: Boolean,
  },
  data: () => ({
    isAvatarLoad: false,
    date: '',
    menu: false,
    rules: {
      required: value => !!value || 'Укажите e-mail',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Неправильно набран e-mail.'
      }
    },
    sections: []
  }),
  mounted() {
    this.getSections()
  },
  computed: {
    computedDateFormatted () {
      return this.date ? this.$moment(this.date).format('DD.MM.YYYY') : ''
    },
  },
  methods: {
    filterKeyboard,
    async getSections() {
      let {data} = await axios.get("http://localhost:3001/getSections");
      this.sections = data;
    }
  }

}
</script>

<style scoped>

</style>