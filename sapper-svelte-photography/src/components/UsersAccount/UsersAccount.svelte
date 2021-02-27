<style lang="scss">
  @import "src/style/index";
  @import "UsersAccount";
</style>
<script lang="ts">
    import { getImageUpload } from "../../libs/images";
    import Container from "../Container/Container.svelte";
    import CardNewsAccounts from "../CardNewsAccounts/CardNewsAccounts.svelte";

    export let all = false;
    export let data: { image: string, username: string, category: string; title: string; date: string; description: string }[] = [];
</script>
<section class="usersAccount" class:all>
  <Container all flex>
    {#each data as item}
      <a href="showcase/{item.username}">
        <CardNewsAccounts
          date="{item.updated_at}"
          title="{item.title}"
          category="{item.category}"
          description="{item.description}"
          image={ getImageUpload(item.image)}
        />
      </a>
    {/each}
  </Container>
</section>
