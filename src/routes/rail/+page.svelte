<script lang="ts">
    import type { PageData } from './$types';
    import {Icon} from '@steeze-ui/svelte-icon';
    import {ArrowDown} from '@steeze-ui/heroicons';

    import hyperloopMap from "$lib/assets/hyperloop.png";
    
    export let data: PageData;
</script>

<svelte:head>
  <title>Watson Railways</title>
</svelte:head>

<div class="bg-primary py-6 text-accent space-y-6">
    <h1 class="text-center text-5xl font-bold font-norwester">Watson Railways</h1>
    <p class="mx-5 text-lg sm:mx-60">Watson Railways is <i>the</i> leading industry railway builder in Minecraft, the Ametaverse, and theme park projects. With a team of experienced engineers and a passion for innovation, we are committed to delivering <strong>high-quality rail systems</strong> that exceed the expectations of our clients. Whether you need a complex network of tracks in Minecraft, a futuristic transportation system in the Ametaverse, or a thrilling roller coaster in a theme park, Watson Railways has the skills and expertise to bring your vision to life.
        <br><br>
    Please see our numerous successful projects below.
    </p>
    <Icon src={ArrowDown} size="24px" theme="solid" class="mx-auto text-accent"/>
</div>

<div class="sketchfab-embed-wrapper h-screen bg-accent text-primary pb-3">
    <h2 class="text-center text-4xl font-bold font-norwester py-5">Train Stops</h2>
    <iframe class="w-screen h-5/6" title="Ame Waits for the Train Home" frameborder="0" allowfullscreen webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3add46c79d624f34b144b3391f6c54da/embed?dnt=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px;"> <a href="https://sketchfab.com/3d-models/ame-waits-for-the-train-home-3add46c79d624f34b144b3391f6c54da?utm_medium=embed&utm_campaign=share-popup&utm_content=3add46c79d624f34b144b3391f6c54da" target="_blank" style="font-weight: bold;"> Ame Waits for the Train Home </a> by <a href="https://sketchfab.com/priichu?utm_medium=embed&utm_campaign=share-popup&utm_content=3add46c79d624f34b144b3391f6c54da" target="_blank" style="font-weight: bold;"> Priichu </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3add46c79d624f34b144b3391f6c54da" target="_blank" style="font-weight: bold;">Sketchfab</a></p>
    <Icon src={ArrowDown} size="24px" theme="solid" class="mx-auto text-primary"/>
</div>

<div class="bg-primary text-accent space-y-5 py-5 px-5">
    <h2 class="text-center text-4xl font-bold font-norwester">Hyperloop</h2>
    <p class="mx-5 text-lg sm:mx-60">An innovative form of transport between far away places in worlds like Minecraft. With a budget of nearly <strong>one Amellion Watbucks</strong>, it was the largest Watson Railways project to date. 
        Watson Hyperloop connects far away places such as PPP with central Headquarters.</p>
    <h3 class="text-center text-3xl font-bold font-norwester">Specs</h3>
    <table class="table-auto mx-5 sm:mx-auto">
        <thead>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold">In Service</td>
            <td>2020 - present</td>
          </tr>
          <tr>
            <td class="font-bold">Capacity</td>
            <td>1 per cart</td>
          </tr>
          <tr>
            <td class="font-bold">Operator</td>
            <td>Watson Railways</td>
          </tr>
          <tr>
            <td class="pr-8 font-bold">Maximum speed</td>
            <td>11 bps</td>
          </tr>
        </tbody>
    </table>
    <h3 class="text-center text-3xl font-bold font-norwester">Map</h3>
    <div>
        <img src={hyperloopMap} alt="HoloEN Minecraft Hyperloop" width="1000" height="800" class="sm:max-w-4xl md:max-w-2xl xl:max-w-6xl mx-auto shadow-md rounded" />
    </div>
    <h3 class="text-center text-3xl font-bold font-norwester">Construction</h3>
    <div class="flex flex-col">
      <div class="sm:mx-12 md:mx-60 xl:mx-96 mx-0 shadow-md">
        <iframe class="w-full h-full aspect-video" width="560" height="316" src="https://www.youtube.com/embed/bMYcS0v9lj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
</div>