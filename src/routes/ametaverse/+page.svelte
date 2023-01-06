<script lang="ts">
    import type { PageData } from './$types';

    import smolAmeVR from "$lib/assets/smol-ame-vr.png";
    import smolVerse from "$lib/assets/smolverse.png";

    const smolVerseURL = "https://vrchat.com/home/world/wrld_99e63438-1228-4b38-a005-81f6b91ef072";
    
    export let data: PageData;
</script>

<div class="w-screen bg-primary text-accent space-y-6 py-6">
    <h1 class="text-center text-5xl font-bold font-norwester">Ametaverse</h1>
    <img src={smolAmeVR} alt="Smol Ame VR by Walfiee" class="max-w-xs max-h-52 mx-auto" />
    <p class="mx-5"><strong>Ametaverse</strong> sounds familiar, but is strange at the same time. The Ametaverse is a limitless world of possibility, offering endless opportunities for creativity and self-expression. Through the Ametaverse, we can experience and participate in virtual worlds that push the boundaries of what we thought was possible. It is a place where <strong>anyone can be Ame</strong>!
    <br>
        Please watch the official announcement keynote from our CEO below.
    </p>
    <div class="sm:mx-12 md:mx-60 xl:mx-96 mx-0 shadow-md">
        <iframe class="w-full h-full aspect-video" width="720" height="480" src="https://www.youtube.com/embed/umOghkJvrpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <h2 class="text-center text-4xl font-bold font-norwester">Worlds</h2>
    <h3 class="text-center text-3xl font-bold font-norwester pb-4 mb-4">Smolverse</h3>

    <a href={smolVerseURL}>
        <img src={smolVerse} alt="Smolverse Preview" class="shadow-md mx-auto hover:scale-105 transition transform" />
    </a>

    <div class="mx-auto text-center">
        <a role="button" class="btn btn-secondary" href={smolVerseURL}>
            Visit Now
        </a>
    </div>

</div>
