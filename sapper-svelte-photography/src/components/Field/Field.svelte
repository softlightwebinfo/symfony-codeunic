<style lang="scss">
  @import "src/style/index";
  @import "Field";
</style>
<script lang="ts">
    export let value = "";
    export let label = "";
    export let required = false;
</script>
<label class="field">
  <span>{label}</span>
  <input required="{required}" bind:value={value} placeholder={label} type="text"/>
</label>
