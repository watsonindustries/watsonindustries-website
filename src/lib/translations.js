import i18n from "sveltekit-i18n";
import languageIndex from "./lang/index.json";

/** @type {import("sveltekit-i18n").Config} */
const config = ({
    loaders: [
        {
            locale: "en",
            key: "common",
            loader: async () => (
                await import("./lang/en/common.json")
            ).default,
        },
        {
            locale: "en",
            key: "home",
            routes: ["/"],
            loader: async () => (
                await import("./lang/en/home.json")
            ).default,
        },
        {
            locale: "ja",
            key: "common",
            loader: async () => (
                await import("./lang/ja/common.json")
            ).default,
        },
        {
            locale: "ja",
            key: "home",
            routes: ["/"],
            loader: async () => (
                await import("./lang/ja/home.json")
            ).default,
        },
        {
            locale: "ko",
            key: "common",
            loader: async () => (
                await import("./lang/ko/common.json")
            ).default,
        },
        {
            locale: "ko",
            key: "home",
            routes: ["/"],
            loader: async () => (
                await import("./lang/ko/home.json")
            ).default,
        }
    ],

/*
Why do I have to do this? I can't even do this automatically because of TS
type checking. (can't upcast to `any` because this file is JS)
```js
    const syncTranslations = {};
    Object.keys(languageIndex).forEach(key => {
        syncTranslations[key] = languageIndex
    });
```
Every language should be listed in their own language,
so the native speakers can recognize it without being able to read the
currently selected language.

This is the only real good use for synchronous translations I can think of,
so why does it have to be like this?
It's even used like this in the official examples. Why?
https://github.com/sveltekit-i18n/lib/blob/b09444c66df7cf1d34852b70893b9f93d82d4cb9/examples/one-page/src/lib/translations/index.js#LL6C1-L9C5
^ In case you can't see what lines this is referencing because you don't
have the GitHub beta enabled, this is referencing lines 6-9.

If I'm doing this wrong, PLEASE tell me.
- @CenTdemeern1
*/
    translations: {
        en: languageIndex,
        ja: languageIndex,
        ko: languageIndex,
        nl: languageIndex,
        de: languageIndex,
        id: languageIndex,
        ru: languageIndex
    }
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);