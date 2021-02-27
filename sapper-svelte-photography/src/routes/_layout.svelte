<script lang="ts">
    import Nav from "../components/Nav/Nav.svelte";
    import { nav } from "../store/ContactStore";

    export let segment: string;
</script>
<style global lang="scss">
  @import "../style/global.scss";

  nav + main {
    margin-top: 80px;
  }
</style>
{#if segment !== "dashboard"}
  <Nav {segment} white="{$nav.white}"/>
{/if}
<main>
  <slot/>
</main>
