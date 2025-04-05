import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Anvitha Technologies | Innovative Tech Solutions",
    template: "%s | Anvitha Technologies",
  },
  description:
    "Anvitha Technologies offers cutting-edge web development, mobile apps, AI & ML solutions, cloud computing, and UI/UX design services.",
  keywords: [
    "web development",
    "mobile apps",
    "AI solutions",
    "cloud computing",
    "UI/UX design",
    "technology company",
  ],
  authors: [{ name: "Anvitha Technologies" }],
  creator: "Anvitha Technologies",
  metadataBase: new URL("https://www.anvithatech.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.anvithatech.com",
    title: "Anvitha Technologies | Innovative Tech Solutions",
    description: "Leading provider of innovative technology solutions for businesses",
    siteName: "Anvitha Technologies",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anvitha Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvitha Technologies | Innovative Tech Solutions",
    description: "Leading provider of innovative technology solutions for businesses",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            {/* Header will be imported in page.tsx to use client-side features */}
            <main className="flex-grow">{children}</main>
            {/* Footer will be imported in page.tsx to use client-side features */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}