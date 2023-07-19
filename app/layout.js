import Navbar from "@/components/Navbar";
import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Basharat Mehdi",
  description: "Basharat Mehdi's Portfolio Website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <header className="bg-[#FFFFFA] shadow-md h-14 md:h-16">
          <Navbar />
        </header>
        <main className="mx-auto px-4 md:px-8 lg:w-[980px] xl:w-[1100px] 2xl:w-[1400px]">
          {children}
        </main>
        <footer className="mx-auto px-4 md:px-8 lg:w-[980px] xl:w-[1100px] 2xl:w-[1400px]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
