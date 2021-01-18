<style lang="scss">
  @import "Container";
</style>
<script lang="ts">
    export let className: string = "";
    export let flex: boolean = false;
</script>
<section class="container {className} {flex? 'container--flex': undefined}">
    <slot/>
</section>
