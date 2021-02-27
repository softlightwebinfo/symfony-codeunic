<script lang="ts">
    import UserShowcase from "../UserShowcase/UserShowcase.svelte";
    import Container from "../Container/Container.svelte";
    import { replaceRouteShowcase } from "../../libs/replaceRouteShowcase";

    export let user;
    export let routes = [];
    export let page;
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
        <a class:active={page === route.key} href="{replaceRouteShowcase(route.route, user.username)}">{route.label}</a>
      {/each}
    </nav>
  </Container>
</header>
