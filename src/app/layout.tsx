import { bellefair } from "./_fonts/fonts";
import "./globals.css";
import type { Metadata } from "next";
 


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
