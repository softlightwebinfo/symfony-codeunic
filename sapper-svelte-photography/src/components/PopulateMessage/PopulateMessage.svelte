<style lang="scss">
  @import "PopulateMessage";
</style>
<script lang="ts">
    import Container from "../Container/Container.svelte";
    export let message: string;
    export let user: string;
</script>
<section class="populateMessage">
   <Container>
       <h4>" {message} "</h4>
       <p>{user}</p>
   </Container>
</section>
