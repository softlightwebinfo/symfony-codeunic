<script>
  import PhotographersPage from "../../components/PhotographersPage/PhotographersPage.svelte";

  export let data;
  export let currentPage = 1
  export let category;

  const userTypes = data.user_types.map((item) => ({id: item.id, category: item.user_type}));
</script>
<script context="module">
  import apollo from "../../apollo";
  import settings from "../../settings";
  import {PHOTOGRAPHERS_PAGE_SLUG} from "../../apollo/photographers_page";

  let str = "Loading...";

  export async function preload({params, query}) {
    const [slug, category] = params.slug;
    const imagesSize = settings.galleryPaginationSize;
    const currentPage = query.page ? Number(query.page) : 1;
    const offset = currentPage === 1 ? 0 : (currentPage - 1) * (imagesSize);
    let {data} = await apollo.query({
      query: PHOTOGRAPHERS_PAGE_SLUG,
      variables: {
        offset,
        category: Number(category),
      }
    });
    return {
      data,
      currentPage,
      category,
    };
  }
</script>
<PhotographersPage
  currentPage="{currentPage}"
  data="{data}"
  category="{category}"
/>
