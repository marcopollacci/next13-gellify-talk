import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Your Cool Next.JS 13</h1>
          <nav>
            <ul>
            <li>
                <a href="/">Home</a>
              </li>              
              <li>
                <a href="/main">Main</a>
              </li>
              <li>
                <a href="/intercept">Intercept</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>&copy; 2023 Cool Website</footer>
      </body>
    </html>
  );
}