<style lang="scss">
  @import "src/style/index";
  @import "FieldTextarea";
</style>
<script lang="ts">
    export let value = "";
    export let label = "";
    export let required = false;
</script>
<label class="field field--textarea">
  <span>{label}</span>
  <textarea required={required} bind:value={value} placeholder={label}></textarea>
</label>
