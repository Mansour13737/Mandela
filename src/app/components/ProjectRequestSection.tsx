"use client";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function ProjectRequestSection() {
  const [projectType, setProjectType] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ projectType, keywords, file });
    alert("درخواست شما ثبت شد!");
  };

  return (
    <section className="py-4 bg-gray-900 w-full text-white px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-[var(--font-play)] font-bold mb-4">
          ثبت پروژه موسیقی
        </h2>
        <p className="text-gray-400 font-[var(--font-merri)]">
          اطلاعات پروژه خود را وارد کنید تا تیم ماندلا بهترین پیشنهاد را ارائه دهد
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-6"
      >
        <label className="flex flex-col">
          <span className="mb-2 font-semibold">نوع پروژه</span>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          >
            <option value="">انتخاب کنید</option>
            <option value="ترانه">ترانه</option>
            <option value="ملودی">ملودی</option>
            <option value="تنظیم و میکس">تنظیم و میکس</option>
            <option value="ضبط وکال">ضبط وکال</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="mb-2 font-semibold">کلیدواژه‌ها / توضیحات</span>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="مثال: غمگین، عاشقانه، پاپ"
            className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 font-semibold">آپلود نمونه صدا</span>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="p-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </label>

        <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          ثبت درخواست
        </Button>
      </form>
    </section>
  );
}