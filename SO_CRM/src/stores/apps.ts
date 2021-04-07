import { writable } from "svelte/store";
import { allApps } from '../apps';

export const apps = writable({
    apps: {
        about: {
            ...allApps.about,
        },
        calc: {
            ...allApps.calc,
        },
        notes: {
            ...allApps.notes,
        },
        tasks: {
            ...allApps.tasks,
        },
        youtube: {
            ...allApps.youtube,
        },
        help: {
            ...allApps.help,
        },
        browser: {
            ...allApps.browser,
        },
        IDE: {
            ...allApps.IDE,
        },
        TODO: {
            ...allApps.TODO,
        },
    }
});
export let appActiveView = writable("");
