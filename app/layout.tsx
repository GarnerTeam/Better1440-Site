import type { Metadata, Viewport } from "next";
// Fonts are self-hosted (bundled from npm), so no request goes to Google.
import "@fontsource/zilla-slab/500.css";
import "@fontsource/zilla-slab/700.css";
import "@fontsource-variable/public-sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://better1440.com"),
  title: "Better1440 | Tools that give real estate agents time back",
  description:
    "Better1440 makes apps for real estate agents: Analyze reads and compares offers, Launch5 runs the file to closing, and Relationships keeps you in touch with past clients.",
  icons: { icon: "/icon-1440-192.png", apple: "/apple-icon-1440.png" },
  openGraph: {
    title: "Better1440",
    description: "Apps that give real estate agents time back.",
    images: ["/icon-1440-512.png"],
  },
};

export const viewport: Viewport = { themeColor: "#0f2722" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
