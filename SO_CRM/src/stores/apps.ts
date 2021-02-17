import { writable } from "svelte/store";
import about from "../apps/about/config.json";
import calc from "../apps/calc/config.json";
import notes from "../apps/notes/config.json";

export const apps = writable({
    apps: {
        about: {
            ...about,
            open: false,
        },
        calc: {
            ...calc,
            open: false,
        },
        notes: {
            ...notes,
        },
    }
});
export let appActiveView = writable("");
