import { writable } from "svelte/store";
import type { IAuthStore } from "../interfaces/IAuthStore";

export const auth = writable<IAuthStore>({
    isLogin: false,
    username: null,
    image: null,
    id: 0,
    user: null,
}); // start with no user
