<style lang="scss">
  @import "src/style/index";
  @import "NewModelsAccount";
</style>
<script lang="ts">
    import Container from "../Container/Container.svelte";
    import CardNewsAccounts from "../CardNewsAccounts/CardNewsAccounts.svelte";

    export let data: { image: string, category: string; title: string; date: string; description: string }[] = [];
</script>
<section class="newModelsAccount">
    <Container flex>
        {#each data as item}
            <a href="detail">
                <CardNewsAccounts {...item}/>
            </a>
        {/each}
    </Container>
</section>
