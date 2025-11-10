"use client";
import { useState } from "react";
import { Button } from "./ui/Button";

const projectTypes = [
  "ترانه", "ملودی", "تنظیم", "میکس", "مسترینگ", "ضبط وکال", "نوازندگی", "صداگذاری"
];

const musicStyles = [
  "پاپ", "راک", "هیپ‌هاپ", "جاز", "کلاسیک", "الکترونیک", "سنتی", "فولک", "بلوز", "کانتری"
];

const moodKeywords = [
  "غمگین", "شاد", "عاشقانه", "انگیزشی", "آرامش‌بخش", "تند و پرانرژی",
  "حماسی", "درام", "ملایم", "تیره", "روشن", "هیجانی", "رمانتیک", "پراحساس"
];

export default function FullProjectRequestForm() {
  const [projectType, setProjectType] = useState("");
  const [style, setStyle] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [budget, setBudget] = useState("");

  const toggleKeyword = (kw: string) => {
    setKeywords(prev =>
      prev.includes(kw) ? prev.filter(k => k !== kw) : [...prev, kw]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ projectType, style, keywords, file, budget });
    alert("درخواست شما ثبت شد!");
  };

  return (
    <section className="py-4 w-full bg-gray-900 text-white px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-[var(--font-play)] font-bold mb-4">
          ثبت پروژه موسیقی
        </h2>
        <p className="text-gray-400 font-[var(--font-merri)]">
          تمام اطلاعات پروژه خود را وارد کنید تا تیم ماندلا بهترین پیشنهاد را ارائه دهد
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-6"
      >
        {/* نوع پروژه */}
        <label className="flex flex-col">
          <span className="mb-2 font-semibold">نوع پروژه</span>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          >
            <option value="">انتخاب کنید</option>
            {projectTypes.map(pt => (
              <option key={pt} value={pt}>{pt}</option>
            ))}
          </select>
        </label>

        {/* سبک موسیقی */}
        <label className="flex flex-col">
          <span className="mb-2 font-semibold">سبک موسیقی</span>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          >
            <option value="">انتخاب کنید</option>
            {musicStyles.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </label>

        {/* کلیدواژه‌ها / تم */}
        <div className="flex flex-col">
          <span className="mb-2 font-semibold">کلیدواژه‌ها / تم موزیک</span>
          <div className="flex flex-wrap gap-2">
            {moodKeywords.map(kw => (
              <button
                key={kw}
                type="button"
                onClick={() => toggleKeyword(kw)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  keywords.includes(kw) ? "bg-pink-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* آپلود فایل */}
        <label className="flex flex-col">
          <span className="mb-2 font-semibold">آپلود نمونه صدا / فایل</span>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="p-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </label>

        {/* بودجه پیشنهادی */}
        <label className="flex flex-col">
          <span className="mb-2 font-semibold">بودجه پیشنهادی (تومان)</span>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="مثال: 5000000"
            className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </label>

        <Button type="submit" size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          ثبت درخواست
        </Button>
      </form>
    </section>
  );
}