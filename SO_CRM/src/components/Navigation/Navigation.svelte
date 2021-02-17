<script>
  import Avatar from "../Avatar/Avatar.svelte";
  import {stores} from "@sapper/app";
  import timer from "../../stores/timer";
  import {
    leadingZeros,
    leadingZerosHours,
    leadingZerosMinutes,
    leadingZerosSeconds
  } from "../../functions/leadingZeros";
  import {apps} from "../../stores/apps";
  import AppItem from "../AppItem/AppItem.svelte";

  const {session} = stores();
  const clock = timer({interval: 1000})
</script>
<style lang="scss">
  @import "Navigation";
</style>
<nav>
  <div class="apps">
    {#each Object.entries($apps.apps) as [key, item]}
      <AppItem {...item} key="{key}"/>
    {/each}
  </div>
  <div class="info">
    <span>
      {leadingZerosHours($clock)}:
      {leadingZerosMinutes($clock)}:
      {leadingZerosSeconds($clock)}
    </span>
    <span>
      {$clock.getDate()}/
      {leadingZeros($clock.getMonth() + 1)}
    </span>
    <Avatar
      image="images/{$session.user.image}"
      title="{$session.user.username}"
    />
  </div>
</nav>
