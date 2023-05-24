import { Footer, Navbar } from "@/components";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Montserrat } from "next/font/google";

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
        <meta
          name="google-site-verification"
          content="MJMQX8AxbAqvEijPIfcexV0I8LRR-IPCt8-Vm0bcj1Y"
        />
      </head>
      <body
        className={`${montserrat.className} text-accent w-screen sm:w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
