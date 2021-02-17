<style lang="scss">
  @import "AccessButton";
</style>
<script>
  import {stores} from '@sapper/app';

  const {session} = stores();
  export let label;
  export let type;
  export let icon;

  $: imageIcon = () => {
    switch (type) {
      case "image": {
        return `/users/${$session.user.id}/${icon}`;
      }
      case "folder":{
        return "/images/icons/Folders-User-Generic.png";
      }
      case "pdf":{
        return "/images/icons/Files-Types-Adobe-Photoshop.png";
      }
    }
  }
</script>

<article >
  <img alt="{label}" src="{imageIcon()}" title="{label}">
  <p>{label}</p>
</article>
