<style lang="scss">
  @import "Support";
</style>
<script>
  import config from '../../config.json';
</script>

<div>
  {#each config.vars.support as item}
    <div class="index">
      <p>
        {item.label}
      </p>
      <img src="{item.icon}" alt="{item.label}" title="{item.label}">
      <nav>
        {#each item.links as link}
          <a href="{link.link}" target="_SUPPORT">{link.label}</a>
        {/each}
      </nav>
    </div>
  {/each}
</div>
