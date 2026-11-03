import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dineo | QR ordering, kitchen screen and billing for restaurants",
  description:
    "Guests scan the QR on their table, order and pay from their phone, and the order shows up on your kitchen screen. ₹1,999 a month per outlet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
