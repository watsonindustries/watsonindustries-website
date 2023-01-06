<script>
	import {watsonIndustriesGithubURL} from '../const';
	import PartnerLogo from '$lib/PartnerLogo.svelte';

	import takoEatsLogo from "$lib/logos/tako-eats.png";
	import kfpLogo from "$lib/logos/kfp.png";
	import uberSheepLogo from "$lib/logos/uber-sheep-dark.png";

	import amechibi from "$lib/assets/amechibi.png";
	import opensourceLove from "$lib/assets/wi-loves-open-source.png";
</script>

<svelte:head>
  <title>Watson Industries - Home</title>
</svelte:head>

<div class="flex flex-col">

	<div class="hero bg-primary py-20">
		<div class="hero-content text-center text-accent">
			<div class="max-w-md mx-auto">
				<h1 class="text-5xl font-bold font-norwester my-3">Watson Industries</h1>
				<p class="py-6 text-lg">Innovation knows no bounds at Watson Industries, where we push the limits of what's possible in rail, ametaverse, NFATs, Artificial Intelligence, groundpounding, and even time travel. Join us on the cutting edge of progress.</p>
				<span class="text-center">
					<a type="button" class="btn btn-secondary" href="https://github.com/watsonindustries">Join Us</a>
				</span>
			</div>
		</div>
	</div>
</div>

<div class="hero bg-accent py-20">
  <div class="hero-content flex-col lg:flex-row">
    <img src={amechibi} width="783" class="max-w-screen sm:max-w-xs md:max-w-sm rounded-lg shadow-2xl hover:scale-105 transform transition bg-primary p-9" alt="Watson Railways logo" />
    <div class="text-primary px-5">
      <h1 class="text-5xl font-bold font-norwester">Watson Railways</h1>
      <p class="py-6 text-lg">Experience the future of transportation with Watson Railways, a subsidiary of Watson Industries. With cutting-edge technology and a dedication to safety and efficiency, we are revolutionizing the way we travel by rail.</p>
      <a type="button" class="btn btn-primary" href="/rail">Learn more</a>
    </div>
  </div>
</div>

<div class="hero bg-primary py-20">
  <div class="hero-content text-center text-accent">

    <div>
			<div class="mx-auto">
				<h1 class="text-5xl font-bold font-norwester">Our Partners</h1>
				<p class="py-6 text-lg">We would be nothing without our amazing partners, who supply us with nutrition and energy to keep pounding those grounds.</p>
			</div>
      
			<div class="flex md:flex-row flex-col sm:space-x-6 xs:space-y-7">
				<PartnerLogo url="https://youtu.be/wSmNK842gs8?t=961" logo={takoEatsLogo} alt="Tako Eats logo" />
				<PartnerLogo url="https://uber-sheep.com" alt="Uber Sheep logo by totangtotan" logo={uberSheepLogo} />
				<PartnerLogo url="https://vivalakiara.com" alt="KFP logo with black background" logo={kfpLogo} />
			</div>	
    </div>

  </div>
</div>

<div class="hero bg-accent py-20">
  <div class="hero-content flex-col lg:flex-row-reverse text-primary">
    <img src={opensourceLove} width="470" height="582" class="max-w-screen md:max-w-sm rounded-lg shadow-2xl hover:scale-105 transform transition" alt="Watson Industries loves open source" />
    <div>
      <h1 class="text-5xl font-bold font-norwester">Open Source</h1>
      <p class="py-6 text-lg">At Watson Industries, we believe in the power of collaboration and sharing knowledge. That's why we make our projects open source, allowing others to contribute, learn, and innovate with us.</p>
      <a type="button" class="btn btn-primary" href={watsonIndustriesGithubURL}>Browse Projects</a>
    </div>
  </div>
</div>