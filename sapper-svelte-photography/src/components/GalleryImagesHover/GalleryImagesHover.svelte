<style lang="scss">
  @import "src/style/index";
  @import "GalleryImagesHover";
</style>
<script lang="ts">
    import ImageBox from "../ImageBox/ImageBox.svelte";
    import { slug } from "../../libs/slug";

    export let images: { title: string; id: string, image: string; category: string; }[] = [];
</script>
<div class="galleryImagesHover">
  {#each images as image}
    <a href="/image/{slug(image.category)}/{slug(image.title)}/{image.id}">
      <ImageBox {...image}/>
    </a>
  {/each}
</div>
