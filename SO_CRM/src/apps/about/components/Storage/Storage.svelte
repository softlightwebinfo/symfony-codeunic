<style lang="scss">
  @import "Storage";
</style>
<script>
  import config from '../../config.json';
  import Button from "../../../../components/Button/Button.svelte";
</script>
{#each config.vars.storage.disk as disk}
  <div class="index">
    <div class="left">
      <img src={config.vars.storage.image} alt="Devices">
      <span>{disk.value} {disk.type}</span>
    </div>
    <div class="right">
      <div>
        <div class="title">
          <h3>{disk.text}</h3>
          <p>{disk.space} {disk.type} disponibles de {disk.value} {disk.type}</p>
        </div>
        <Button text="{config.vars.storage.button}"/>
      </div>
      <div>
        <progress
          value="{disk.space}"
          max="{disk.value}"
          data-label="{(disk.space/disk.value) * 100}% complete"
        ></progress>
      </div>
    </div>
  </div>
{/each}
