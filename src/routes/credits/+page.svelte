<script lang="ts">
    import type { PageData } from './$types';

    import CreditCard from '$lib/CreditCard.svelte';
    
    export let data: PageData;
</script>

<div class="text-center mx-auto bg-primary">
    <h1 class= "text-5xl text-accent py-4">Credits</h1>

    <h2 class="text-3xl text-accent font-bold py-4">
        Logos
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 text-primary">
        <CreditCard name="Totangotan" credit="Uber Sheep logo" url="https://twitter.com/totangtotan/status/1319319188129808385" buttonText="Twitter"></CreditCard>
        <CreditCard name="Spiritsnare & Takanashi Kiara" credit="KFP Logo" url="https://twitter.com/takanashikiara/status/1393734168559898624" buttonText="Twitter"></CreditCard>
    </div>

    <h2 class="text-3xl text-accent font-bold py-4">
        Content
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 pb-5 text-primary">
        <CreditCard name="DaniruKun" credit="Development, DevOps, Design, Content" url="https://twitter.com/DaniruKun" buttonText="Twitter"></CreditCard>
        <CreditCard name="VT" credit="Research and Content Sourcing" url="https://twitter.com/vtgare" buttonText="Twitter"></CreditCard>
        <CreditCard name="Kazzy" credit="Rails RnD" url="https://twitter.com/KazumiAchimuro" buttonText="Twitter"></CreditCard>
        <CreditCard name="ChatGPT by OpenAI" credit="Parts of text content" url="https://openai.com/blog/chatgpt"></CreditCard>
    </div>
    
</div>
