<script>
    export let text;
    export let route;
    export let style;
</script>
<style lang="scss">
  @import "./src/style/index";
  @import "./Button";
</style>
<a style="{style}" class="button" href="{route}">{text}</a>
