import type { LayoutLoad } from './$types';

import thumbnailImg from "$lib/logos/watson-industries-landscape-light.png";

export const load = (async ({ url }) => {
	const thumbnailImgURL = new URL(thumbnailImg, url.origin).toString();

	return { thumbnailImgURL };
}) satisfies LayoutLoad;