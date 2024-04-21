import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DataProvider from "./provider";
import { CartProvider } from "./context/cartContext";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Сeezer Marketplace",
  description: "A carbon offset marketplace",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </DataProvider>
      </body>
    </html>
  );
}
