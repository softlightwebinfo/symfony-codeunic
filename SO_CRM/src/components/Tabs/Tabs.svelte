<style lang="scss">
  @import "Tabs";
</style>
<script>
  import {createEventDispatcher} from "svelte";

  export let tabs = [];
  const dispatch = createEventDispatcher();
  const onClickTab = (tab, index) => {
    dispatch("onClick", {tab, index});
  };
</script>
{#if tabs && tabs.length}
  <ul>
    {#each tabs as tab, index}
      <li on:click={onClickTab(tab, index)} class:active={tab.active}>{tab.label}</li>
    {/each}
  </ul>
{/if}
