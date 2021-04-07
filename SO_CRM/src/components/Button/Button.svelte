<style lang="scss">
  @import "Button";
</style>
<script>
  import {createEventDispatcher} from 'svelte';

  export let text = "Button";
  export let medium = false;
  const dispatch = createEventDispatcher();
  const onClick = (e) => {
    dispatch("click", e);
  }
</script>
<button class:medium on:click={onClick}>
  {text}
</button>
