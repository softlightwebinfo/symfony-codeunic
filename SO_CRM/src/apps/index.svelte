
<script>
import IDE from './IDE/index.svelte';
import TODO from './TODO/index.svelte';
import About from './about/index.svelte';
import Browser from './browser/index.svelte';
import Calc from './calc/index.svelte';
import Help from './help/index.svelte';
import Notes from './notes/index.svelte';
import Tasks from './tasks/index.svelte';
import Youtube from './youtube/index.svelte';

export let app;
export let activeTab = null;
export const appsLings = {
	IDE: IDE,
	TODO: TODO,
	About: About,
	Browser: Browser,
	Calc: Calc,
	Help: Help,
	Notes: Notes,
	Tasks: Tasks,
	Youtube: Youtube,

}
</script>
{#if app}
  <svelte:component this="{appsLings[app]}" activeTab={activeTab}/>
{/if}
