import { Suspense } from "react";
import ThemeHandler from "@/components/ThemeHandler";
import ButtonsContainer from "@/components/ButtonsContainer";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://dan10ish.github.io"),
  title: "Notes | Danish",
  description:
    "Collection of study notes from B.Tech in Mechatronics Engineering - Covering Robotics, Control Systems, AI/ML, and more.",
  keywords: [
    "mechatronics notes",
    "engineering notes",
    "robotics notes",
    "control systems",
    "AI ML notes",
    "Danish",
  ],
  authors: [{ name: "Danish" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dan10ish",
    creator: "@dan10ish",
    title: "College Notes | Danish",
    description:
      "Collection of study notes from B.Tech in Mechatronics Engineering",
    images: ["/og.png"],
  },
  openGraph: {
    type: "website",
    siteName: "Danish's College Notes",
    title: "College Notes | Danish",
    description:
      "Collection of study notes from B.Tech in Mechatronics Engineering",
    url: "https://dan10ish.github.io/college",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Danish's College Notes",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        <ThemeHandler />
        <Suspense fallback={null}>
          <ButtonsContainer />
        </Suspense>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
