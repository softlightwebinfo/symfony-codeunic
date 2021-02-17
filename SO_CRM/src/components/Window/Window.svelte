<script>
  import WindowActions from "../WindowActions/WindowActions.svelte";
  import {spring} from 'svelte/motion';
  import {pannable} from "../../events/pannable";
  import {appActiveView} from "../../stores/apps";

  export let index = 0;
  export let appName;

  const coords = spring({x: 0, y: 0}, {
    stiffness: 0.2,
    damping: 0.4
  });

  function handlePanStart() {
    coords.stiffness = coords.damping = 1;
  }

  function handlePanMove(event) {
    coords.update($coords => ({
      x: $coords.x + event.detail.dx,
      y: $coords.y + event.detail.dy
    }));
  }

  function handlePanEnd(event) {
    // coords.stiffness = 0.2;
    // coords.damping = 0.4;
    // coords.set({ x: 0, y: 0 });
  }

  function onClickWindow() {
    $appActiveView = appName;
  }

  $: zIndex = $appActiveView === appName ? "z-index: 9;" : ""
</script>
<style lang="scss">
  @import "Window";
</style>

<article
  on:mousedown={onClickWindow}
  style="transform: translate({$coords.x}px,{$coords.y}px); grid-column: {index};{zIndex}"
>
  <header
    on:panend={handlePanEnd}
    on:panmove={handlePanMove}
    on:panstart={handlePanStart}
    use:pannable
  >
    <WindowActions/>
  </header>
  <section></section>
  <!--  <footer></footer>-->
</article>
