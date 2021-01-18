<style lang="scss">
  @import "src/style/index";
  @import "IconTitleDescriptionSection";
</style>
<script>
    import Container from "../Container/Container.svelte";
    import Icon from 'svelte-awesome/components/Icon.svelte'

    export let data = [];
</script>
<section>
    <Container>
        {#each data as item}
           <article>
               <Icon data={item.icon}/>
               <h4>{item.title}</h4>
               <p>{item.description}</p>
           </article>
        {/each}
    </Container>
</section>
