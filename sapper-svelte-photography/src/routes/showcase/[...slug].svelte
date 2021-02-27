<script>
  import Showcase from "../../components/Showcase/Showcase.svelte";
  import {formatDate} from "../../libs/date";
  import Container from "../../components/Container/Container.svelte";
  import Box from "../../components/Box/Box.svelte";
  import GalleryImagesAlbums from "../../components/GalleryImagesAlbums/GalleryImagesAlbums.svelte";
  import {getImageUpload} from "../../libs/images";
  import GridImagesAlbum from "../../components/GridImagesAlbum/GridImagesAlbum.svelte";
  import ContactForm from "../../components/ContactForm/ContactForm.svelte";

  export let data;
  export let page;
  $: user = {
    name: data.user.name,
    username: data.user.username,
    userType: data.user.user_type.user_type,
    createdAt: formatDate(data.user.created_at),
    avatar: data.image,
  };
  $: imagesHover = data.user.albums.map((image) => ({
    image: getImageUpload(image.photo[0].image),
    title: image.title,
    category: image.photo[0].title,
    id: image.id,
  }))
</script>
<style lang="scss">
  @import "src/style/index";

  :global(.slider-image) {
    margin-top: -80px;
    max-height: 600px;
  }

  h3 {
    margin: 0;
  }

  small {
    color: $color-description;
    font-style: italic;
  }

  p b {
    display: block;
  }

  div {
    padding-top: 60px;
    padding-bottom: 60px;

    :global(.GalleryImagesAlbums) {
      padding: 20px 0 0;
    }
  }

  h3 + :global(.container) {
    padding: 0;
  }
</style>
<script context="module">
  import apollo from "../../apollo";
  import {SHOWCASE_PAGE} from "../../apollo/showcase_page";

  export async function preload({params, query}) {
    const [username, page = "information"] = params.slug;
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
      page,
    };
  }
</script>
<Showcase
  description="{data.description}"
  {page}
  showcase="{data.imageByFkBanner.image}"
  {user}
>
  <div>
    <Container>
      {#if page === "information"}
        <Box>
          <h3>Information</h3>
          <small>{data.title}</small>
          <p>{data.description}</p>
          <p>
            <b>Fecha de registro:</b>
            {formatDate(data.updated_at)}
          </p>
          <p>
            <b>Correo electronico:</b>
            {data.user.email}
          </p>
          <h3>Redes sociales</h3>
          <ul>
            {#each data.users_socials as social}
              <li>
                <a href="{social.social_url}">{social.social_name}</a>
              </li>
            {/each}
          </ul>
        </Box>
      {/if}
      {#if page === "albums"}
        <Box>
          <h3>Albums</h3>
          <GalleryImagesAlbums images={imagesHover}/>
        </Box>
      {/if}
      {#if page === "gallery"}
        <Box>
          <h3 style="margin-bottom: 20px;">Gallery</h3>
          <GridImagesAlbum images="{data.user.images}"/>
        </Box>
      {/if}
      {#if page === "models"}
        <Box>
          <h3 style="margin-bottom: 20px;">Models</h3>
          <p>No results</p>
        </Box>
      {/if}
      {#if page === "prices"}
        <Box>
          <h3 style="margin-bottom: 20px;">Prices</h3>
          <p>No results</p>
        </Box>
      {/if}
      {#if page === "schedule"}
        <Box>
          <h3 style="margin-bottom: 20px;">Schedule</h3>
          <p>No results</p>
        </Box>
      {/if}
      {#if page === "contact"}
        <ContactForm/>
      {/if}
    </Container>
  </div>
</Showcase>
