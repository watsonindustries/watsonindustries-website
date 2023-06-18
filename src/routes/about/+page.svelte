<script lang="ts">
    import type { PageData } from "./$types";

    import watsonIndustriesLogo from "$lib/logos/watson-industries-dark.png";

    export let data: PageData;
	
	import { t } from "$lib/translations";
  import PageTitle from "$lib/PageTitle.svelte";
  import { parse } from "marked";
</script>

<PageTitle key="about.pagename" />

<div class="w-screen bg-primary text-accent space-y-6 py-6">
    <h1 class="text-center text-5xl font-bold font-norwester">{$t("about.header")}</h1>
    <div class="px-4">
        <img
            src={watsonIndustriesLogo}
            alt={$t("about.watsonindustrieslogo.alttext")}
            class="sm:max-w-4xl md:max-w-2xl xl:max-w-6xl max-h-80 max-w-screen mx-auto shadow-md rounded"
        />
    </div>

    <div class="mx-8 sm:mx-80 md:mx-32 text-xl [&>ul]:list-disc [&>ul]:px-6 [&>ul]:my-4 [&>p>a]:underline">
        {@html parse($t("about.description"))}
    </div>

    <h2 class="text-center text-4xl font-bold font-norwester">
        {$t("about.featured.header")}
    </h2>
    <p class="text-center mx-8 text-xl [&>p>a]:underline">
        {@html parse($t("about.featured.description"))}
    </p>
</div>
