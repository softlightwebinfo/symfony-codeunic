<style lang="scss">
  @import "src/style/index";
  @import "Modal";
</style>
<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import {clickOutside} from "../../libs/outside";
  import {close} from 'svelte-awesome/icons';

  export let open = false;
  export let onClose;
</script>

{#if open}
  <div class="overload">
    <div class="modal" use:clickOutside on:click_outside={onClose}>
      <header on:click={onClose}>
        <Icon data="{close}"/>
      </header>
      <section>
        <slot/>
      </section>
    </div>
  </div>
{/if}
