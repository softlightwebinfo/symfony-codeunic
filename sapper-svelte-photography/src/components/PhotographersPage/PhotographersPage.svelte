<script lang="ts">
  import SliderImage from "../../components/SliderImage/SliderImage.svelte";
  import GalleryImages from "../../components/GalleryImages/GalleryImages.svelte";
  import Footer from "../../components/Footer/Footer.svelte";
  import GallerySectionUsers from "../../components/GallerySectionUsers/GallerySectionUsers.svelte";
  import settings from "../../settings";

  export let data;
  export let category;
  export let currentPage = 1
  let userTypes = data.user_types.map((item) => ({id: item.id, category: item.user_type, count: item.images_aggregate.aggregate.count}));
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
<GallerySectionUsers
  bind:currentPage="{currentPage}"
  bind:per_page="{settings.galleryPaginationSize}"
  bind:total="{data.users_showcase_aggregate.aggregate.count}"
  categories="{userTypes}"
  images="{data.users_showcase}"
  pageRoute="photographers"
  idCategory="{category}"
/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
