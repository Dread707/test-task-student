import {createServer, Model, Factory } from "miragejs"
import { faker } from '@faker-js/faker';
import {randomDate} from "@/functions";

faker.locale = 'ru'

export function makeServer({ environment = "development" } = {}) {
    return createServer({
        environment,

        models: {
            user: Model,
        },

        factories: {
            user: Factory.extend({
                name() {
                    return  faker.name.findName()
                },

                // gender() {
                //     return faker.name.gender(true)
                // },

                avatarUrl() {
                    return faker.image.avatar()
                },

                email() {
                    return faker.internet.email()
                },

                phoneNumber() {
                    return faker.phone.phoneNumber('+7(9##)###-##-##')
                },

                birthdayDate() {
                    return randomDate(new Date(2004, 1, 1), new Date(2013, 1,1))
                },

                section(i) {
                    let section = ["Занимательная информатика", "Техническое моделирование", "Компьютерный дизайн",
                        "Мини-футбол", "Гимнастика", "Шахматы", "Баскетбол", "Каратэ", "Настольный теннис", "Волейбол",
                        "Легкая атлетика", "Хоровая студия «Созвучие»", "Юный дизайнер", "Театральная студия «Поворот»",
                        "Прикладное творчество «Мягкая игрушка»", "Танцевальный ансамбль «Визави»", "Бисероплетение",
                        "География в городе", "Настольные игры", "История в памятниках", "Юный волонтеры",
                        "Диалог культур", "Этикет и искусство общения", "Юный правовед", "Юный защитник", "Экология жизни"]
                    return section[i % section.length]
                },

                // layout(i) {
                //     let layout = [{ x: 0, y: 0, w: 2, h: 12, maxH: 12, i: 0 }]
                //     generateLayout(i, layout)
                //     return layout[i % layout.length]
                // }

            }),
        },

        seeds(server) {
            server.createList('user', 40)
        },

        routes() {
            this.namespace = "api"

            this.get("/users", (schema) => {
                return schema.users.all()
            })
        },
    })
}