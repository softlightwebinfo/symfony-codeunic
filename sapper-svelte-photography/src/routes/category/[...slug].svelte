<script context="module">
  import settings from "../../settings";
  import apollo from "../../apollo";
  import {CATEGORIES_PAGE} from "../../apollo/categories_page";

  export async function preload({params, query}) {
    const [slug, category] = params.slug;
    const imagesSize = settings.galleryPaginationSize;
    const currentPage = query.page ? Number(query.page) : 1;
    const offset = currentPage === 1 ? 0 : (currentPage - 1) * (imagesSize);
    let {data} = await apollo.query({
      query: CATEGORIES_PAGE,
      variables: {
        offset,
        category
      }
    });
    return {
      data,
      currentPage,
      category
    };
  }
</script>
<script>
  import SliderImage from "../../components/SliderImage/SliderImage.svelte";
  import GallerySection from "../../components/GallerySection/GallerySection.svelte";
  import GalleryImages from "../../components/GalleryImages/GalleryImages.svelte";
  import Footer from "../../components/Footer/Footer.svelte";

  export let data;
  export let currentPage = 1;
  export let category;
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
  categories="{data.categories}"
  bind:idCategory="{category}"
  images="{data.images}"
  pageRoute="galleries"
/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
