import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "justin cefai",
  description: "justin cefai portfolio site for front end web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
