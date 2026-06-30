import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";

// Self-host Fraunces via next/font so it preloads and gets a metric-adjusted
// fallback — the swap from the fallback serif then causes no reflow (no CLS).
const fraunces = localFont({
    src: [
        { path: "../public/fonts/fraunces.woff2", weight: "300 600", style: "normal" },
        { path: "../public/fonts/fraunces-italic.woff2", weight: "300 600", style: "italic" },
    ],
    variable: "--font-fraunces",
    display: "swap",
    fallback: ["Georgia", "Times New Roman", "serif"],
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
        <html lang="en" className={`anim ${fraunces.variable}`}>
            <body>{children}</body>
        </html>
    );
}
