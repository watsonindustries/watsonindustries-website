<script lang="ts">
	export let url: string, logo: string, alt: string;
</script>

<div class="md:mx-2 my-3 mx-auto shrink">
	<a href={url}>
		<img src={logo} width="300" height="900" alt={alt} />
	</a>
</div>