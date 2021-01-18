// store.js
import { writable } from 'svelte/store';

export const contact = writable({
    name: "Tiago Vilas Boas",
    email: "tcarvalhovb@gmail.com",
    phone: "11 972393003",
    message: "asdasdasd asd asdasd",
})
