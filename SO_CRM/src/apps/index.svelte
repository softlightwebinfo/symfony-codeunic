
import config from './config.json';
import IDE from './IDE';
import about from './about';
import browser from './browser';
import calc from './calc';
import help from './help';
import notes from './notes';
import tasks from './tasks';
import youtube from './youtube';

export const allApps = config;
export const appsLings = {
	IDE: IDE,
	about: about,
	browser: browser,
	calc: calc,
	help: help,
	notes: notes,
	tasks: tasks,
	youtube: youtube,

}
