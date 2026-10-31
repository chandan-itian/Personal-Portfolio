import type { Metadata, Viewport } from "next";
import { Caveat, Patrick_Hand, DM_Sans } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chandan Raj — Full-Stack Developer & Software Developer",
  description:
    "Personal portfolio of Chandan Raj — Full-Stack Developer & Software Developer. Handcrafted, minimal, and playful digital experiences.",
  keywords: [
    "Chandan Raj",
    "Full-Stack Developer",
    "Software Developer",
    "IT Sector",
    "Portfolio",
    "Frontend",
    "Backend",
    "UI/UX",
  ],
  authors: [{ name: "Chandan Raj" }],
  creator: "Chandan Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Chandan Raj — Full-Stack Developer & Software Developer",
    description:
      "Personal portfolio of Chandan Raj — Full-Stack Developer & Software Developer. Handcrafted, minimal, and playful digital experiences.",
    siteName: "Chandan Raj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan Raj — Full-Stack Developer & Software Developer",
    description:
      "Personal portfolio of Chandan Raj — Full-Stack Developer & Software Developer. Handcrafted, minimal, and playful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${patrickHand.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#FDFBF7] text-[#1E1E1E] antialiased selection:bg-[#F8C3D1] selection:text-[#1E1E1E] min-h-screen">
        {children}
      </body>
    </html>
  );
}
