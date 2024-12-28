import Providers from "@/components/providers";
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
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${radioCanadaBig.variable} ${DMSerifText.variable}`}
    >
      <body>
        <Providers>
          <main className="flex h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
