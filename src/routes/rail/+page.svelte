<script lang="ts">
    import type { PageData } from './$types';
    import {Icon} from '@steeze-ui/svelte-icon';
    import {ArrowDown} from '@steeze-ui/heroicons';
    
    export let data: PageData;
</script>

<div class="bg-primary py-6 text-accent space-y-6">
    <h1 class="text-center text-5xl font-bold font-norwester">Watson Railways</h1>
    <p class="mx-5">Watson Railways is the leading industry railway builder in Minecraft, the Ametaverse, and theme park projects. With a team of experienced engineers and a passion for innovation, we are committed to delivering high-quality rail systems that exceed the expectations of our clients. Whether you need a complex network of tracks in Minecraft, a futuristic transportation system in the Ametaverse, or a thrilling roller coaster in a theme park, Watson Railways has the skills and expertise to bring your vision to life.
        <br><br>
    Please see our numerous successful projects below.
    </p>
    <Icon src={ArrowDown} size="24px" theme="solid" class="mx-auto"/>
</div>

<div class="sketchfab-embed-wrapper h-screen bg-accent text-primary"> 
    <iframe class="w-screen h-3/4" title="Ame Waits for the Train Home" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3add46c79d624f34b144b3391f6c54da/embed?dnt=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px;"> <a href="https://sketchfab.com/3d-models/ame-waits-for-the-train-home-3add46c79d624f34b144b3391f6c54da?utm_medium=embed&utm_campaign=share-popup&utm_content=3add46c79d624f34b144b3391f6c54da" target="_blank" style="font-weight: bold;"> Ame Waits for the Train Home </a> by <a href="https://sketchfab.com/priichu?utm_medium=embed&utm_campaign=share-popup&utm_content=3add46c79d624f34b144b3391f6c54da" target="_blank" style="font-weight: bold;"> Priichu </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3add46c79d624f34b144b3391f6c54da" target="_blank" style="font-weight: bold;">Sketchfab</a></p>
</div>