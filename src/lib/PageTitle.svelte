<script lang="ts">
    import { t } from "$lib/translations"
    
    export let key;
    
    const pageTitle = $t(
        "common.sitetitle",
        {
            sitename: $t("common.watsonindustries"),
            pagename: $t(key)
        } as any // TS moment
    );
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
