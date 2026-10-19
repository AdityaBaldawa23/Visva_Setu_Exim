import {
  Playfair_Display,
  Inter,
  DM_Serif_Display,
  Montserrat,
  Amiri,
  Noto_Serif_Bengali,
  Noto_Serif_Sinhala,
  Noto_Sans_Arabic,
  Noto_Sans_Bengali,
  Noto_Sans_Sinhala,
} from "next/font/google";
import "./globals.css";
import LocaleSync from "@/i18n/LocaleSync";
import { LOCALES, STORAGE_KEY } from "@/i18n/config";
import Script from "next/script";

// Heading font (all scripts that DM Serif Display covers).
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

// Vietnamese heading fallback: DM Serif Display has no glyphs for
// Vietnamese tone marks (U+1EA0-1EF1), Playfair Display does.
const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Body font, previously instantiated separately in every component.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

// Script fallbacks. preload: false + unicode-range means these files are only
// downloaded when Arabic / Bengali / Sinhala characters are actually on screen.
const amiri = Amiri({ variable: "--font-amiri", subsets: ["arabic"], weight: ["400", "700"], preload: false });
const serifBn = Noto_Serif_Bengali({ variable: "--font-serif-bn", subsets: ["bengali"], preload: false });
const serifSi = Noto_Serif_Sinhala({ variable: "--font-serif-si", subsets: ["sinhala"], preload: false });
const sansAr = Noto_Sans_Arabic({ variable: "--font-sans-ar", subsets: ["arabic"], preload: false });
const sansBn = Noto_Sans_Bengali({ variable: "--font-sans-bn", subsets: ["bengali"], preload: false });
const sansSi = Noto_Sans_Sinhala({ variable: "--font-sans-si", subsets: ["sinhala"], preload: false });

const fontVariables = [dmSerif, playfair, inter, montserrat, amiri, serifBn, serifSi, sansAr, sansBn, sansSi]
  .map((f) => f.variable)
  .join(" ");

// Applies a saved non-English locale before first paint (lang/dir set, page
// briefly hidden) so returning visitors never see an English flash or an LTR jump.
const dirMap = Object.fromEntries(LOCALES.map((l) => [l.code, l.dir]));
const localeBootScript = `(function(){try{var l=localStorage.getItem(${JSON.stringify(STORAGE_KEY)});var m=${JSON.stringify(dirMap)};if(l&&l!=="en"&&m[l]){var d=document.documentElement;d.lang=l;d.dir=m[l];d.classList.add("i18n-pending");}}catch(e){}})();`;

export const metadata = {
  title: "Vishva Setu Exim",
  description: "Bridging Farms to Global Markets",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${fontVariables} h-full antialiased`}
    >
      <Script
        id="locale-boot"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: localeBootScript,
        }}
      />

      <body className="min-h-full flex flex-col font-inter bg-[#f4f2e9] text-stone-900">
        <LocaleSync />
        {children}
      </body>
    </html>
  );
}

