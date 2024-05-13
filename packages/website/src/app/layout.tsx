import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import {
  landingPageDescription,
  landingPageTitle,
  openGraphImageUrl,
  twitterHandle,
  twitterMakerHandle,
  websiteUrl,
} from "@/config";
import { getOpenGraph } from "@/components/OpenGraph/OpenGraph";
import { getSEOTags } from "@/components/SEOTags/SEOTags";
import { customTheme } from "@/theme";

export const metadata: Metadata = {
  ...getSEOTags({
    metadataBase: new URL(websiteUrl),
    title: landingPageTitle,
    description: landingPageDescription,
  }),
  ...getOpenGraph({
    title: landingPageTitle,
    description: landingPageDescription,
    imageUrl: openGraphImageUrl,
    websiteUrl,
    twitterImageUrl: openGraphImageUrl,
    twitterHandle: twitterHandle,
    twitterMakerHandle: twitterMakerHandle,
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const defaultTheme = customTheme.config.initialColorMode;
  const uiColorMode =
    (cookieStore.get("chakra-ui-color-mode")?.value as "light" | "dark") ||
    defaultTheme;

  return (
    <html
      lang="en"
      data-theme={uiColorMode}
      style={{ colorScheme: uiColorMode }}
      className={uiColorMode}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <script
          defer
          type="text/javascript"
          src="/pirsch-extended.js"
          id="pirschextendedjs"
          data-code=""
        />
        {/* <script
          defer
          type="text/javascript"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        /> */}
      </head>
      <body
        className={`chakra-ui-${uiColorMode} ${GeistSans.className}`}
        style={{
          overflowX: "hidden",
        }}
      >
        <Providers uiColorMode={uiColorMode}>{children}</Providers>
      </body>
    </html>
  );
}
