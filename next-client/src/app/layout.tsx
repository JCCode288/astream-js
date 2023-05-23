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
        <meta name="robots" content="all" />
        <title>Astream@Next</title>
        <meta
          name="description"
          content="Anime Streaming website using Next.js"
        />
        <meta
          name="google-site-verification"
          content="JWWt-mmCURoSNcZsgzV3vLUvZrbbUp3h_HO8tuLPBBA"
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
