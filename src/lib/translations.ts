import i18n from "sveltekit-i18n";
import lang from "./lang/lang.json";
import localizationIndex from "./lang/localizationIndex.json";

type Locale = keyof typeof lang;

type SyncTranslationsObject = {
    [langcode: string]: {lang: typeof lang},
}

type AsyncLocaleLoader = {
    locale: Locale,
    key: string,
    routes?: string[],
    loader: () => Promise<object>
}

type LocaleFileDetails = {
    key: string,
    routes?: string[]
}

const syncTranslations: SyncTranslationsObject = {};
const asyncTranslations: AsyncLocaleLoader[] = [];

Object.keys(lang).forEach(langcode => {
    syncTranslations[langcode] = { lang };
    localizationIndex.forEach((localeFileDetails: LocaleFileDetails) => {
        const { key, routes } = localeFileDetails;
        const loader: AsyncLocaleLoader = {
            locale: langcode as Locale,
            key: key,
            routes: routes,
            loader: async () => (
                await import(`./lang/${langcode}/${key}.json`)
            ).default,
        };
        asyncTranslations.push(loader)
    });
});

/** @type {import("sveltekit-i18n").Config} */
const config = ({
    loaders: asyncTranslations,
    translations: syncTranslations
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);