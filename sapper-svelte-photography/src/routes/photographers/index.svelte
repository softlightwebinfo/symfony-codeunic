<script>
  import PhotographersPage from "../../components/PhotographersPage/PhotographersPage.svelte";

  export let data;
  export let currentPage = 1
</script>
<script context="module">
  import apollo from "../../apollo";
  import settings from "../../settings";
  import {PHOTOGRAPHERS_PAGE} from "../../apollo/photographers_page";

  let str = "Loading...";

  export async function preload(page) {
    const imagesSize = settings.galleryPaginationSize;
    const currentPage = page.query.page ? Number(page.query.page) : 1;
    const offset = currentPage === 1 ? 0 : (currentPage - 1) * (imagesSize);
    let {data} = await apollo.query({
      query: PHOTOGRAPHERS_PAGE,
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
<PhotographersPage
  bind:currentPage
  bind:data
/>

