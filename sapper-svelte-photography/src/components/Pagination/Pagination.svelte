<style lang="scss">
  @import "src/style/index";
  @import "Pagination";
</style>
<script lang="ts">
    import { paginate } from "../../libs/Pagination";
    import Icon from 'svelte-awesome/components/Icon.svelte'
    import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

    export let currentPage;
    export let pageRoute;
    export let per_page;
    export let total;
    const pagination = paginate(total, currentPage, per_page);
</script>
<ul class="pagination">
  {#if pagination.prev != null}
    <li>
      <a href="{pageRoute}?page={pagination.prev}">
        <Icon data="{faChevronLeft}"/>
      </a>
    </li>
  {/if}
  {#each pagination.pages as page}
    <li class:active={page == currentPage}>
      <a href="{pageRoute}?page={page}">{page}</a>
    </li>
  {/each}
  {#if pagination.next != null}
    <li>
      <a href="{pageRoute}?page={pagination.next}">
        <Icon data="{faChevronRight}"/>
      </a>
    </li>
  {/if}
</ul>
