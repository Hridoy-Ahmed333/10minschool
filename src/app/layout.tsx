import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Minute School",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>The Nav Bar</header>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
