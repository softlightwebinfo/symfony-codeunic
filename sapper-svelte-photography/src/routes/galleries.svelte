<script>
  import SliderImage from "../components/SliderImage/SliderImage.svelte";
  import GalleryImages from "../components/GalleryImages/GalleryImages.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import GallerySection from "../components/GallerySection/GallerySection.svelte";

  export let data;
  export let currentPage = 1
</script>
<script context="module">
  import apollo from "../apollo";
  import {GALLERIES_PAGE} from "../apollo/galleries_page";
  import settings from "../settings";

  let str = "Loading...";

  export async function preload(page) {
    const imagesSize = settings.galleryPaginationSize;
    const currentPage = page.query.page ? Number(page.query.page) : 1;
    const offset = currentPage === 1 ? 0 : (currentPage - 1) * (imagesSize);
    let {data} = await apollo.query({
      query: GALLERIES_PAGE,
      variables: {
        offset
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
<GallerySection
  bind:currentPage="{currentPage}"
  bind:per_page="{settings.galleryPaginationSize}"
  bind:total="{data.images_aggregate.aggregate.count}"
  ads="{data.ads}"
  categories="{data.categories}"
  images="{data.images}"
  pageRoute="galleries"
/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
