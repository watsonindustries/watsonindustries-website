<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    import { t } from "$lib/translations";
    import PageTitle from "$lib/PageTitle.svelte";
    import { parse } from "marked";
</script>

<PageTitle key="privacy.pagename" />

<div class="bg-primary">
    <div class="flex flex-col mx-8 md:mx-36 lg:mx-72 xl:mx-96 text-accent pb-5">
        <h1 class="text-5xl text-center my-2 mt-2 font-norwester py-4">{$t("privacy.header")}</h1>
        <p class="my-2 text-xl text-center [&>p>a]:underline">
            {$t("privacy.tagline")}
            <img src="https://1.bp.blogspot.com/-8_iInJA-VGo/UgSMUzbH8tI/AAAAAAAAXBk/rfI8OGB16n8/s400/sweets_cookie.png" class="mx-auto my-4" alt={$t("privacy.cookieimage.alttext")} />
            {@html parse($t("privacy.description"))}
        </p>
    </div>
</div>

