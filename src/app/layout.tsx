import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Responsive Website Travel",
  description: "Discover the most beautiful beaches and travel destinations",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}