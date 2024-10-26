import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/layouts/footer/Footer";

export const metadata = {
  title: "MinTech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
