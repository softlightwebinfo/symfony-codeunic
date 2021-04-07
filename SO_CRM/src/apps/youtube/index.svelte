<style lang="scss">
  @import "index";
</style>
<script>
  import logo from "./images/icon.png";
  import {onMount} from 'svelte'

  let loading = true;

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 1000)
  })
</script>

<div>
  <img alt="" src={logo}>
</div>
