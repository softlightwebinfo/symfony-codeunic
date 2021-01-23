<script>
  import SliderImage from "../components/SliderImage/SliderImage.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import GalleryImages from "../components/GalleryImages/GalleryImages.svelte";
  import IconTitleDescriptionSection
    from "../components/IconTitleDescriptionSection/IconTitleDescriptionSection.svelte";
  import AboutTextDescription from "../components/AboutTextDescription/AboutTextDescription.svelte";
  import PopulateMessage from "../components/PopulateMessage/PopulateMessage.svelte";

  export let data;
</script>
<script context="module">
  import apollo from "../apollo";
  import {ABOUT_PAGE} from "../apollo/about_page";
  import * as icon from 'svelte-awesome/icons';

  let str = "Loading...";

  export async function preload() {
    let {data} = await apollo.query({
      query: ABOUT_PAGE
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
<AboutTextDescription/>
<IconTitleDescriptionSection data={data.about_us_list.map(i => ({...i, icon: icon[i.icon]}))}/>
<PopulateMessage message={data.view_testimonials_home[0].message} user={data.view_testimonials_home[0].name}/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
