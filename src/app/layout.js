import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Board",
  description: "Find your dream job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="container py-6 text-center text-gray-500">
          Job Board &copy; {new Date().getFullYear()} - All rights reserved
        </footer>
      </body>
    </html>
  );
}
