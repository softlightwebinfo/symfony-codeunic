<script>
  export let text;
  export let route = "";
  export let style = "";
  export let type = "button";
  export let custom = false;
</script>
<style lang="scss">
  @import "./src/style/index";
  @import "./Button";
</style>
{#if !route}
  <button type="{type}" class:custom style="{style}" class="button">{text}</button>
{:else}
  <a style="{style}" class="button" href="{route}">{text}</a>
{/if}
