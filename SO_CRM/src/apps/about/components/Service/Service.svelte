<style lang="scss">
  @import "Service";
</style>
<script>
  import config from '../../config.json';
</script>
<div class="index">
  <div class="left">
    <img alt="{config.label}" src="{config.vars.service.image}" title="{config.label}">
  </div>
  <div class="right">
    <p>
      {@html config.vars.service.text.split("\n").join("<br />")}
    </p>
    <nav>
      {#each config.vars.service.links as link}
        <a href="{link.link}">{link.label}</a>
      {/each}
    </nav>
  </div>
</div>
