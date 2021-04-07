<style lang="scss">
  @import "First";
</style>
<script>
  import config from '../../config.json';
  import image from '../../images/search-key.png';
  import image2 from '../../images/star.png';
  import Button from "../../../../components/Button/Button.svelte";
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();
  const onClick = (e) => {
    dispatch("onClick", e)
  };

</script>
<section>
  <h1>{config.vars.first.title}</h1>
  <div class="list">
    {#each config.vars.first.list as item, index}
      <div>
        <img alt="" src="{index === 0 ? image: image2}">
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    {/each}
  </div>
  <Button medium on:click={onClick} text="{config.vars.first.button}"/>
</section>
