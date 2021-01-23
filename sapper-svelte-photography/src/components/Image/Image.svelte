<script lang="ts">
    export let image: string;
    export let title: string;
</script>
<style lang="scss">
  @import "Image";
</style>
<img class="image" on:click src="{image}" title="{title}" alt="{title}">
