import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
export const metadata = {
  title: "VirtualR",
  description: "Easily build your code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blackBg text-white">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
