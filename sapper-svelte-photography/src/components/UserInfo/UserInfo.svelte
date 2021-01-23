<style lang="scss">
  @import "src/style/index";
  @import "UserInfo";
</style>
<script lang="ts">
    import Image from "../Image/Image.svelte";
    import { getImageUpload } from "../../libs/images";
    import { formatDate } from "../../libs/date";

    export let user = null;
</script>
<a href="showcase/{user.username}">
  <section>
    <Image image="{getImageUpload(user.users_showcases.image)}" title="{user.name}"/>
    <div>
      <i>{formatDate(user.updated_at)}</i>
      <h3>{user.name}</h3>
      <small>{user.user_type.user_type}</small>
      <p>@{user.username}</p>
    </div>
  </section>
</a>
