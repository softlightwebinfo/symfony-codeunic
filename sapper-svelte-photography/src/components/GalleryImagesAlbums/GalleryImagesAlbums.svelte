<style lang="scss">
  @import "src/style/index";
  @import "GalleryImagesAlbums";
</style>
<script>
  import Container from "../Container/Container.svelte";
  import Image from "../Image/Image.svelte";
  import {slug} from "../../libs/slug";

  export let images = [];
</script>
<Container>
  <section>
    {#each images as image}
      <a href="albums/{slug(image.title)}/{image.id}">
        <article>
          <Image image="{image.image}" title="{image.title}"/>
          <div>
            <h3>{image.title}</h3>
            <p>{image.category}</p>
          </div>
        </article>
      </a>
    {/each}
  </section>
</Container>
