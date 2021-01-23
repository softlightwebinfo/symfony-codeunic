<style lang="scss">
  @import "src/style/index";
  @import "GridImagesAlbum";
</style>
<script lang="ts">
    import Image from "../Image/Image.svelte";
    import { getImageUpload } from "../../libs/images";
    import ModalImages from "../ModalImages/ModalImages.svelte";

    export let images = [];
    let currentIndex = 0;
    let openModal = false;

    const onClickModal = (index) => {
        openModal = true;
        currentIndex = index;
    };
    const onClose = () => openModal = false;
</script>

<section>
  {#each images as image, index}
    <figure on:click={() => onClickModal(index)}>
      <Image title="{image.title}" image={getImageUpload(image.image)}/>
      <div>
        {image.title}
      </div>
    </figure>
  {/each}
</section>
<ModalImages
  bind:currentIndex
  bind:images
  onClose="{onClose}"
  bind:openModal
/>
