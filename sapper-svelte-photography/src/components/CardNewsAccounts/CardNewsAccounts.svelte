<style lang="scss">
  @import "src/style/index";
  @import "CardNewsAccounts";
</style>
<script>
    import moment from "moment";
    import Image from "../Image/Image.svelte";

    export let title;
    export let description;
    export let image;
    export let date;
    export let category;
</script>
<Image image="{image}" title="{title}"/>
<h3>{title}</h3>
<div>{moment(date).format("MMMM DD, YYYY")} • {category}</div>
<p>{description}</p>
