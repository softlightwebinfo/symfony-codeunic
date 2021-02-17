<style lang="scss">
  @import "Windows";
</style>
<script lang="ts">
    import { apps } from "../../stores/apps";
    import { filterObject } from "../../functions/libs/objectFilter";
    import Window from "../Window/Window.svelte";
    import AccessButton from "../AccessButton/AccessButton.svelte";
    import { grid } from "../../events/grid";

    $: appsWindows = filterObject($apps.apps, "open", true);
    let accessList = [
        {
            label: "Captura de pantalla",
            type: "image",
            icon: "documents/unnamed.jpg",
            path: "desktop",
        },
        {
            label: "Libro JS",
            type: "pdf",
            icon: "documents/jsLibre.pdf",
            path: "desktop",
        },
        {
            label: "Captura de pantalla",
            type: "image",
            icon: "documents/unnamed.jpg",
            path: "desktop",
        },
        {
            label: "Web design",
            type: "pdf",
            icon: "documents/webDesign.pdf",
            path: "desktop",
        },
        {
            label: "Captura de pantalla",
            type: "image",
            icon: "documents/unnamed.jpg",
            path: "desktop",
        },
        {
            label: "Captura de pantalla",
            type: "image",
            icon: "documents/unnamed.jpg",
            path: "desktop",
        },
        {
            label: "Captura de pantalla",
            type: "image",
            icon: "documents/unnamed.jpg",
            path: "desktop",
        },
        {
            label: "images",
            type: "folder",
            icon: "documents/unnamed.jpg",
            path: "desktop",
            files: [
                {
                    label: "Captura de pantalla",
                    type: "image",
                    icon: "documents/unnamed.jpg",
                    path: "desktop/images",
                    fileName: "/test.jpg"
                },
                {
                    label: "Captura de pantalla",
                    type: "image",
                    icon: "documents/unnamed.jpg",
                    path: "desktop/images",
                    fileName: "/test.jpg"
                },
                {
                    label: "Captura de pantalla",
                    type: "image",
                    icon: "documents/unnamed.jpg",
                    path: "desktop/images",
                    fileName: "/test.jpg"
                }
            ]
        },
    ];
</script>
<section>
  <div class="access" use:grid>
    {#each accessList as access}
      <AccessButton {...access}/>
    {/each}
  </div>
  <div class="apps">
    {#each Object.entries(appsWindows) as [key, item], index}
      <Window
        index={index + 2}
        appName="{key}"
      />
    {/each}
  </div>
</section>
