"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "آرش رضایی",
    role: "تنظیم‌کننده و آهنگساز",
    image: "/avatars/arash.jpg",
    text: "همکاری با ماندلا باعث شد پروژه من با کیفیت حرفه‌ای تولید بشه و تجربه فوق‌العاده‌ای داشته باشم.",
  },
  {
    id: 2,
    name: "نیلوفر محمدی",
    role: "ترانه‌سرا و وکال کوچ",
    image: "/avatars/niloofar.jpg",
    text: "تیم ماندلا بسیار حرفه‌ای و منظم بود، حس کردم همه چیز با دقت و عشق انجام شد.",
  },
  {
    id: 3,
    name: "سام نادری",
    role: "میکس و مسترینگ",
    image: "/avatars/sam.jpg",
    text: "مشتری‌ها همیشه از کیفیت صدا و تنظیم راضی بودن، این تیم واقعاً حرفه‌ایه.",
  },
  {
    id: 4,
    name: "لیلا کریمی",
    role: "خواننده و وکال",
    image: "/avatars/lila.jpg",
    text: "تجربه همکاری با ماندلا باعث شد صدای من حرفه‌ای‌تر ضبط بشه و نتیجه عالی شد.",
  },
  {
    id: 5,
    name: "مهران طاهری",
    role: "نوازنده پیانو و کیبورد",
    image: "/avatars/mehran.jpg",
    text: "پروژه من به صورت کاملاً حرفه‌ای میکس و مستر شد و کیفیت صدا عالی بود.",
  },
  {
    id: 6,
    name: "سارا احمدی",
    role: "ترانه‌سرا",
    image: "/avatars/sara.jpg",
    text: "همکاری با تیم ماندلا باعث شد ترانه من به بهترین شکل ممکن اجرا و ضبط بشه.",
  },
];


export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8; // Scroll 80% of visible width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-12 w-full bg-gray-950 text-gray-100">
      <div className="w-full flex flex-col items-center mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-[var(--font-play)] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
          نظرات مشتریان
        </h2>
        <p className="text-gray-400 mb-8 font-[var(--font-merri)]">
          تجربه‌های واقعی هنرمندان و مشتریان ما
        </p>

        {/* Scroll Buttons for Desktop */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 z-10">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white/10 hover:bg-pink-500/30 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white/10 hover:bg-pink-500/30 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 pb-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-80 snap-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{t.role}</p>
              <p className="text-gray-300 text-sm">{t.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
