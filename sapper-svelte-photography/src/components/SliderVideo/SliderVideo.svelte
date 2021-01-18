<script>
    import SliderCaption from "../SliderCaption/SliderCaption.svelte";

    export let title;
    export let description;
</script>
<style lang="scss">
  @import "src/components/SliderVideo/slider_video";
</style>
<div class="slider-video">
    <video id="video" preload="metadata" autoplay loop muted poster="images/video-home-poster.jpg">
        <source src="videos/home.mp4" type="video/mp4">
    </video>
    <SliderCaption title="{title}" description="{description}"/>
</div>
