import Providers from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { Radio_Canada_Big, DM_Serif_Text } from "next/font/google";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-radio-canada-big",
});

const DMSerifText = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
});

export const metadata: Metadata = {
  title: "gloss ─ a theme generator for shadcn/ui",
  description: "a theme generator for shadcn/ui",
  icons: [{ rel: "icon", url: "https://utfs.io/f/KfDq3ZTRzutAcZR2QQunaPXOGRfyDesj0EWSldQUFg1hI3xN" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${radioCanadaBig.variable} ${DMSerifText.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>
          {children}
          <Toaster />
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
}
