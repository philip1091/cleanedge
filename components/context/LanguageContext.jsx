"use client"
import { createContext, useContext, useMemo, useState } from "react";
import content from "../data/content.js"
const LanguageContext = createContext(null);

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("en");
	const contentValue =  language === "en" ? content.content_en: content.content_fr;
	const value = useMemo(() => ({contentValue, language, setLanguage}), [language]);
	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}