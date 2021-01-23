<script>
  import SliderImage from "../components/SliderImage/SliderImage.svelte";
  import GalleryImages from "../components/GalleryImages/GalleryImages.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import GalleryImagesAlbums from "../components/GalleryImagesAlbums/GalleryImagesAlbums.svelte";

  export let data;
  let imagesHover = data.images_aggregate.nodes.map((image) => ({
    image: `upload/${image.image}`,
    title: image.title, category: image.album.title,
  }))
</script>
<script context="module">
  import {ALBUMS_PAGE} from "../apollo/albums_page";
  import apollo from "../apollo";

  let str = "Loading...";

  export async function preload() {
    let {data} = await apollo.query({
      query: ALBUMS_PAGE
    });
    return {
      data: data,
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
<GalleryImagesAlbums images={imagesHover}/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
