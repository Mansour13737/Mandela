"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormType = {
  projectType: string;
  genre: string;
  lyrics?: string;
  description?: string;
  keywords: string[];
  audioFile?: FileList;
};

export default function ProjectRequestForm() {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormType>({
    mode: "onChange",
    defaultValues: { keywords: [] },
  });

  const projectType = watch("projectType");
  const selectedKeywords = watch("keywords") || [];

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

  const conflictingGroups = [
    ["شاد", "غمگین"],
    ["احساسی", "انرژیک"],
  ];

  const genres = [
    "پاپ",
    "راک",
    "رپ",
    "جاز",
    "الکترونیک",
    "کلاسیک",
    "فیوژن",
    "آکوستیک",
    "سینماتیک",
    "مینیمال",
    "هیپ‌هاپ",
  ];

  const toggleKeyword = (word: string) => {
    const conflict = conflictingGroups.find((group) => group.includes(word));
    if (conflict) {
      const hasConflict = selectedKeywords.some(
        (k) => conflict.includes(k) && k !== word
      );
      if (hasConflict) return;
    }
    const current = selectedKeywords || [];
    if (current.includes(word)) {
      setValue("keywords", current.filter((w) => w !== word), { shouldValidate: true });
    } else {
      setValue("keywords", [...current, word], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormType) => {
    // نمونه‌ی داده‌ای که به بک‌اند میفرستی
    const payload = {
      ...data,
      isPaid: false,
      status: "pending",
      createdAt: new Date().toISOString(),
      requestId: crypto.randomUUID(),
    };

    console.log("payload:", payload);
    // اینجا call به API برای ذخیره و شروع فرایند پرداخت اضافه کن
    alert("درخواست ثبت شد ✅");
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-5 text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* نوع پروژه */}
      <div>
        <label className="block mb-2 text-sm font-medium">نوع پروژه *</label>
        <select
          {...register("projectType", { required: "نوع پروژه را انتخاب کنید" })}
          className="w-full bg-white/10 border border-white/20 rounded-md p-2"
        >
          <option value="">انتخاب کنید...</option>
          <option value="تنظیم">تنظیم</option>
          <option value="میکس">میکس</option>
          <option value="مستر">مستر</option>
          <option value="وکال">وکال</option>
          <option value="ترانه‌سرایی">ترانه‌سرایی</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 text-xs text-red-400">{errors.projectType.message}</p>
        )}
      </div>

      {/* سبک موسیقی (select) */}
      <div>
        <label className="block mb-2 text-sm font-medium">سبک موسیقی *</label>
        <select
          {...register("genre", { required: "سبک موسیقی را انتخاب کنید" })}
          className="w-full bg-white/10 border border-white/20 rounded-md p-2"
        >
          <option value="">انتخاب کنید...</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {errors.genre && <p className="mt-1 text-xs text-red-400">{errors.genre.message}</p>}
      </div>

      {/* کلیدواژه‌ها */}
      <div>
        <label className="block mb-3 text-sm font-medium">کلیدواژه‌ها * (حداقل ۱)</label>
        <div className="flex flex-wrap gap-2">
          {allKeywords.map((word) => {
            const selected = selectedKeywords.includes(word);
            const conflict = conflictingGroups.find(
              (group) =>
                group.includes(word) &&
                group.some((k) => selectedKeywords.includes(k) && k !== word)
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
        {(!selectedKeywords || selectedKeywords.length === 0) && (
          <p className="mt-1 text-xs text-red-400">لطفاً حداقل یک کلیدواژه انتخاب کنید.</p>
        )}
      </div>

      {/* فایل رفرنس */}
      <div>
        <label className="block mb-2 text-sm font-medium">فایل رفرنس صوتی *</label>
        <input
          type="file"
          accept="audio/*"
          {...register("audioFile", {
            validate: (v) => (v && v.length > 0) || "حداقل یک فایل صوتی آپلود کنید",
          })}
          className="w-full bg-white/10 border border-white/20 rounded-md p-2 cursor-pointer"
        />
        {errors.audioFile && <p className="mt-1 text-xs text-red-400">{errors.audioFile.message as string}</p>}
      </div>

      {/* فیلد ترانه فقط اگر نوع پروژه وکال یا ترانه‌سرایی باشه */}
      {(projectType === "وکال" || projectType === "ترانه‌سرایی") && (
        <div>
          <label className="block mb-2 text-sm font-medium">ترانه *</label>
          <textarea
            {...register("lyrics", {
              required: "ترانه را وارد کنید",
              minLength: { value: 10, message: "متن ترانه خیلی کوتاه است" },
            })}
            className="w-full bg-white/10 border border-white/20 rounded-md p-2"
          />
          {errors.lyrics && <p className="mt-1 text-xs text-red-400">{errors.lyrics.message}</p>}
        </div>
      )}

      {/* توضیحات */}
      <div>
        <label className="block mb-2 text-sm font-medium">توضیحات</label>
        <textarea
          {...register("description")}
          placeholder="توضیحات اضافی..."
          className="w-full bg-white/10 border border-white/20 rounded-md p-2 min-h-[100px]"
        />
      </div>

      {/* پیش‌پرداخت (نمایش فقط اطلاعات) */}
      <div>
        <label className="block mb-2 text-sm font-medium">پیش‌پرداخت: ۳۰۰,۰۰۰ تومان</label>
      </div>

      {/* ارسال */}
      <button
        type="submit"
        disabled={isSubmitting || !isValid || (selectedKeywords?.length || 0) === 0}
        className={`w-full text-white font-bold py-2 rounded-md transition ${
          isSubmitting || !isValid || (selectedKeywords?.length || 0) === 0
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90"
        }`}
      >
        {isSubmitting ? "در حال ارسال..." : "پرداخت و ثبت درخواست"}
      </button>
    </motion.form>
  );
}
