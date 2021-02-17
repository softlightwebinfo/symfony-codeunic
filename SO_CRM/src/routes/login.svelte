<script>
  import LoginPage from "../components/LoginPage/LoginPage.svelte";
  import PageLogin from "../components/PageLogin/PageLogin.svelte";
</script>
<script context="module">
  export async function preload(page, session) {
    let {authenticated, user} = session;
    if (authenticated) return this.redirect(302, '/');
    return {user};
  }
</script>
<svelte:head>
  <title>OS Platform</title>
</svelte:head>
<LoginPage/>
<PageLogin/>
