<style lang="scss">
  @import "src/style/index";
  @import "Showcase";
</style>
<script>
  import SliderImage from "../SliderImage/SliderImage.svelte";
  import Toolbar from "../Toolbar/Toolbar.svelte";
  import {routesShowCase} from "../../settings/nav";

  export let user;
  export let showcase;
  export let description;
</script>
<section>
  <SliderImage
    description="{description}"
    image="{showcase}"
    title="{user.name}"
  />
  <Toolbar
    routes="{routesShowCase}"
    user="{user}"
  />
  <slot/>
</section>
