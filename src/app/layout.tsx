import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  // Since it's a variable font, we don't need to specify weights unless we want to limit them
});

export const metadata: Metadata = {
  title: "Nina Jojer | Public Policy & Business Strategy Consulting",
  description: "Specializing in public policy, business strategy, and tech solutions in Sub-Saharan Africa. Empowering governments and enterprise clients with strategic insights.",
  keywords: ["Nina Jojer", "Consulting", "Public Policy", "Sub-Saharan Africa", "Business Strategy", "Tech Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSansFlex.variable}`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
