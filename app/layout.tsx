import type { Metadata } from "next";
import { DM_Mono, Host_Grotesk, Koulen } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/providers/TransitionProvider";
import ClientLayout from "@/client-layout";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-koulen",
});

const hostGrotesk = Host_Grotesk({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "NRMLSS | NBDEV",
  description: "Coded By NBdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${koulen.variable} ${hostGrotesk.variable} ${dmMono.variable}`}
      >
        <TransitionProvider>
          <ClientLayout footer={<Footer />}>
            <Menu />
            {children}
          </ClientLayout>
        </TransitionProvider>
      </body>
    </html>
  );
}
