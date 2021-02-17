import { writable } from "svelte/store";

export const auth = writable({
    isLogin: false,
    username: null,
    id: 0,
}); // start with no user
