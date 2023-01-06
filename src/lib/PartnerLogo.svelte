<script lang="ts">
	export let url: string, logo: string, alt: string;
</script>

<div class="md:mx-2 my-3 mx-auto shrink">
	<a href={url}>
		<img src={logo}  alt={alt} class="max-h-64 shadow-md rounded-md hover:scale-110 hover:shadow-xl transition transform"/>
	</a>
</div>