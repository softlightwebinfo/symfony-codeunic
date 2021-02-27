<script lang="ts">
    import { navOptions } from "../../settings/nav";
    import Container from "../Container/Container.svelte";

    export let segment;
    export let white;
    let y;
    $: isScroll = y > 20;
</script>
<svelte:window bind:scrollY={y}/>

<style lang="scss">
  @import "src/style/index";
  @import "nav";
</style>

<nav class="{isScroll ? 'nav--scroll': 'nav'}" class:white>
  <Container>
    <ul>
      {#each navOptions as nav}
        <li>
          <a
            aria-current="{(segment === nav.route || (nav.route == '' && segment == undefined))? 'page' : undefined}"
            href="{nav.route}">{nav.label}</a>
        </li>
      {/each}
    </ul>
    <ul>
      <li>
        <a href="login">Login</a>
      </li>
      <li>
        <a href="register">Register</a>
      </li>
    </ul>
  </Container>
</nav>
