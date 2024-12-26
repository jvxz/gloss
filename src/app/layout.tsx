import Providers from "@/components/providers";
import "@/styles/globals.css";
import Sidebar from "@/features/sidebar/sidebar";
import { type Metadata } from "next";
import { Radio_Canada_Big } from "next/font/google";

const font = Radio_Canada_Big({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-radio-canada-big",
});

export const metadata: Metadata = {
  title: "gloss ─ theme generator",
  description: "a theme generator for various frontend libraries",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${font.variable}`}>
      <body>
        <Providers>
          <main className="flex h-screen">
            <Sidebar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
