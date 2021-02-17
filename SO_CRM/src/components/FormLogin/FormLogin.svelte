<style lang="scss">
  @import "FormLoading";
</style>
<script>
  import {goto, stores} from "@sapper/app";
  import {auth} from "../../stores/auth";
  import {setCookie} from "../../functions/cookie";

  const {session} = stores();

  let userForm = {
    username: "admin",
    password: "1234",
  };

  let fail = false;
  let loader = false;

  const onSubmit = async () => {
    const user = "admin";
    const password = "1234";
    fail = false;
    loader = true;
    setTimeout(() => {
      $auth.isLogin = true;
      $auth.username = userForm.username;
      $auth.id = 1;
      fail = false;
      $session.token = "token";
      $session.user = $auth;
      $session.authenticated = true;
      setCookie("user", JSON.stringify($session));
      goto("/");
    }, 500)
  }
</script>
<div class="user-avatar">
  <div id="avatar">
    <div id="cover"></div>
    <div class="ava-css">
      <img alt="" src="/images/Lion.gif">
    </div>
    <div class="logName">
      <p>Alessio Atzeni</p>
    </div>
    <div id="switch">
      <div class="validate">
        <form
          action="#page"
          class="animate__animated"
          class:animate__bounceIn={fail}
          on:submit|preventDefault={onSubmit}
        >
          <input bind:value={userForm.username} id="user" placeholder="User" type="text">
          <input bind:value={userForm.password} id="password" placeholder="Password" type="password">
          <button class:charge={loader} class:submit={!loader} type="submit"></button>
        </form>
      </div>
    </div>
  </div>
</div>
