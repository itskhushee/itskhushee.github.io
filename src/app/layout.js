import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeroSection from "./components/HeroSection";
// import AboutMe from "./components/AboutMe";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khushee Vakil",
  description: "Khushee Vakil's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
          <HeroSection />
          {/* <AboutMe /> */}

          {children}
      </body>
    </html>
  );
}
