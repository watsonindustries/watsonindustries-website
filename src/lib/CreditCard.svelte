<script lang="ts">
    export let name: string;
    export let credit: string;
    export let url: string;
		export let buttonText = 'Link';
</script>

<div class="card bg-base-100 shadow-xl mx-3">
	<div class="card-body items-center text-center">
		<h2 class="card-title">{name}</h2>
		<p>{credit}</p>
		{#if url && url !== ''}
		<div class="card-actions">
			<a type="button" href={url} class="btn btn-info transform transition hover:scale-105">{buttonText}</a>
		</div>
		{/if}
	</div>
</div>
