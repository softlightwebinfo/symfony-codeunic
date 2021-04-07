<style lang="scss">
  @import "WindowActions";
</style>
<script>
  import Times from 'svelte-icons/fa/FaTimes.svelte';
  import Minus from 'svelte-icons/fa/FaMinus.svelte';
  import Plus from 'svelte-icons/fa/FaPlus.svelte';
  import {createEventDispatcher} from "svelte";

  export let activeMaximize = true;
  const dispatch = createEventDispatcher();
  const onClickClose = () => {
    dispatch("close", true);
  };
  const onClickMinus = () => {
    dispatch("minify", true);
  };
  const onClickAll = () => {
    if (activeMaximize) {
      dispatch("maximize", true);
    }
  };
</script>
<div>
  <button on:click={onClickClose}>
    <Times/>
  </button>
  <button on:click={onClickMinus}>
    <Minus/>
  </button>
  <button class:activeMaximize={!activeMaximize} on:click={onClickAll}>
    <Plus/>
  </button>
</div>
