<script type="ts">
    import {base} from "$app/paths";

    import * as processed from "$lib/docs/processor/processed";
    import ClassViewer from "./ClassViewer.svelte";
    import StyledItem from "./StyledItem.svelte";

    import klass_src from "$lib/resource/class.webp";
    import type { Class, Enum } from "$lib/docs/rewrite_docs_typings";
import { comparer } from "$lib/docs/processor/processed";

    let sortedClasses: Class[];
    let sortedEnums: Enum[];

    $: sortedClasses = Object.values(processed.relevantTypes).sort(comparer);
    $: sortedEnums = Object.values(processed.enums).sort(comparer);
</script>

<div class="sidebar-viewer">
    <span class="tab">Global Objects</span>

    <div class="fields-container">
        <ClassViewer klass={processed.globalType}/>
    </div>

    <span class="tab">Miscellaneous Types</span>

    <div class="fields-container">
        {#each sortedClasses as value}
            <StyledItem href={base + "#" + value.name} src={klass_src}>{value.name}</StyledItem>
        {/each}
    </div>

    <span class="tab">Miscellaneous Enums</span>

    <div class="fields-container">
        {#each sortedEnums as value}
            <StyledItem href={base + "#" + value.name} src={klass_src}>{value.name}</StyledItem>
        {/each}
    </div>
</div>

<style>
    .fields-container {
        padding: 5px;
        background-color: #eeeeee;
    }

    .sidebar-viewer {
        color: black;
    }

    .tab {
        background-color: #cccccc;
        padding: 5px;
        display: block;

        text-align: center;

        font-weight: 800;
    }

    @media (prefers-color-scheme: dark) {
        .fields-container {
            padding: 5px;
            background-color: #222222;
        }

        .tab {
            background-color: #999999;
        }
    }
</style>