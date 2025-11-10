"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "محمد مقدم",
    role: "مدیر مجموعه",
    rating: 4.9,
    image:
      "/moghadam.jpg",
  },
  {
    id: 2,
    name: "کاووس حسینی",
    role: "تنظیم کننده",
    rating: 4.8,
    image:
      "/kawoos.jpg",
  },
  {
    id: 3,
    name: "امید کیان",
    role: "تنظیم کننده",
    rating: 5.0,
    image:
      "/omid.jpg",
  },
  {
    id: 4,
    name: "رهام رادوین",
    role: "تنظیم کننده",
    rating: 4.7,
    image:
      "/roham.jpg",
  },
  {
    id: 5,
    name: "آژمان",
    role: "ترانه‌سرا،آهنگساز،خواننده",
    rating: 4.9,
    image:
      "/azhman.jpg",
  },
  {
    id: 6,
    name: "احمدرضا لیلایی",
    role: "نوازنده،ترانه سرا،آهنگساز،خواننده",
    rating: 4.9,
    image:
      "/ahmadreza.jpg",
  },
  {
    id: 7,
    name: "منصور نصرتی",
    role: "خواننده،ترانه سرا،آهنگساز",
    rating: 4.9,
    image:
      "/mansour.jpg",
  },
  {
    id: 8,
    name: "امیرعلی",
    role: "خواننده،ترانه سرا،آهنگساز",
    rating: 4.9,
    image:
      "/amirali.jpg",
  },
];

export default function FeaturedArtists() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-[var(--font-play)] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
          هنرمندان ماندلا
        </h2>

        <p className="text-gray-400 mb-12 font-[var(--font-merri)]">
          با استعدادترین و حرفه‌ای‌ترین افراد تیم ما را بشناسید.
        </p>

        {/* Scroll Buttons */}
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

        {/* Scrollable Artist Cards */}
        <motion.div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex-shrink-0 w-72 snap-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover object-center rounded-full border-2 border-pink-400/60"
                />
              </div>

              <h3 className="text-xl font-semibold mb-1 text-white">
                {artist.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{artist.role}</p>

              <div className="flex items-center p-1 justify-center gap-1 text-pink-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(artist.rating)
                        ? "fill-pink-400 text-pink-400"
                        : "text-gray-600"
                    }
                  />
                ))}
                <span className="text-sm text-gray-300 ml-2">
                  {artist.rating.toFixed(1)}
                </span>
              </div>

              <Link
                href={`/artists/${artist.id}`}
                className="inline-block text-sm text-pink-400 hover:text-pink-300 transition"
              >
                مشاهده پروفایل →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}