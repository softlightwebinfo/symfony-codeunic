<style lang="scss">
  @import "src/style/index";
  @import "GallerySection";
</style>
<script lang="ts">
    import { getImageUpload } from "../../libs/images";
    import Image from "../Image/Image.svelte";
    import Pagination from "../Pagination/Pagination.svelte";
    import { slug } from "../../libs/slug";
    import settings from "../../settings";
    import ModalImages from "../ModalImages/ModalImages.svelte";
    import CustomAs from "../CustomAs/CustomAs.svelte";

    export let images = [];
    export let categories = [];
    export let idCategory = null;
    export let currentPage;
    export let pageRoute;
    export let total;
    export let per_page;
    export let ads = [];

    let openModal = false;
    let currentIndex = 0;

    const onClickModal = (image, index) => {
        openModal = true;
        currentIndex = index;
    }
    const onClose = () => {
        openModal = false;
    };
</script>
<section class="gallerySection">
  <aside>
    <h3>Categories</h3>
    <ul>
      {#each categories as category}
        <li class:active={category.id == idCategory}>
          <a href="category/{slug(category.category)}/{category.id}">
            {category.category} ({category.images_aggregate.aggregate.count})
          </a>
        </li>
      {/each}
    </ul>
    <CustomAs {ads}/>
  </aside>
  <section>
    {#if !images.length}
      <article>No hay resultados</article>
    {/if}
    {#each images as image, index}
      <article on:click={() => onClickModal(image, index)}>
        <Image title="{image.title}" image={getImageUpload(image.image)}/>
      </article>
    {/each}

    {#if total > settings.galleryPaginationSize}
      <Pagination
        {currentPage}
        {pageRoute}
        {per_page}
        {total}
      />
    {/if}
  </section>
</section>
<ModalImages
  {currentIndex}
  {images}
  onClose="{onClose}"
  {openModal}
/>
