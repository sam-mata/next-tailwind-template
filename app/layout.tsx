import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template Next JS Project",
  description: "Template for Next JS projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
