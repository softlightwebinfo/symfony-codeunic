<script>
  import FormLogin from "../FormLogin/FormLogin.svelte";
  import timer from "../../stores/timer";
  import {leadingZerosHours, leadingZerosMinutes, leadingZerosSeconds} from "../../functions/leadingZeros";

  const clock = timer({interval: 1000})
</script>
<style lang="scss">
  @import "PageLogin";
</style>
<div class="content">
  <header>
    <nav id="menu-dx-login">
      <ul>
        <li class="wireless"></li>
        <li class="time">
          <ul>
            <li class="hours">{leadingZerosHours($clock)}</li>
            <li class="point">:</li>
            <li class="min">{leadingZerosMinutes($clock)}</li>
            <li class="point">:</li>
            <li class="min">{leadingZerosSeconds($clock)}</li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</div>
<div class="logo"></div>
<FormLogin/>
