const dictionaries = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (localeCode: string) =>
    dictionaries[localeCode as keyof typeof dictionaries]?.() ?? dictionaries.en();