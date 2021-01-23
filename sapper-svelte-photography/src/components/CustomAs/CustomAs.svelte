<script lang="ts">
    import { getImageUpload } from "../../libs/images";
    import Image from "../Image/Image.svelte";

    export let ads = [];
</script>
<style lang="scss">
  @import "src/style/index";
  @import "CustomAs";
</style>
<section>
  <span>Publicidad</span>
  {#each ads as adsItem}
    {#if adsItem.file.split('.').pop() === "mp4"}
      <video autoplay loop>
        <track kind = "captions"/>
        <source
          src="{getImageUpload(adsItem.file,false)}"
          type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    {:else}
      <Image image="{getImageUpload(adsItem.file,false)}" title="{adsItem.title}"/>
    {/if}
  {/each}
</section>
