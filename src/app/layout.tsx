import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
    icons: {
    icon: "https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png", 
  },
  description:
    "Access free and premium online courses for SSC, HSC, university admission, skills, and more with 10 Minute School. Learn with video lessons, quizzes, and expert teachers.",
  keywords: [
    "10 Minute School",
    "online education",
    "Bangladesh",
    "SSC",
    "HSC",
    "admission test",
    "skills",
    "video courses",
    "online learning",
    "education app",
  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <header className="fixed top-0 left-0 w-full z-51 bg-white h-[65px] border-b border-gray-200">
            <Header />
          </header>
          {children}
          <footer>Footer</footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
