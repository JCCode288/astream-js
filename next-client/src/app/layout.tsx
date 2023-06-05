import { Footer, Navbar } from "@/components";
import "./globals.css";
import "swiper/css/bundle";

import { Montserrat } from "next/font/google";
import MainProvider from "@/providers/MainProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Astream@next",
  description: "AnimeStream App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Anime, Stream, New Brutalism, English, Subtitle"
        />
        <meta property="og:site_name" content="astream" />
        <meta property="og:url" content="https://astream.somelogo.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="anime streaming" />
        <meta property="og:description" content="Web Anime Streaming" />
        <title>Astream@Next</title>
        <meta
          name="description"
          content="Anime Streaming website using Next.js"
        />
      </head>
      <body
        className={`${montserrat.className} text-accent w-screen sm:w-full`}
      >
        <MainProvider>
          <Navbar />
          {children}
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
