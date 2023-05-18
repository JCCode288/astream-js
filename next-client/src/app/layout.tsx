import { Navbar } from "@/components";
import "./globals.css";
import "swiper/css"; // core Swiper
import "swiper/css/effect-flip";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
