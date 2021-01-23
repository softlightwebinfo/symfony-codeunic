<script>
  import Footer from "../../components/Footer/Footer.svelte";
  import SliderImage from "../../components/SliderImage/SliderImage.svelte";
  import Container from "../../components/Container/Container.svelte";
  import GridImagesAlbum from "../../components/GridImagesAlbum/GridImagesAlbum.svelte";
  import UserInfo from "../../components/UserInfo/UserInfo.svelte";

  export let data;
  $: randomImage = Math.floor(Math.random() * data.album.images.length);
</script>
<script context="module">
  import apollo from "../../apollo";
  import {AlBUMS_DETAIL_PAGE} from "../../apollo/albums_page";

  let str = "Loading...";

  export async function preload({params}) {
    const [_, album] = params.slug;
    let {data} = await apollo.query({
      query: AlBUMS_DETAIL_PAGE,
      variables: {
        album: Number(album),
      }
    });
    return {
      data: data,
    };
  }
</script>
<style lang="scss">
  @import "src/style/index";

  :global(.slider-image) {
    margin-top: -80px;
  }

  section {
    :global(.container) {
      padding: $section-padding;
    }
  }

  p {
    color: $color-description;
  }
</style>
<SliderImage
  description="{data.album.images[randomImage].description}"
  image="{data.album.images[randomImage].image}"
  title="{data.album.title} - {data.album.images[randomImage].title}"
>
  <slot name="left">
    <UserInfo
      user="{data.album.user}"
    />
  </slot>
</SliderImage>
<section>
  <Container>
    <h2>{data.album.title}</h2>
    <p>{data.album.description}</p>
  </Container>
  <GridImagesAlbum images="{data.album.images}"/>
</section>
<Footer/>
