<style lang="scss">
  @import "src/style/index";
  @import "Container";
</style>
<script lang="ts">
    export let className: string = "";
    export let flex: boolean = false;
    export let all: boolean = false;
</script>
<section class:all class="container {className} {flex? 'container--flex': undefined}">
    <slot/>
</section>
