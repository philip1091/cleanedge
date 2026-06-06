import { Barlow, Barlow_Condensed } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const barlow = Barlow({
    variable: "--font-barlow",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const barlowCondensed = Barlow_Condensed({
    variable: "--font-barlow-condensed",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});


export async function generateMetadata({ params }) {
    const { lang } = await params;

    return {
        title:
            lang === "fr"
                ? "CleanExcel Services d’entretien"
                : "CleanExcel Property Services",

        description:
            lang === "fr"
                ? "Services professionnels de nettoyage commercial dans le Grand Montréal."
                : "Professional commercial cleaning services in the Greater Montreal area.",
    };
}

export default async function RootLayout({ children, params }) {
    const { lang } = await params;
    return (
        <html
            lang={lang}
            className={cn("h-full", "antialiased", barlowCondensed.variable, barlow.variable)}
        >
        <body className="min-h-full flex flex-col font-sans">
                {children}
        </body>
        </html>
    );
}