import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Nav from "./appComponents/nav/Nav";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Footer from "./appComponents/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "NewsScrolls",
  description:
    "NewsScrolls is a comprehensive online archive that curates and preserves historical newspapers from Uganda. Delve into the past with our extensive collection of articles, headlines, and stories that capture the essence of bygone eras. Whether you're a researcher, historian, or simply curious about history, NewsScrolls provides a window into the events and narratives that shaped our world. Easily searchable and beautifully organized, our platform offers a rich resource for exploring the past and uncovering the stories behind the news. With NewsScrolls, history is just a scroll away.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )}
        >
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
