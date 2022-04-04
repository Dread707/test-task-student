<h1 align="center">
Тестовое задание для Front-end разработчика
</h1>

<p align="center">
  <a href="https://vuetifyjs.com" target="_blank">
    <img alt="Vuetify Logo" width="100" src="https://cdn.vuetifyjs.com/images/logos/logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://github.com/vuetifyjs/vuetify/actions?query=workflow%3ACI">
    <img src="https://github.com/vuetifyjs/vuetify/workflows/CI/badge.svg?branch=master&event=push" alt="CI badge">
  </a>
  <a href="https://codecov.io/gh/vuetifyjs/vuetify">
    <img src="https://img.shields.io/codecov/c/github/vuetifyjs/vuetify.svg" alt="Coverage">
  </a>
  <a href="https://www.npmjs.com/package/vuetify">
    <img src="https://img.shields.io/npm/dt/vuetify.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vuetify">
    <img src="https://img.shields.io/npm/dm/vuetify.svg" alt="Downloads">
  </a>
  <br>
  <a href="https://github.com/vuetifyjs/vuetify/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/vuetify.svg" alt="License">
  </a>
  <a href="https://app.zenhub.com/workspace/o/vuetifyjs/vuetify/boards">
    <img src="https://img.shields.io/badge/Managed_with-ZenHub-5e60ba.svg" alt="zenhub">
  </a>
  <a href="https://community.vuetifyjs.com">
    <img src="https://discordapp.com/api/guilds/340160225338195969/widget.png" alt="Chat">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/vuetify">
    <img src="https://img.shields.io/npm/v/vuetify.svg" alt="Version">
  </a>
  <a href="https://cdnjs.com/libraries/vuetify">
    <img src="https://img.shields.io/cdnjs/v/vuetify.svg" alt="CDN">
  </a>
</p>

<h2 align="center">**Vuetify**</h2>

-------

<p>Реализовать простейший сайт на Vue, показывающий работу со студентами и секциями по CRUD сценарию</p>

-------

## Запустить проект
```
npm install
```

-------
## Используемые библиотеки:

<table>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/jbaysolutions/vue-grid-layout.git">vue-grid-layout</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/vue-grid-layout">
          <img src="https://img.shields.io/npm/v/vue-grid-layout.svg" alt="Version">
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/vuejs/router">vue-router</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/vue-router">
          <img src="https://img.shields.io/npm/v/vue-router.svg" alt="Version">
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/vuejs/vuex">vuex</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/vuex">
          <img src="https://img.shields.io/npm/v/vuex.svg" alt="Version">
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mengxiong10/vue2-datepicker">vue2-datepicker</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/vue2-datepicker">
          <img src="https://img.shields.io/npm/v/vue2-datepicker.svg" alt="Version">
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/vuejs-tips/vue-the-mask">vue-the-mask</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/vue-the-mask">
          <img src="https://img.shields.io/npm/v/vue-the-mask.svg" alt="Version">
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/monterail/vuelidate">vuelidate</a>
      </td>
      <td>
        <a href="https://www.npmjs.com/package/vuelidate">
          <img src="https://img.shields.io/npm/v/vuelidate.svg" alt="Version">
        </a>
      </td>
    </tr>
  </tbody>
</table>

---

<h2 align="center">
Описание задания
</h2>

<p>
Реализовать табличное представления списка сущностей с пагинацией. В таблице отображать ФИО, даты рождения и секции и т.д. Должна быть предусмотрена возможность сортировки и фильтрации. <br>
Реализовать форму добавления/редактирования сущностей. <br>
Форма должна содержать поля разного типа (текстовые, поля выбора, чекбоксы, поле для ввода даты/времени с календарем, цифирные, булевы данные (в виде флажка) и ссылку на какую-либо картинку). Так же в информации о студенте должен быть 
список посещаемых секций. <br> 
Реализовать валидацию на обязательность и корректность введенных данных.<br>
Реализовать удаление сущности с подтверждением во всплывающем диалоге и автоматическим обновлением списка просмотра (без сброса настроек просмотра). <br>
Информация о секции должна содержать список студентов с возможностью добавить нового и датой зачисления студента в секцию <br>
Один и тот же студент может одновременно быть в нескольких секциях. <br>
Приложение должно состоять из компонентов. <br>
Для оформления интерфейса желательно использовать Bootstrap и Vuetify. <br>
Будет плюсом использование lodash.
</p>

---
