import Provider from "@/app/provider";
import PageTransition from "@/app/components/PageTransition";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maiker.ai/"),
  title: {
    default: 'Maiker.Ai',
    template: `%s | Maiker.Ai`
  },
  description:
    "Start your digital entrepreneurship journey with as little as $100. Choose from businesses at any stage - from ideas to revenue-generating ventures.",
  openGraph: {
    description:
      "Start your digital entrepreneurship journey with as little as $100. Choose from businesses at any stage - from ideas to revenue-generating ventures.",
    images: [
      "https://dwdwn8b5ye.ufs.sh/f/MD2AM9SEY8GucGJl7b5qyE7FjNDKYduLOG2QHWh3f5RgSi0c",
    ],
    url: "https://maiker.ai/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maiker.Ai - Affordable Micro SaaS Marketplace",
    description:
      "Start your digital entrepreneurship journey with as little as $100. Choose from businesses at any stage - from ideas to revenue-generating ventures.",
    siteId: "",
    creator: "@maiker_ai",
    creatorId: "",
    images: [
      "https://dwdwn8b5ye.ufs.sh/f/MD2AM9SEY8GucGJl7b5qyE7FjNDKYduLOG2QHWh3f5RgSi0c",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} font-light`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          appearance={{
            baseTheme: dark
          }}
          dynamic
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Provider>
              <PageTransition>{children}</PageTransition>
              <Toaster />
            </Provider>
          </ThemeProvider>
          <Analytics />
        </ClerkProvider>
      </body>
    </html>
  );
}
