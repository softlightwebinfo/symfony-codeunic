<script>
  import SliderImage from "../components/SliderImage/SliderImage.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import GalleryImages from "../components/GalleryImages/GalleryImages.svelte";
  import ContactForm from "../components/ContactForm/ContactForm.svelte";

  export let data;
</script>
<script context="module">
  import apollo from "../apollo";
  import {CONTACT_PAGE} from "../apollo/contact_page";

  let str = "Loading...";

  export async function preload() {
    let {data} = await apollo.query({
      query: CONTACT_PAGE
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
<ContactForm/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
