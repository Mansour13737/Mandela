"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectRequestForm() {
  const [projectType, setProjectType] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const allKeywords = [
    "شاد",
    "غمگین",
    "احساسی",
    "انرژیک",
    "سینماتیک",
    "دراماتیک",
    "پاپ",
    "رپ",
    "راک",
    "جاز",
    "الکترونیک",
    "کلاسیک",
    "مینیمال",
    "مدرن",
  ];

  // گروه‌های متناقض
  const conflictingGroups = [
    ["شاد", "غمگین"],
    ["احساسی", "انرژیک"],
  ];

  const toggleKeyword = (word: string) => {
    // بررسی تناقض
    const conflict = conflictingGroups.find((group) => group.includes(word));
    if (conflict) {
      const hasConflict = selectedKeywords.some((k) => conflict.includes(k) && k !== word);
      if (hasConflict) return; // نذار انتخاب بشه
    }

    setSelectedKeywords((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("فرم ارسال شد ✅");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-5 text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* نوع پروژه */}
      <div>
        <label className="block mb-2 text-sm font-medium">نوع پروژه</label>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-md p-2"
        >
          <option value="">انتخاب کنید...</option>
          <option value="تنظیم">تنظیم</option>
          <option value="میکس">میکس</option>
          <option value="مستر">مستر</option>
          <option value="وکال">وکال</option>
          <option value="ترانه‌سرایی">ترانه‌سرایی</option>
        </select>
      </div>

      {/* سبک موسیقی */}
      <div>
        <label className="block mb-2 text-sm font-medium">سبک موسیقی</label>
        <input
          type="text"
          placeholder="پاپ، راک، رپ، جَز..."
          className="w-full bg-white/10 border border-white/20 rounded-md p-2"
        />
      </div>

      {/* کلیدواژه‌ها */}
      <div>
        <label className="block mb-3 text-sm font-medium">کلیدواژه‌ها</label>
        <div className="flex flex-wrap gap-2">
          {allKeywords.map((word) => {
            const selected = selectedKeywords.includes(word);
            const conflict = conflictingGroups.find(
              (group) => group.includes(word) && group.some((k) => selectedKeywords.includes(k) && k !== word)
            );
            const disabled = !!conflict;

            return (
              <button
                key={word}
                type="button"
                onClick={() => toggleKeyword(word)}
                disabled={disabled}
                className={`px-3 py-1 rounded-full text-sm border transition-all ${
                  selected
                    ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white border-transparent"
                    : disabled
                    ? "bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed"
                    : "bg-white/10 text-gray-200 border-white/20 hover:bg-white/20"
                }`}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>

      {/* فایل رفرنس */}
      <div>
        <label className="block mb-2 text-sm font-medium">فایل رفرنس صوتی</label>
        <input
          type="file"
          accept="audio/*"
          className="w-full bg-white/10 border border-white/20 rounded-md p-2 cursor-pointer"
        />
      </div>

      {/* فیلد ترانه فقط اگر نوع پروژه وکال یا ترانه‌سرایی باشه */}
      {(projectType === "وکال" || projectType === "ترانه‌سرایی") && (
        <div>
          <label className="block mb-2 text-sm font-medium">ترانه</label>
          <textarea
            className="w-full bg-white/10 border border-white/20 rounded-md p-2 cursor-pointer"
          />
        </div>
      )}

      {/* توضیحات */}
      <div>
        <label className="block mb-2 text-sm font-medium">توضیحات</label>
        <textarea
          placeholder="توضیحات اضافی..."
          className="w-full bg-white/10 border border-white/20 rounded-md p-2 min-h-[100px]"
        ></textarea>
      </div>

      {/* بودجه پیشنهادی */}
      <div>
        <label className="block mb-2 text-sm font-medium">بودجه پیشنهادی (تومان)</label>
        <input
          type="number"
          placeholder="مثلاً ۳,۰۰۰,۰۰۰"
          className="w-full bg-white/10 border border-white/20 rounded-md p-2"
        />
      </div>

      {/* دکمه ارسال */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-2 rounded-md hover:opacity-90"
      >
        پرداخت و ثبت درخواست
      </button>
    </motion.form>
  );
}
