<script>
  import First from "./components/First/First.svelte";
  import Notes from "./components/Notes/Notes.svelte";

  let firstRender = true;
  const onClick = () => {
    firstRender = false;
  };
</script>

{#if firstRender}
  <First on:onClick={onClick}/>
{:else}
  <Notes/>
{/if}
