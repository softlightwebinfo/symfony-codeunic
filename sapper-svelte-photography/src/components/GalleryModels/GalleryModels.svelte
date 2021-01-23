<style lang="scss">
  @import "src/style/index";
  @import "GalleryModels";
</style>
<script lang="ts">
    import { getImageUpload } from "../../libs/images";
    import Image from "../Image/Image.svelte";
    import Modal from "../Modal/Modal.svelte";
    import Icon from 'svelte-awesome/components/Icon.svelte'
    import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
    import Pagination from "../Pagination/Pagination.svelte";
    import settings from "../../settings";
    import UsersAccount from "../UsersAccount/UsersAccount.svelte";

    export let images = [];
    export let currentPage;
    export let pageRoute;
    export let total;
    export let per_page;

    let openModal = false;
    let currentIndex = 0;

    const onClickModal = (image, index) => {
        openModal = true;
        currentIndex = index;
    }
    const onClose = () => {
        openModal = false;
    };
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
    $: imagesNew = images.map((user => ({
        updated_at: user.updated_at,
        title: user.title,
        description: user.description,
        category: user.user.user_type.user_type,
        image: user.image,
    })));
</script>
{#if !imagesNew.length}
  <article>No hay resultados</article>
{/if}

<UsersAccount all data="{imagesNew}"/>

{#if total > settings.galleryPaginationSize}
  <Pagination
    {currentPage}
    {pageRoute}
    {per_page}
    {total}
  />
{/if}
<Modal bind:open={openModal} onClose={onClose}>
  <div class="left" on:click={onClickLeft}>
    <Icon data="{faChevronLeft}"/>
  </div>
  <Image image={ getImageUpload(images[currentIndex].image, false)} title="{images[currentIndex].title}"/>
  <div class="right" on:click={onClickRight}>
    <Icon data="{faChevronRight}"/>
  </div>
</Modal>
