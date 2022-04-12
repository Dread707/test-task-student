<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
          class="mx-auto"
          max-height="100%"
      >
        <template slot="progress">
          <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
          ></v-progress-linear>
        </template>

        <v-img
            height="250"
            :src="student.avatarUrl"
        ></v-img>

        <v-card-title>{{ student.name }}</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >
            <div>
              Почта: <span class="grey--text">{{ student.email }}</span>
            </div>
            <div>
              Дата рождения: <span class="grey--text">{{ $moment(student.birthdayDate).format('DD.MM.YYYY') }}</span>
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            <v-chip
                class="ma-2"
                color="primary"
            >
              {{ student.section }}
            </v-chip>
          </div>
          <!--      <div class="d-flex justify-center">-->
          <!--        <v-btn-->
          <!--            class="ma-2"-->
          <!--            outlined-->
          <!--            color="indigo"-->
          <!--        >-->
          <!--          Открыть карточку-->
          <!--        </v-btn>-->
          <!--      </div>-->

        </v-card-text>
        <v-fade-transition>
          <v-overlay
              v-if="hover"
              absolute
              color="blue"
          >
            <v-btn>Открыть подробнее</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: "card-item",
  props: {
    student: {
      type: Object,
      required: false,
    }
  },
}
</script>

<style scoped>

</style>