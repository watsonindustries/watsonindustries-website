<script lang="ts">
    import type { LayoutData } from "./$types";
    import "../app.css";

    import {
        ameDokoURL,
        watsonIndustriesGithubURL,
        watsonIndustriesTwitterURL,
    } from "../const";

    import { Github, Twitter } from "@steeze-ui/simple-icons";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { MetaTags } from "svelte-meta-tags";

    import Moustache from "$lib/Moustache.svelte";

    export let data: LayoutData;

    import { t } from "$lib/translations";
</script>

<MetaTags
    openGraph={{
        type: "website",
        url: "https://watsonindustries.live",
        title: "Watson Industries",
        description:
            "Watson Industries pushes the limits of what's possible in rail, ametaverse, NFATs, Artificial Intelligence, groundpounding, and even time travel.",
        images: [
            {
                url: data.thumbnailImgURL,
                width: 1020,
                height: 600,
                alt: "Watson Industries Light Logo",
            },
        ],
    }}
    additionalMetaTags={[
        {
            property: "og:image:secure_url",
            content: data.thumbnailImgURL,
        },
    ]}
/>

<div class="navbar bg-neutral">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" class="btn btn-ghost btn-circle">
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
            </div>
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li><a href="/">{$t("layout.header.menu.home")}</a></li>
                <li><a href="/rail">{$t("layout.header.menu.watsonrailways")}</a></li>
                <li><a href="/ametaverse">{$t("layout.header.menu.ametaverse")}</a></li>
                <li><a href={ameDokoURL}>{$t("layout.header.menu.amedoko")}</a></li>
                <li><a href="/about">{$t("layout.header.menu.about")}</a></li>
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
        <span class="footer-title">{$t("layout.footer.services.header")}</span>
        <a class="link link-hover" href="/rail">{$t("layout.footer.services.watsonrailways")}</a>
        <a class="link link-hover" href="/ametaverse">{$t("layout.footer.services.ametaverse")}</a>
        <a class="link link-hover" href={ameDokoURL}>{$t("layout.footer.services.amedoko")}</a>
        <!-- <a class="link link-hover" href="/construction" >Construction</a> -->
        <!-- <a class="link link-hover" href="/nfat" >NFATs</a> -->
        <!-- <a class="link link-hover" href="/ai" >AI</a> -->
    </div>
    <div>
        <span class="footer-title">{$t("layout.footer.company.header")}</span>
        <a class="link link-hover" href="/about">{$t("layout.footer.company.about")}</a>
        <!-- <a class="link link-hover" href="/contact" >Contact</a> -->
        <a class="link link-hover" href="/credits">{$t("layout.footer.company.credits")}</a>
        <a class="link link-hover" href={watsonIndustriesGithubURL}>{$t("layout.footer.company.github")}</a>
    </div>
    <div>
        <span class="footer-title">{$t("layout.footer.legal.header")}</span>
        <a class="link link-hover" href="/privacy">{$t("layout.footer.legal.privacy")}</a>
    </div>
</footer>
