<style lang="scss">
  :global(body) {
    background-color: white;
  }
</style>
<script lang="ts">
    let newUser = null;

    export let users = [...new Array(3)].map((_, index) => ({
        user: `user ${index}`,
        password: `password ${index}`,
    }));

    const onAdd = () => {
        newUser = {
            user: "",
            password: "",
        }
    }
    const onSaveUser = () => {
        users = [newUser, ...users];
        users.push(newUser)
        newUser = null;
    }
</script>

<button on:click={onAdd}>Agregar</button>

<table>
  <thead>
  <tr>
    <th>Index</th>
    <th>User</th>
    <th>Password</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody>
  {#each users as user,index}
    {#if index === 0 && newUser}
      <tr>
        <td>{users.length + 1}</td>
        <td><input type="text" bind:value={newUser.user}></td>
        <td><input type="text" bind:value={newUser.password}></td>
        <td>
          <button on:click={onSaveUser}>Save</button>
        </td>
      </tr>
    {/if}
    <tr>
      <td>{++index}</td>
      <td>{user.user}</td>
      <td>{user.password}</td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  {/each}
  </tbody>
</table>
