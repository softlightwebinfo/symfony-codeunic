<style lang="scss">
  @import "src/style/index";
  @import "GalleryImagesHover";
</style>
<script lang="ts">
    import ImageBox from "../ImageBox/ImageBox.svelte";

    export let images: { title: string; image: string; category: string; }[] = [];
</script>
<div class="galleryImagesHover">
    {#each images as image}
        <a href="portfolio">
            <ImageBox {...image}/>
        </a>
    {/each}
</div>
