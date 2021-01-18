<script lang="ts">
    import { navOptions } from "../../settings/nav";
    import Container from "../Container/Container.svelte";

    export let segment;
    let y;
    $: isScroll = y > 20;
</script>
<svelte:window bind:scrollY={y}/>

<style lang="scss">
  @import "src/style/index";
  @import "nav";
</style>

<nav class="{isScroll ? 'nav--scroll': 'nav'}">
    <Container>
        <ul>
            {#each navOptions as nav}
                <li>
                    <a aria-current="{segment === nav.route ? 'page' : undefined}" href="{nav.route}">{nav.label}</a>
                </li>
            {/each}
        </ul>
    </Container>
</nav>
