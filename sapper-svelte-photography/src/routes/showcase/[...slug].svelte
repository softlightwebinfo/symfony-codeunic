<script>
  import Showcase from "../../components/Showcase/Showcase.svelte";
  import {formatDate} from "../../libs/date";

  export let data;
  $: user = {
    name: data.user.name,
    username: data.user.username,
    userType: data.user.user_type.user_type,
    createdAt: formatDate(data.user.created_at),
    avatar: data.image,
  };
</script>
<style lang="scss">
  :global(.slider-image) {
    margin-top: -80px;
    max-height: 600px;
  }
</style>
<script context="module">
  import apollo from "../../apollo";
  import {SHOWCASE_PAGE} from "../../apollo/showcase_page";

  export async function preload({params, query}) {
    const [username] = params.slug;
    let {data} = await apollo.query({
      query: SHOWCASE_PAGE,
      variables: {
        username,
      }
    });

    if (!data.users_showcase.length) {
      return null;
    }
    return {
      data: data.users_showcase[0],
    };
  }
</script>
<Showcase
  description="{data.description}"
  showcase="{data.imageByFkBanner.image}"
  {user}
>
  <p>
    Hola que tal
  </p>
</Showcase>
