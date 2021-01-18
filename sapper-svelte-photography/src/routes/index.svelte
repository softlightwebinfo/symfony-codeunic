<script>
    import ContactForm from "../components/ContactForm/ContactForm.svelte";
    export let users;
</script>
<script context="module">
    import SliderVideo from "../components/SliderVideo/SliderVideo.svelte";
    import ElementPhotoSection from "../components/ElementPhotoSection/ElementPhotoSection.svelte";
    import GalleryImagesHover from "../components/GalleryImagesHover/GalleryImagesHover.svelte";
    import PopulateMessage from "../components/PopulateMessage/PopulateMessage.svelte";
    import NewModelsAccount from "../components/NewModelsAccount/NewModelsAccount.svelte";
    import IconTitleDescriptionSection
        from "../components/IconTitleDescriptionSection/IconTitleDescriptionSection.svelte";
    import {cog, diamond, camera} from 'svelte-awesome/icons';

    import apollo from "../apollo";
    import {GET_USERS} from "../apollo/users";

    let str = "Loading...";

    export async function preload() {
        let {data} = await apollo.query({
            query: GET_USERS
        });
        return {
            users: data.users,
        };
    }

    const images = [
        {title: "imagen 1", image: "images/team-2.jpg"},
        {title: "imagen 2", image: "images/team-3.jpg"},
    ];

    const imagesGallery = [
        {image: "images/gal-4-05.jpg", title: "Ellen & James", category: "weddings"},
        {image: "images/gal-5-04.jpg", title: "Ellen & James 2", category: "weddings 2"},
        {image: "images/gal-4-05.jpg", title: "Ellen & James", category: "weddings"},
        {image: "images/gal-5-04.jpg", title: "Ellen & James 2", category: "weddings 2"},
        {image: "images/gal-4-05.jpg", title: "Ellen & James", category: "weddings"},
        {image: "images/gal-5-04.jpg", title: "Ellen & James 2", category: "weddings 2"},
        {image: "images/gal-4-05.jpg", title: "Ellen & James", category: "weddings"},
        {image: "images/gal-5-04.jpg", title: "Ellen & James 2", category: "weddings 2"},
    ];

    const newModelsAccountData = [
        {
            image: "images/gal-4-05.jpg",
            date: "2019-10-20",
            category: "News portraits",
            title: "Lovely Wedding",
            description: "Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et ..."
        },
        {
            image: "images/gal-4-05.jpg",
            date: "2019-10-20",
            category: "News portraits",
            title: "Lovely Wedding",
            description: "Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et ..."
        },
        {
            image: "images/gal-4-05.jpg",
            date: "2019-10-20",
            category: "News portraits",
            title: "Lovely Wedding",
            description: "Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et ..."
        },
    ];
    const IconTitleDescriptionSectionData = [
        {
            title: "Visual Storytellers",
            description: "Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam.",
            icon: cog,
        },
        {
            title: "It's All About You",
            description: "Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam.",
            icon: diamond
        },
        {
            title: "Beauty & Elegance",
            description: "Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam.",
            icon: camera,
        },
    ];
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
        title="Creative Photography Studio"
        description="Cum et labore appareat, te est nostrum eligendi adipisci. Tota quas habeo eu vel. Vel autem apeirian primis."
/>
<ElementPhotoSection
        images="{images}"
        title="We're Gleam a small and enthusiastic photography studio based in New York"
        description="We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos."
/>
<GalleryImagesHover
        images="{imagesGallery}"
/>
<PopulateMessage
        message="The creativity and talent of the Gleam team was amazing. Pro in hinc exerci gloriatur, ius ut agam consectetuer, quo te euismod corrumpit. "
        user="ANNA JONES - BRIDE"
/>
<NewModelsAccount
        data="{newModelsAccountData}"
/>
<IconTitleDescriptionSection
        data={IconTitleDescriptionSectionData}
/>
<ContactForm/>
{#each users as user}
    {user.id}
{/each}
