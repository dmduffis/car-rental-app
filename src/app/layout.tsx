import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rental App",
  description: "Best Car Rental Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <SignedIn>
          <NavBar />
         {children}
        </SignedIn>

        <SignedOut>
          <SignIn/>
        </SignedOut>

        </body>
    </html>
    </ClerkProvider>
  );
}
