<style lang="scss">
  @import "src/style/index";
  @import "ImageBox";
</style>
<script lang="ts">
    export let image: string;
    export let category: string;
    export let title: string;
</script>

<div class="imageBox" style="background-image: url({image})">
  <div>
    <h3>{title}</h3>
    <p>{category}</p>
  </div>
</div>
