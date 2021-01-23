<script>
  import Footer from "../components/Footer/Footer.svelte";
  import GalleryImages from "../components/GalleryImages/GalleryImages.svelte";
  import SliderImage from "../components/SliderImage/SliderImage.svelte";
  import GalleryModels from "../components/GalleryModels/GalleryModels.svelte";

  export let data;
  export let currentPage = 1
</script>
<script context="module">
  import apollo from "../apollo";
  import settings from "../settings";
  import {MODELS_PAGE} from "../apollo/models_page";

  let str = "Loading...";

  export async function preload(page) {
    const imagesSize = settings.galleryPaginationSize;
    const currentPage = page.query.page ? Number(page.query.page) : 1;
    const offset = currentPage === 1 ? 0 : (currentPage - 1) * (imagesSize);
    let {data} = await apollo.query({
      query: MODELS_PAGE,
      variables: {
        offset,
      }
    });
    return {
      data,
      currentPage,
    };
  }
</script>
<style lang="scss">
  :global(.slider-image) {
    margin-top: -80px;
  }
</style>
<svelte:head>
  <title>{data.configs_by_pk.title}</title>
</svelte:head>
<SliderImage
  description={data.configs_by_pk.description}
  image="{data.configs_by_pk.image}"
  title={data.configs_by_pk.title}
/>
<GalleryModels
  bind:currentPage="{currentPage}"
  bind:per_page="{settings.galleryPaginationSize}"
  bind:total="{data.users_showcase_aggregate.aggregate.count}"
  images="{data.users_showcase}"
  pageRoute="models"
/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
