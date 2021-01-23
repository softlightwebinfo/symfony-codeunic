<script>
  import ContactForm from "../components/ContactForm/ContactForm.svelte";
  import GalleryImages from "../components/GalleryImages/GalleryImages.svelte";
  import Footer from "../components/Footer/Footer.svelte";
  import {getImageUpload} from "../libs/images";
  import CategoriesList from "../components/CategoriesList/CategoriesList.svelte";

  export let data;
  $: imagesHover = data.images_aggregate.nodes.map((image) => ({
    image: getImageUpload(image.image),
    title: image.title,
    category: image.album.title,
  }))
</script>
<script context="module">
  import SliderVideo from "../components/SliderVideo/SliderVideo.svelte";
  import ElementPhotoSection from "../components/ElementPhotoSection/ElementPhotoSection.svelte";
  import GalleryImagesHover from "../components/GalleryImagesHover/GalleryImagesHover.svelte";
  import PopulateMessage from "../components/PopulateMessage/PopulateMessage.svelte";
  import NewModelsAccount from "../components/NewModelsAccount/NewModelsAccount.svelte";
  import IconTitleDescriptionSection
    from "../components/IconTitleDescriptionSection/IconTitleDescriptionSection.svelte";
  import * as icon from 'svelte-awesome/icons';

  import apollo from "../apollo";
  import {HOME_PAGE} from "../apollo/home_page";

  let str = "Loading...";

  export async function preload() {
    let {data} = await apollo.query({
      query: HOME_PAGE
    });
    return {
      data: data,
    };
  }
</script>
<style global lang="scss">
  .slider-video {
    margin-top: -80px;
  }
</style>
<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<SliderVideo
  description={data.configs_by_pk.description}
  title={data.configs_by_pk.title}
/>
{#each data.images_users_home_aggregate.nodes as home}
  <ElementPhotoSection
    description={home.description}
    images="{home.user.images}"
    title={home.title}
  />
{/each}
<GalleryImagesHover images="{imagesHover}"/>
<PopulateMessage message={data.view_testimonials_home[0].message} user={data.view_testimonials_home[0].name}/>
<NewModelsAccount data="{data.albums}"/>
<IconTitleDescriptionSection data={data.about_us_list.map(i => ({...i, icon: icon[i.icon]}))}/>
<CategoriesList categories="{data.categories}"/>
<ContactForm/>
<GalleryImages images="{data.images_random}"/>
<Footer/>
