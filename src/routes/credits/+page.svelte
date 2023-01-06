<script lang="ts">
    import type { PageData } from './$types';

    import CreditCard from '$lib/CreditCard.svelte';

    const imageryCredits = [
        {name: 'Totangotan', credit: 'Uber Sheep Logo', url: 'https://twitter.com/totangtotan/status/1319319188129808385', buttonText: 'Twitter'},
        {name: 'Spiritsnare & Takanashi Kiara', credit: 'KFP Logo', url: 'https://twitter.com/takanashikiara/status/1393734168559898624', buttonText: 'Twitter'},
        {name: 'Walfie', credit: 'Smol Ame art', url: 'https://twitter.com/walfieee/timelines/621818256383442944', buttonText: 'Twitter'},
        {name: 'Priichu', credit: '3D Ame art', url: 'https://sketchfab.com/priichu', buttonText: 'Sketchfab'},
        {name: 'Irasutoya', credit: 'Images', url: 'https://www.irasutoya.com/', buttonText: 'Website'}
    ]

    const qaCredits = [
        {name: 'Dominik K', credit: 'Testing and feedback', url: 'https://twitter.com/Dominik_KFBeats', buttonText: 'Twitter'},
        {name: 'Moondog', credit: 'Assistance and testing', url: 'https://twitter.com/Moondog_94', buttonText: 'Twitter'},
        {name: 'PONG', credit: 'Testing and feedback', url: '', buttonText: ''}
    ]
    
    export let data: PageData;
</script>

<div class="text-center mx-auto bg-primary pb-4">
    <h1 class= "text-5xl text-accent py-4">Credits</h1>

    <h2 class="text-3xl text-accent font-bold py-4">
        Imagery
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 text-primary">
        {#each imageryCredits as credit}
            <CreditCard name={credit.name} credit={credit.credit} url={credit.url} buttonText={credit.buttonText}></CreditCard>
        {/each}
    </div>

    <h2 class="text-3xl text-accent font-bold py-4">
        Content
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 pb-5 text-primary">
        <CreditCard name="DaniruKun" credit="Development, DevOps, Design, Content" url="https://twitter.com/DaniruKun" buttonText="Twitter"></CreditCard>
        <CreditCard name="VT" credit="Research and Content Sourcing" url="https://twitter.com/vtgare" buttonText="Twitter"></CreditCard>
        <CreditCard name="Kazzy" credit="Rails RnD" url="https://twitter.com/KazumiAchimuro" buttonText="Twitter"></CreditCard>
        <CreditCard name="PlanetCobalt" credit="Minecraft worlds" url="https://www.planetcobalt.net/sdb/hololive_minecraft_world_v4.shtml" buttonText="Website"></CreditCard>
        <CreditCard name="ChatGPT by OpenAI" credit="Parts of text content" url="https://openai.com/blog/chatgpt"></CreditCard>
    </div>

    <h2 class="text-3xl text-accent font-bold py-4">
        QA and Testing
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 text-primary">
        {#each qaCredits as credit}
            <CreditCard name={credit.name} credit={credit.credit} url={credit.url} buttonText={credit.buttonText}></CreditCard>
        {/each}
    </div>
</div>
