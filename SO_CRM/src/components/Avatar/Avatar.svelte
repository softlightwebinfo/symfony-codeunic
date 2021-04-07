<style lang="scss">
  @import "Avatar";
</style>
<script>
  export let title;
  export let image;
  export let big = false;
</script>
<div class:big>
  <img alt="{title}" src="{image}" title="{title}">
</div>
