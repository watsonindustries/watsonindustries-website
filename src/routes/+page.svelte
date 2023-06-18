<script lang="ts">
	import {watsonIndustriesGithubURL} from '../const';
	import PartnerLogo from '$lib/PartnerLogo.svelte';

	import takoEatsLogo from "$lib/logos/tako-eats.png";
	import kfpLogo from "$lib/logos/kfp.png";
	import uberSheepLogo from "$lib/logos/uber-sheep-dark.png";

	import amechibi from "$lib/assets/amechibi.png";
	import opensourceLove from "$lib/assets/wi-loves-open-source.png";
	
	import { t } from "$lib/translations";
	import PageTitle from "$lib/PageTitle.svelte";
</script>

<PageTitle key="home.pagename" />

<div class="flex flex-col">
	<div class="hero bg-primary py-20">
		<div class="hero-content text-center text-accent">
			<div class="max-w-md mx-auto">
				<h1 class="text-5xl font-bold font-norwester my-3">{$t("common.watsonindustries")}</h1>
				<p class="py-6 text-lg">{$t("home.watsonindustries.description")}</p>
				<span class="text-center">
					<a type="button" class="btn btn-secondary" href="https://github.com/watsonindustries">{$t("home.watsonindustries.joinbutton.label")}</a>
				</span>
			</div>
		</div>
	</div>
</div>

<div class="hero bg-accent py-20">
  <div class="hero-content flex-col lg:flex-row">
    <img src={amechibi} width="783" class="max-w-screen sm:max-w-xs md:max-w-sm rounded-lg shadow-2xl hover:scale-105 transform transition bg-primary p-9" alt={$t("home.watsonrailways.logo.alttext")} />
    <div class="text-primary px-5">
      <h1 class="text-5xl font-bold font-norwester">{$t("home.watsonrailways.header")}</h1>
      <p class="py-6 text-lg">{$t("home.watsonrailways.description")}</p>
      <a type="button" class="btn btn-primary" href="/rail">{$t("common.learnmore")}</a>
    </div>
  </div>
</div>

<div class="hero bg-primary py-20">
  <div class="hero-content text-center text-accent">

    <div>
			<div class="mx-auto">
				<h1 class="text-5xl font-bold font-norwester">{$t("home.partners.header")}</h1>
				<p class="py-6 text-lg">{$t("home.partners.description")}</p>
			</div>
      
			<div class="flex md:flex-row flex-col sm:space-x-6 xs:space-y-7">
				<PartnerLogo url="https://youtu.be/wSmNK842gs8?t=961" alt={$t("home.partners.takoeats.logo.alttext")} logo={takoEatsLogo} />
				<PartnerLogo url="https://uber-sheep.com" alt={$t("home.partners.ubersheep.logo.alttext")} logo={uberSheepLogo} />
				<PartnerLogo url="https://vivalakiara.com" alt={$t("home.partners.kfp.logo.alttext")} logo={kfpLogo} />
			</div>	
    </div>

  </div>
</div>

<div class="hero bg-accent py-20">
  <div class="hero-content flex-col lg:flex-row-reverse text-primary">
    <img src={opensourceLove} width="470" height="582" class="max-w-screen md:max-w-sm rounded-lg shadow-2xl hover:scale-105 transform transition" alt={$t("home.opensource.image.alttext")} />
    <div>
      <h1 class="text-5xl font-bold font-norwester">{$t("home.opensource.header")}</h1>
      <p class="py-6 text-lg">{$t("home.opensource.description")}</p>
      <a type="button" class="btn btn-primary" href={watsonIndustriesGithubURL}>{$t("home.opensource.browsebutton.label")}</a>
    </div>
  </div>
</div>