<style lang="scss">
  @import "src/style/index";
  @import "Field";
</style>
<script lang="ts">
    export let value = "";
    export let label = "";
</script>
<label class="field">
    <span>{label}</span>
    <input type="text" bind:value={value}/>
</label>
