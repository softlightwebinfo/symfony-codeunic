<style global lang="scss">
  @import "~animate.css/animate.min.css";
  @import "src/style/base";
</style>
<script>
  import {stores} from '@sapper/app'
  import {Service} from "../services/Service";

  const {session} = stores()

  Service.TOKEN = $session.token;
</script>
<main>
  <slot/>
</main>
