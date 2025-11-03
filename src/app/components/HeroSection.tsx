"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex w-full flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white">
      {/* Floating gradient lights */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-fuchsia-500/20 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/20 blur-[180px] rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-6xl px-6"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400">
          جایی که موسیقی و خلاقیت به هم می‌رسند
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-8 font-[var(--font-merri)]">
          در Mandela Studio، ما هنرمندان را به تنظیم‌کننده‌ها، ترانه‌سراها و میکس‌من‌های حرفه‌ای متصل می‌کنیم.  
          صدای خودت را بساز، حرفه‌ای‌تر از همیشه
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/create-project"
            className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition"
          >
            شروع همکاری
          </Link>

          <Link
            href="/artists"
            className="border border-gray-500 hover:border-pink-400 text-gray-200 px-8 py-3 rounded-full text-base font-medium hover:text-pink-400 transition"
          >
            دیدن هنرمندان
          </Link>
        </div>
      </motion.div>

      {/* Floating subtle shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-30 sm:bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
      >
        <p className="tracking-widest uppercase">Mandela Studio</p>
      </motion.div>
    </section>
  );
}