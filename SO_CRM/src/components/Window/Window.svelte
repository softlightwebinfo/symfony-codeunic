<script>
  import WindowActions from "../WindowActions/WindowActions.svelte";
  import {spring} from 'svelte/motion';
  import {pannable} from "../../events/pannable";
  import {appActiveView, apps} from "../../stores/apps";
  import App from "../../apps/index.svelte";
  import {capitalize} from "../../functions/capitalize";
  import Tabs from "../Tabs/Tabs.svelte";
  import LoadingApp from "../LoadingApp/LoadingApp.svelte";
  import {onMount} from 'svelte'

  let isMaximize = false;
  let activeTab = null;

  export let index = 0;
  export let appName;
  export let minify;
  export let dark = false;
  export let tabs = [];
  export let activeMaximize = true;
  let loading = true;

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

  const onClickWindow = () => {
    $appActiveView = appName
  };

  $: zIndex = $appActiveView === appName ? "z-index: 9;" : "";

  const maximize = () => {
    isMaximize = !isMaximize;
  }
  const close = () => {
    $apps.apps[appName].open = false;
    isMaximize = false;
    if ($appActiveView === appName) {
      $appActiveView = "";
    }
  }
  const onMinify = () => {
    $apps.apps[appName].minify = true;
    if ($appActiveView === appName) {
      $appActiveView = "";
    }
  };
  const onClickTab = (tab) => {
    tabs = tabs.map((value, index1) => {
      return {
        ...value,
        active: index1 === tab.detail.index
      }
    })
    activeTab = tab.detail;
  }

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 1000)
  });
</script>
<style lang="scss">
  @import "Window";
</style>

<article
  class:dark={dark}
  class:maximize={isMaximize}
  class:minify
  on:mousedown={onClickWindow}
  style="transform: translate({$coords.x}px,{$coords.y}px); grid-column: {index};{zIndex}"
>
  {#if !loading}
    <header
      on:panend={handlePanEnd}
      on:panmove={handlePanMove}
      on:panstart={handlePanStart}
      use:pannable
    >
      <WindowActions
        activeMaximize="{activeMaximize}"
        on:close="{close}"
        on:maximize="{maximize}"
        on:minify="{onMinify}"
      />
      <Tabs
        on:onClick={onClickTab}
        tabs="{tabs}"
      />
    </header>
    <section>
      <App activeTab="{activeTab}" app="{capitalize(appName)}"/>
    </section>
  {:else}
    <LoadingApp/>
  {/if}
  <!--  <footer></footer>-->
</article>
