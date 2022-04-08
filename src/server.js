import {createServer, Model, Factory } from "miragejs"
import { faker } from '@faker-js/faker';

export function makeServer({ environment = "development" } = {}) {
    return createServer({
        environment,

        models: {
            user: Model,
        },

        factories: {
            user: Factory.extend({
                name() {
                    return faker.name.findName()
                },

                email() {
                    return faker.internet.email()
                },

                phoneNumber() {
                    return faker.phone.phoneNumber()
                },

                birthdayDate() {
                    return faker.date.past().toLocaleDateString()
                },

                section(i) {
                    let section = ["Борьба", "Футбол", "Дзюдо", "Рисование", "Шахматы", "Юный электрик"]

                    return section[i % section.length]
                },
            }),
        },

        seeds(server) {
            server.createList('user', 10)
        },

        routes() {
            this.namespace = "api"

            this.get("/users", (schema) => {
                return schema.users.all()
            })
        },
    })
}