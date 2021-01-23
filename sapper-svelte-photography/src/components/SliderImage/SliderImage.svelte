<script>
  import SliderCaption from "../SliderCaption/SliderCaption.svelte";
  import Image from "../Image/Image.svelte";
  import {getImageUpload} from "../../libs/images";

  export let title;
  export let description;
  export let image;
</script>
<style lang="scss">
  @import "src/style/index";
  @import "SliderImage";
</style>
<div class="slider-image">
  <Image image={ getImageUpload(image, false) } title="{title}"/>
  <SliderCaption description="{description}" title="{title}"/>
  <div class="left">
    <slot name="left"/>
    <slot/>
  </div>
  <div class="right">
    <slot name="right"/>
  </div>
</div>
