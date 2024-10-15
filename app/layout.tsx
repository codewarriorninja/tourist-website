import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Travel Agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <main className="relative overflow-hidden">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
