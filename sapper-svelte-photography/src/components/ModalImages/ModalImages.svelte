<style lang="scss">
  @import "src/style/index";
  @import "ModalImages";
</style>
<script>
  import Modal from "../Modal/Modal.svelte";
  import Image from "../Image/Image.svelte";
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
  import {getImageUpload} from "../../libs/images";

  export let images = [];
  export let currentIndex = 0;
  export let openModal = false;
  export let onClose;

  let getImage = 3;

  $: totalImages = images.length;
  $: currentIndexGet = currentIndex;
  $: left = (currentIndexGet - getImage) < 0 ? 0 : (currentIndexGet - getImage);
  $: right = (currentIndexGet + getImage) > (totalImages - 1) ? totalImages - 1 : currentIndexGet + getImage
  $: thumbsImages = images.filter((_, index) => index !== currentIndex).slice(left, right);
  const onClickLeft = () => {
    const imagesSize = images.length - 1;
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
      currentIndex = imagesSize;
    }
  };
  const onClickRight = () => {
    const imagesSize = images.length - 1;
    currentIndex = currentIndex + 1;
    if (currentIndex > imagesSize) {
      currentIndex = 0;
    }
  };
  const setCurrentImage = (image) => {
    currentIndex = images.findIndex(item => item.image === image.image)
  };
</script>
<Modal bind:open={openModal} onClose={onClose}>
  <section class="group">
    <aside>
      <h3>{images[currentIndex].title}</h3>
      <p>{images[currentIndex].description}</p>
      <section class="group__thumbs">
        {#each thumbsImages as image}
          <Image on:click={() => setCurrentImage(image)} image={ getImageUpload(image.image)} title="{image.title}"/>
        {/each}
      </section>
    </aside>
    <section class="group__section">
      <div class="left" on:click={onClickLeft}>
        <Icon data="{faChevronLeft}"/>
      </div>
      <Image image={ getImageUpload(images[currentIndex].image, false)} title="{images[currentIndex].title}"/>
      <div class="right" on:click={onClickRight}>
        <Icon data="{faChevronRight}"/>
      </div>
    </section>
  </section>
</Modal>
