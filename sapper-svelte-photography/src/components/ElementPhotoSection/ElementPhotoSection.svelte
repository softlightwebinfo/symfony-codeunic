<style lang="scss" global>
  @import "src/style/index";
  @import "ElementPhotoSection";
</style>
<script lang="ts">
    import Container from "../Container/Container.svelte";
    import Image from "../Image/Image.svelte";

    export let images: { image: string, title: string }[];
    export let title: string;
    export let description: string;
</script>
<Container className="elementPhotoSection">
    <div class="elementPhotoSection__left">
        {#each images as image}
            <Image image="{image.image}" title="{image.title}"/>
        {/each}
    </div>
    <div class="elementPhotoSection__right">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</Container>
