<script lang="ts">
    import type { PageData } from "./$types";

    import watsonIndustriesLogo from "$lib/logos/watson-industries-dark.png";

    export let data: PageData;
	
	import { t } from '$lib/translations';
	const pageTitle = $t(
		"common.sitetitle",
		{
			sitename: $t("common.watsonindustries"),
			pagename: $t("about.pagename")
		} as any // TS moment
	);
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<div class="w-screen bg-primary text-accent space-y-6 py-6">
    <h1 class="text-center text-5xl font-bold font-norwester">{$t("about.header")}</h1>
    <div class="px-4">
        <img
            src={watsonIndustriesLogo}
            alt={$t("about.watsonindustrieslogo.alttext")}
            class="sm:max-w-4xl md:max-w-2xl xl:max-w-6xl max-h-80 max-w-screen mx-auto shadow-md rounded"
        />
    </div>

    <div class="mx-8 sm:mx-80 md:mx-32 text-xl">
        <p>
            <br />
            Watson Industries was founded on
            <strong>Amelia's Birthday, January 6th</strong>, and is the
            embodiment of the best parts of Ame and TeaMates and Investigators:
        </p>
        <ul class="list-disc px-6 my-4">
            <li>creativity</li>
            <li>talent</li>
            <li>innovation</li>
            <li>humor</li>
        </ul>
        <p>
            The website is a living, non-profit open source project and is open
            to contributions.
        </p>
        <br />
        WatsonIndustries.live is a fan project dedicated to
        <a
            href="https://hololive.hololivepro.com/en/talents/watson-amelia/"
            class="underline">Amelia Watson</a
        >
        of HololiveEN and is not associated with Cover Corp or Hololive Productions
        in any way. The project falls under the
        <a href="https://en.hololive.tv/terms" class="underline"
            >Fan Work Guidelines</a
        >.
    </div>

    <h2 class="text-center text-4xl font-bold font-norwester">
        Want your content featured here?
    </h2>
    <p class="text-center mx-8 text-xl">
        A process will come soon, for now you can simply DM @DaniruKun on
        Twitter.
    </p>
</div>
