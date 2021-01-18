<style lang="scss">
  @import "src/style/index";
  @import "FieldTextarea";
</style>
<script lang="ts">
    export let value = "";
    export let label = "";
</script>
<label class="field field--textarea">
    <span>{label}</span>
    <textarea bind:value={value}></textarea>
</label>
