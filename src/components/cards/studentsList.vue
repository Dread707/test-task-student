<template>
  <div class="px-4">
    <grid-layout :layout.sync="studentList.layout"
                 :col-num="colNum"
                 :row-height="30"
                 :is-draggable="true"
                 :is-resizable="false"
                 :vertical-compact="true"
                 :use-css-transforms="false"
    >
      <grid-item :key="item.i" v-for="(item, index) in studentList.layout"
                 :static="item.static"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
      >
        <v-fade-transition>
        <v-btn
            v-show="visibleDeleteMode"
            class="mx-1 my-1 remove"
            fab
            dark
            x-small
            color="error"
            @click="removeItem(studentList.students[index].id)"
        >
          <v-icon dark>
            mdi-close
          </v-icon>
        </v-btn>
        </v-fade-transition>

        <v-fade-transition>
        <v-btn
            v-show="visibleEditMode"
            class="mx-1 my-1 remove"
            fab
            dark
            x-small
            color="success"
            @click="editModal(studentList.students[index])"
        >
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
        </v-fade-transition>
        <card-item
            :student="studentList.students[index]"
        ></card-item>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import CardItem from "@/components/cards/card/card-item";
import axios from "axios";
export default {
  name: "cards",
  components: {CardItem},
  props: {
    studentList: {
      type: Object,
      required: false,
    },
    colNum: Number,
    visibleDeleteMode: Boolean,
    visibleEditMode: Boolean,
    page: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    this.studentList.index = this.studentList.layout.length;
  },
  watch: {
    page() {
      this.getStudents()
    }
  },
  created() {
    this.getStudents()
  },
  methods: {
    editModal(val) {
      this.$emit('activeEditModal', val)
    },

    async removeItem(val) {
      await axios.delete("http://localhost:3001/getStudents/" + val)
          .then(() => {
            this.$toast.success("Данные успешно удалены")
            this.getStudents()
          })
          .catch(function (error) {
            console.log(error);
            this.$toast.error("Ошибка удаления данных")
          });
    },

    async getStudents() {
      let {data} = await axios.get("http://localhost:3001/getStudents", {
        params: {
          _page: this.page,
          _limit: 12
        }
      });
      this.studentList.students = data;
      this.$emit('studentsCount', this.studentList.students.length)
    },
  }
}
</script>

<style scoped>
.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}
.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}
/*************************************/
.remove {
  position: absolute;
  right: 2px;
  top: 0;
  cursor: pointer;
  z-index: 100;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  padding: 0 8px 8px 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat bottom right;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}

</style>