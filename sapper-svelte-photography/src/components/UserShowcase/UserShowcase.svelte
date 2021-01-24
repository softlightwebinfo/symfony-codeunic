<style lang="scss">
  @import "src/style/index.scss";
  @import "UserShowcase";
</style>
<script lang="ts">
    import { getImageUpload } from "../../libs/images";
    import Image from "../Image/Image.svelte";
    import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

    import Icon from 'svelte-awesome/components/Icon.svelte'

    export let user;
</script>
<section>
  <Icon data="{faEllipsisV}"/>
  <Image image="{getImageUpload(user.avatar)}" title="{user.name}"/>
  <div>
    <h2>{user.name}</h2>
    <p>@{user.username}</p>
    <small>{user.userType}</small>
  </div>
</section>
