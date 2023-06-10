import type { LayoutLoad } from './$types';
import { loadTranslations, locale } from '$lib/translations';

import thumbnailImg from "$lib/logos/watson-industries-landscape-light.png";

export const load = (async ({ url }) => {
	const thumbnailImgURL = new URL(thumbnailImg, url.origin).toString();

	const { pathname } = url;
	const defaultLocale = "en"; // get from cookie, user session, ...
	const initLocale = locale.get() || defaultLocale; // set default if no locale already set
	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return { thumbnailImgURL };
}) satisfies LayoutLoad;
