<script context="module">
  export async function preload(page, session) {
    let {authenticated, user} = session;
    if (!authenticated) return this.redirect(302, '/login');
    return {user};
  }
</script>
<script>
  import Page from "../components/Page/Page.svelte";
</script>
<svelte:head>
  <title>OS Platform</title>
</svelte:head>
<Page/>
