<script lang="ts">
    import Nav from "../components/Nav/Nav.svelte";

    export let segment: string;
</script>
<style lang="scss" global>
  @import "../style/global.scss";

  nav + main {
    margin-top: 80px;
  }
</style>

<Nav {segment}/>

<main>
    <slot/>
</main>
