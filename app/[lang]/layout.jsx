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

    const isFr = lang === "fr";

    return {
        title: isFr
            ? "CleanExcel | Entretien commercial à Montréal"
            : "CleanExcel | Commercial Cleaning in Greater Montréal",

        description: isFr
            ? "CleanExcel offre des services professionnels d’entretien commercial, de maintenance immobilière et de conciergerie dans le Grand Montréal."
            : "CleanExcel provides professional commercial cleaning, property maintenance, and day porter services across Greater Montréal.",

        openGraph: {
            title: isFr
                ? "CleanExcel | Entretien commercial à Montréal"
                : "CleanExcel | Commercial Cleaning in Greater Montréal",
            description: isFr
                ? "Services professionnels d’entretien commercial, de maintenance immobilière et de conciergerie dans le Grand Montréal."
                : "Professional commercial cleaning, property maintenance, and day porter services across Greater Montréal.",
            url: `https://cleanexcel.ca/${lang}`,
            siteName: "CleanExcel Property Services",
            images: [
                {
                    url: "https://cleanexcel.ca/og_cleanexcel.png",
                    width: 1200,
                    height: 630,
                    alt: "CleanExcel Property Services",
                },
            ],
            locale: isFr ? "fr_CA" : "en_CA",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: isFr
                ? "CleanExcel | Entretien commercial à Montréal"
                : "CleanExcel | Commercial Cleaning in Greater Montréal",
            description: isFr
                ? "Services professionnels d’entretien commercial dans le Grand Montréal."
                : "Professional commercial cleaning services across Greater Montréal.",
            images: ["https://cleanexcel.ca/og_cleanexcel.png"],
        },
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