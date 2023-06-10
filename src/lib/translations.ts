import i18n from "sveltekit-i18n";
import lang from "./lang/lang.json";

interface TranslationsObject {
    [langcode: string]: {lang: typeof lang},
}

const syncTranslations: TranslationsObject = {};

Object.keys(lang).forEach(langcode => {
    syncTranslations[langcode] = { lang };
});

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
    translations: syncTranslations
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);