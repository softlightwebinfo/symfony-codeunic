<style lang="scss">
  @import "FormLoading";
</style>
<script lang="ts">
    import { goto, stores } from "@sapper/app";
    import { auth } from "../../stores/auth";
    import { setCookie } from "../../functions/cookie";
    import { AuthService } from "../../services/AuthService";

    const {session} = stores();

    let userForm = {
        email: "admin@admin.com",
        password: "123456789",
    };

    let fail = false;
    let loader = false;

    const onSubmit = async () => {
        fail = false;
        loader = true;
        AuthService.Auth(userForm)
            .then(rs => rs.json())
            .then(rs => {
                if (!rs.token) {
                    fail = true;
                    $session.authenticated = false;
                    $auth.isLogin = false;
                    return;
                }
                $auth.isLogin = true;
                $auth.user = rs.user;
                $auth.id = rs.user.id;
                $auth.image = "Lion.gif";
                fail = false;
                $session.token = rs.token;
                $session.user = $auth;
                $session.authenticated = true;
                setCookie("user", JSON.stringify($session));
                goto("/", {});
            });
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
          <input bind:value={userForm.email} id="email" placeholder="Email" type="email">
          <input bind:value={userForm.password} id="password" placeholder="Password" type="password">
          <button class:charge={loader} class:submit={!loader} type="submit"></button>
        </form>
      </div>
    </div>
  </div>
</div>
