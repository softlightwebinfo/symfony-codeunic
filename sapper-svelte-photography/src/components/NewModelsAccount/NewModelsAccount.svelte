<style lang="scss">
  @import "src/style/index";
  @import "NewModelsAccount";
</style>
<script lang="ts">
    import { getImageUpload } from "../../libs/images";
    import Container from "../Container/Container.svelte";
    import CardNewsAccounts from "../CardNewsAccounts/CardNewsAccounts.svelte";
    import { slug } from "../../libs/slug";

    export let data: { image: string, category: string; title: string; date: string; description: string }[] = [];
</script>
<section class="newModelsAccount">
  <Container flex>
    {#each data as item}
      <a href="albums/{slug(item.title)}/{item.id}">
        <CardNewsAccounts
          date="{item.updated_at}"
          title="{item.images[0].title}"
          category="{item.title}"
          description="{item.images[0].description}"
          image={ getImageUpload(item.images[0].image)}
        />
      </a>
    {/each}
  </Container>
</section>
