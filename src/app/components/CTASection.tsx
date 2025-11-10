"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-4 w-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-center px-6">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-4xl sm:text-5xl font-[var(--font-play)] font-bold mb-4">
          پروژه موسیقی خودت رو همین امروز شروع کن
        </h2>
        <p className="text-gray-200 text-lg mb-8">
          با تیم حرفه‌ای ماندلا، آهنگت رو از مرحله ترانه تا مسترینگ با کیفیت جهانی بساز.
        </p>
        <Link href={'/request'}>
          <Button className="bg-white text-black px-10 py-6 text-lg rounded-full hover:bg-gray-200 transition">
            ثبت پروژه جدید
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}