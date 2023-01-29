<script lang="ts">
    import type { LayoutData } from "./$types";
    import "../app.css";

    import { ameDokoURL, watsonIndustriesGithubURL, watsonIndustriesTwitterURL } from "../const";

    import { Github, Twitter } from "@steeze-ui/simple-icons";
    import { Icon } from "@steeze-ui/svelte-icon";
    import {MetaTags} from 'svelte-meta-tags';

    import watsonIndustriesLightLogo from "$lib/logos/watson-industries-landscape-light.png";

    import Moustache from "$lib/Moustache.svelte";

    export let data: LayoutData;
</script>

<MetaTags
  openGraph={{
    type: 'website',
    url: 'https://watsonindustries.live',
    title: 'Watson Industries',
    description: "Watson Industries pushes the limits of what's possible in rail, ametaverse, NFATs, Artificial Intelligence, groundpounding, and even time travel.",
    images: [
      {
        url: watsonIndustriesLightLogo,
        width: 1020,
        height: 600,
        alt: 'Watson Industries Light Logo'
      }
    ]
  }}
/>

<div class="navbar bg-neutral">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    /></svg
                >
            </label>
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li><a href="/">Homepage</a></li>
                <li><a href="/rail">Rail</a></li>
                <li><a href="/ametaverse">Ametaverse</a></li>
                <li><a href={ameDokoURL}>AmeDoko App</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl text-info" href="/">
            <Moustache />
        </a>
    </div>
    <div class="navbar-end">
        <a
            type="button"
            href={watsonIndustriesGithubURL}
            class="btn btn-ghost btn-circle"
        >
            <Icon
                src={Github}
                size="24px"
                theme="mini"
                class="fill-primary h-5 w-5"
            />
        </a>
        <a
            type="button"
            href={watsonIndustriesTwitterURL}
            class="btn btn-ghost btn-circle"
        >
            <Icon
                src={Twitter}
                size="24px"
                theme="mini"
                class="fill-primary h-5 w-5"
            />
        </a>
    </div>
</div>

<slot />

<footer class="footer p-10 bg-neutral text-neutral-content">
    <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover" href="/rail">Rail</a>
        <a class="link link-hover" href="/ametaverse">Ametaverse</a>
        <!-- <a class="link link-hover" href="/construction" >Construction</a> -->
        <!-- <a class="link link-hover" href="/nfat" >NFATs</a> -->
        <!-- <a class="link link-hover" href="/ai" >AI</a> -->
        <a class="link link-hover" href={watsonIndustriesGithubURL}>Apps</a>
    </div>
    <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover" href="/about">About</a>
        <!-- <a class="link link-hover" href="/contact" >Contact</a> -->
        <a class="link link-hover" href="/credits">Credits</a>
    </div>
    <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover" href="/privacy">Privacy & Cookie policy</a>
    </div>
</footer>
