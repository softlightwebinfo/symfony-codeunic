<style lang="scss">
  @import "src/style/index";
  @import "CategoriesList";
</style>
<script>
  import Container from "../Container/Container.svelte";
  import {slug} from "../../libs/slug";

  export let categories;
</script>
<section>
  <Container>
    <h2>Nuestras Categories</h2>
    {#each categories as category}
      <a href="category/{slug(category.category)}/{category.id}">
        <h3>{category.category} ({category.images_aggregate.aggregate.count})</h3>
        <p>{category.description}</p>
      </a>
    {/each}
  </Container>
</section>
