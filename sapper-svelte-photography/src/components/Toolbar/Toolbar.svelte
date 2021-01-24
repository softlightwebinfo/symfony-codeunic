<script lang="ts">
    import UserShowcase from "../UserShowcase/UserShowcase.svelte";
    import Container from "../Container/Container.svelte";

    export let user;
    export let routes
</script>
<style lang="scss">
  @import "src/style/index";
  @import "Toolbar";
</style>
<header>
  <Container>
    <UserShowcase {user}/>
    <nav>
      {#each routes as route}
        <a href="{route.route}">{route.label}</a>
      {/each}
    </nav>
  </Container>
</header>
