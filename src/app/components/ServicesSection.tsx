"use client";
import { motion } from "framer-motion";
import { Music, Mic, SlidersHorizontal, Headphones, Piano, BookOpen } from "lucide-react";

const services = [
  {
    id: 1,
    title: "ترانه‌سرایی",
    description: "ترانه‌های اختصاصی بر اساس سبک و درخواست شما",
    icon: <Mic size={32} />,
  },
  {
    id: 2,
    title: "ملودی‌سازی",
    description: "خلق ملودی‌های منحصر به فرد و حرفه‌ای برای پروژه شما",
    icon: <Music size={32} />,
  },
  {
    id: 3,
    title: "تنظیم",
    description: "تنظیم موسیقی با سبک‌ها و احساسات مختلف",
    icon: <SlidersHorizontal size={32} />,
  },
  {
    id: 4,
    title: "میکس و مسترینگ",
    description: "افزودن کیفیت حرفه‌ای و شفافیت به آهنگ‌های شما",
    icon: <Headphones size={32} />,
  },
  {
    id: 5,
    title: "نوازندگی",
    description: "اضافه کردن نوازندگان حرفه‌ای برای اجرای زنده یا استودیو",
    icon: <Piano size={32} />,
  },
  {
    id: 6,
    title: "آموزش موسیقی",
    description: "جلسات خصوصی آموزش و تمرین با مربیان مجرب",
    icon: <BookOpen size={32} />,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-4 w-full bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-[var(--font-play)] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400"
        >
          خدمات ما
        </motion.h2>
        <p className="text-gray-400 mb-12 font-[var(--font-merri)]">
          خدمات حرفه‌ای موسیقی که تیم ماندلا ارائه می‌دهد
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              <div className="text-pink-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}