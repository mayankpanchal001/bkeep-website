import LenisProvider from "@/components/LenisProvider";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
});

// Google Sans Flex is loaded via link tag in head section

export const metadata: Metadata = {
  metadataBase: new URL("https://bkeep.ca"),
  title: "BKEEP - Business Advisory Services",
  description:
    "Drive Strategic Growth with comprehensive business advisory services. From succession planning to mergers and acquisitions, we provide the financial expertise to support your business at every stage.",
  keywords:
    "business advisory services, financial advisory, assurance services, tax advisory, business consulting, succession planning, mergers and acquisitions, financial planning, business strategy, corporate advisory",
  authors: [{ name: "BKEEP" }],
  alternates: {
    canonical: "https://bkeep.ca",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" }, // Add this line for favicon.ico
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "BKEEP",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "BKEEP - Business Advisory Services",
    description:
      "Drive Strategic Growth with comprehensive business advisory services. From succession planning to mergers and acquisitions, we provide the financial expertise to support your business at every stage.",
    type: "website",
    locale: "en_CA",
    url: "https://bkeep.ca",
    siteName: "BKEEP",
    images: [
      {
        url: "https://bkeep.ca/og-image.png",
        width: 1200,
        height: 630,
        alt: "BKEEP - Professional Business Advisory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BKEEP - Business Advisory Services",
    description:
      "Drive Strategic Growth with comprehensive business advisory services. From succession planning to mergers and acquisitions, we provide the financial expertise to support your business at every stage.",
    images: ["https://bkeep.ca/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />

        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdn.mouseflow.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdn.mouseflow.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="https://cal.com" />

        {/* Lazy load third-party scripts after page interaction or timeout */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            function loadThirdPartyScripts() {
              // Load Mouseflow
              window._mfq = window._mfq || [];
              var mf = document.createElement("script");
              mf.type = "text/javascript";
              mf.defer = true;
              mf.src = "//cdn.mouseflow.com/projects/43683455-25c7-405c-9db8-d437d994d92c.js";
              document.getElementsByTagName("head")[0].appendChild(mf);

              // Load Ahrefs
              var ahrefs = document.createElement("script");
              ahrefs.src = "https://analytics.ahrefs.com/analytics.js";
              ahrefs.setAttribute("data-key", "NrjRuiFnNQ/lhtAyouze1w");
              ahrefs.async = true;
              document.getElementsByTagName("head")[0].appendChild(ahrefs);

              // Load GTM
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THRWXPPS');
            }

            // Load scripts after user interaction or after 3 seconds
            var scriptLoaded = false;
            function loadScriptsOnce() {
              if (!scriptLoaded) {
                scriptLoaded = true;
                loadThirdPartyScripts();
              }
            }

            // Load on first interaction
            ['mousedown', 'touchstart', 'scroll', 'keydown'].forEach(function(event) {
              window.addEventListener(event, loadScriptsOnce, { once: true, passive: true });
            });

            // Fallback: load after 3 seconds if no interaction
            setTimeout(loadScriptsOnce, 3000);
          `,
          }}
        />
      </head>
      <body className={`${ebGaramond.variable} font-sans`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
