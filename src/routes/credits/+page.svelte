<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="text-center mx-auto bg-primary">
    <h1 class= "text-5xl text-accent py-4">Credits</h1>

    <h2 class="text-3xl text-accent font-bold py-4">
        Logos
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 text-primary">
        <div class="card bg-base-100 shadow-xl mx-3">
            <div class="card-body items-center text-center">
            <h2 class="card-title">Totangotan</h2>
            <p>Uber Sheep logo</p>
            <div class="card-actions">
                <a type="button" href="https://twitter.com/totangtotan/status/1319319188129808385" class="btn btn-info">Source</a>
            </div>
            </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl mx-3">
            <div class="card-body items-center text-center">
            <h2 class="card-title">Spiritsnare & Takanashi Kiara</h2>
            <p>KFP Logo</p>
            <div class="card-actions">
                <a type="button" href="https://twitter.com/takanashikiara/status/1393734168559898624" class="btn btn-info">Source</a>
            </div>
            </div>
        </div>

    </div>

    <h2 class="text-3xl text-accent font-bold py-4">
        Content
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 pb-5 text-primary">
        <div class="card bg-base-100 shadow-xl mx-3">
            <div class="card-body items-center text-center">
            <h2 class="card-title">ChatGPT by OpenAI</h2>
            <p>Parts of text content</p>
            <div class="card-actions">
                <a type="button" href="https://openai.com/blog/chatgpt/" class="btn btn-info">Info</a>
            </div>
            </div>
        </div>
    </div>
        
    
</div>
