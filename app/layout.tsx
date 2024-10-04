import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Home/Nav";
import ClientProvider from "./components/Hoc/clientProvider";
import Footer from "./components/Home/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const font = Plus_Jakarta_Sans({ 
  weight: ['200' , '300' , '400' , '500' ,'600' , '700' , '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "HireHub | Find Your Dream Job",
  description: "Find Your Dream Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClientProvider>
     <html lang="en">
      <body className={font.className}>
        <Nav/>
        {children}
        <Footer/>
        <ScrollToTop/>
        </body>
    </html>
   </ClientProvider>
  );
}
