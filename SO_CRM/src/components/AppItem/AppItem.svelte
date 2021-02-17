<style lang="scss">
  @import "AppItem";
</style>
<script>
  import {appActiveView, apps} from "../../stores/apps";

  export let icon;
  export let label;
  export let key;
  export let color = "";
  export let dark = false;
  export let open = false;

  $: style = open ? `background-color: ${color};` : "";
  $: activeView = $appActiveView === key;

  const onToggleActiveView = () => {
    $apps.apps[key].open = !$apps.apps[key].open
    if ($apps.apps[key].open) {
      $appActiveView = key;
    }
  };
</script>
<div class:activeView={activeView} class:color={open} class:dark on:click={onToggleActiveView} style="{style}">
  <img alt="{label}" src="apps/{key}/{icon}" title="{label}">
</div>
