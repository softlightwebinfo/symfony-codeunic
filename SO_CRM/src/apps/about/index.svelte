<script>
  import Overview from './components/Overview/Overview.svelte';
  import Storage from './components/Storage/Storage.svelte';
  import Support from './components/Support/Support.svelte';
  import Service from './components/Service/Service.svelte';

  export let activeTab = null;

  $: component = () => {
    const index = activeTab ? activeTab.index : 0;
    switch (index) {
      case 0: {
        return Overview;
      }
      case 1: {
        return Storage;
      }
      case 2: {
        return Support;
      }
      case 3: {
        return Service;
      }
    }
  }

</script>

<svelte:component {activeTab} this="{component()}"/>
