import localFont from "next/font/local";
import { Onest } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const onest = Onest({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-onest",
});

export const metadata = {
  title: "CHUELSA",
  description: "CHUELSA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} font-onest antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
