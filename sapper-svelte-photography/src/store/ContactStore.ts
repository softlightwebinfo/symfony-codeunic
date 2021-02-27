// store.js
import { writable } from 'svelte/store';

export const contact = writable({
    name: "",
    email: "",
    phone: "",
    message: "",
})

export const nav = writable({
    white: false,
})
