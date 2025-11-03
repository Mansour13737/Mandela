// frontend/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Merriweather, Playfair_Display } from "next/font/google";

// ✅ Header اضافه شد
import Header from "./components/Header";

// ---------------- Fonts ----------------
const merri = Merriweather({
  subsets: ["latin"],
  variable: "--font-merri",
  weight: "300",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-play",
});


// ---------------- Metadata ----------------
export const metadata: Metadata = {
  title: "Mandela Music Platform",
  description:
    "پلتفرم حرفه‌ای همکاری در تولید، تنظیم، میکس و ترانه‌سرایی موسیقی.",
};

// ---------------- Layout ----------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${merri.variable} ${playfair.variable} antialiased bg-gray-950 text-gray-100`}
      >
        {/* ✅ Header در تمام صفحات */}
        <Header />

        {/* محتوای اصلی صفحات */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}