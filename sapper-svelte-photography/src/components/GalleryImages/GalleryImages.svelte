<script>
  import Image from "../Image/Image.svelte";
  import {getImageUpload} from "../../libs/images";

  export let images = [];
</script>
<style lang="scss">
  @import "src/style/index.scss";
  @import "GalleryImages.scss";
</style>
<section>
  {#each images as image}
    <Image image={getImageUpload(image.image)} title="{image.title}"/>
  {/each}
</section>
