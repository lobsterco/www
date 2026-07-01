import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-host both faces via next/font so they preload and get a metric-adjusted
// fallback — the swap from the fallback font then causes no reflow or visible
// pop on load.
const fraunces = localFont({
    src: [
        { path: "../public/fonts/fraunces.woff2", weight: "300 600", style: "normal" },
        { path: "../public/fonts/fraunces-italic.woff2", weight: "300 600", style: "italic" },
    ],
    variable: "--font-fraunces",
    // optional = no swap-pop; the hero is also held hidden until fonts load
    display: "optional",
    fallback: ["Georgia", "Times New Roman", "serif"],
});

const plexMono = localFont({
    src: [
        { path: "../public/fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
        { path: "../public/fonts/ibm-plex-mono-600.woff2", weight: "600", style: "normal" },
    ],
    variable: "--font-mono",
    display: "optional",
    fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

const DESCRIPTION =
    "Lobster Computer is an engineering studio specializing in the harmony of intelligence, complex systems, and usability.";

export const metadata: Metadata = {
    metadataBase: new URL("https://lobstercomputer.com"),
    title: { default: "Lobster Computer", template: "%s · Lobster Computer" },
    description: DESCRIPTION,
    applicationName: "Lobster Computer",
    keywords: ["Lobster Computer", "engineering studio", "product engineering", "intelligent systems", "software design"],
    authors: [{ name: "Lobster Computer" }],
    creator: "Lobster Computer",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "/",
        siteName: "Lobster Computer",
        title: "Lobster Computer — obsessed engineering",
        description: DESCRIPTION,
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Lobster Computer — obsessed engineering" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lobster Computer — obsessed engineering",
        description: DESCRIPTION,
        images: ["/twitter-image.png"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: {
        icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
        apple: [{ url: "/apple-icon.png" }],
    },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`anim ${fraunces.variable} ${plexMono.variable}`}>
            <body>
                {/* reveal the hero once fonts are loaded (so it never shows the
                    fallback then pops); 2.5s safety timeout, and a no-JS fallback */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: "document.fonts&&document.fonts.ready?document.fonts.ready.then(function(){document.documentElement.classList.add('fonts-ready')}):document.documentElement.classList.add('fonts-ready');setTimeout(function(){document.documentElement.classList.add('fonts-ready')},2500)",
                    }}
                />
                <noscript>
                    <style dangerouslySetInnerHTML={{ __html: ".anim h1 .w{opacity:1!important;animation:none!important}" }} />
                </noscript>
                {children}
            </body>
        </html>
    );
}
