<style lang="scss">
  @import "Overview";
</style>
<script>
  import Avatar from "../../../../components/Avatar/Avatar.svelte";
  import config from '../../config.json';
</script>

<div class="index">
  <div>
    <Avatar big image={config.vars.avatar}/>
  </div>
  <div class="right">
    <h2>{config.vars.appName}</h2>
    <span>Version {config.vars.version}</span>
    <ul>
      {#each config.vars.list as item}
        <li>
          <b>{item.label}</b>
          <span>{item.value}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
