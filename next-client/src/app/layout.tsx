import { Footer, Navbar } from "@/components";
import "./globals.css";
import "swiper/css"; // core Swiper
import "swiper/css/effect-flip";

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
      <body className={`${montserrat.className} text-accent`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
