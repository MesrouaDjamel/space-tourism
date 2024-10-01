import type { Metadata } from "next";
import {Bellefair} from "next/font/google";
import "./globals.css";
 
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });


export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space Tourism challenge from Frontend Mentor", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
