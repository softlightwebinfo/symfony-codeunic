<style lang="scss">
  @import "src/components/SliderCaption/slider_caption";
</style>
<script>
    import Button from "../Button/Button.svelte";

    export let title;
    export let description;
    export let buttonText = "Find more";
    export let buttonRoute = "about"
</script>
<div class="slider-caption">
    <div class="slider-caption__text">
        <h1>{title}</h1>
        <p>{description}</p>
        <Button style="margin-top: 32px;" text="{buttonText}" route="{buttonRoute}"/>
    </div>
</div>
