"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLACEHOLDERS = [
  "Tôi muốn học Digital Marketing...",
  "Tìm sách hay về tâm lý học...",
  "Muốn tìm hiểu về AI Agents...",
  "Tìm tài liệu về lịch sử Việt Nam...",
  "Triết học Stoicism là gì...",
  "Cách xây dựng startup từ đầu...",
];

const CHIPS = [
  "Triết học Stoicism",
  "Digital Marketing",
  "Lịch sử Việt Nam",
  "Tâm lý học hành vi",
  "AI & Machine Learning",
  "Kinh doanh & Startup",
];

export function Hero() {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0]);
  const router = useRouter();

  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      idx = (idx + 1) % PLACEHOLDERS.length;
      setPlaceholder(PLACEHOLDERS[idx]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  function go(q: string) {
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    go(query);
  }

  return (
    <section className="relative min-h-svh flex flex-col justify-center items-center text-center pt-16 overflow-hidden">
      {/* Ambient top glow */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[640px]"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,154,94,0.1) 0%, transparent 60%)" }} />
      {/* Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 w-full max-w-[780px] px-6 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-7">
          <span className="w-8 h-px bg-gold-dim" />
          Tàng Kinh Các
          <span className="w-8 h-px bg-gold-dim" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(40px,6.5vw,76px)] font-bold leading-[1.06] text-ivory mb-6 tracking-tight">
          Đừng chỉ hỏi AI.<br />
          Hãy <em className="italic text-gold">khám phá</em> tri thức.
        </h1>

        {/* Sub */}
        <p className="text-[clamp(16px,1.6vw,19px)] font-light text-ivory-dim max-w-[580px] mb-12 leading-[1.75]">
          Tìm sách, tài liệu, khóa học và cộng đồng chuyên sâu — rồi dùng AI để hiểu, kết nối và nghiên cứu chúng.
        </p>

        {/* Search */}
        <form onSubmit={handleSubmit} className="w-full max-w-[660px]" role="search">
          <div className="flex items-center bg-charcoal-2 border-[1.5px] border-charcoal-4 rounded-2xl pl-5 pr-1.5 py-1.5 gap-3 focus-within:border-gold-dim focus-within:shadow-[0_0_0_4px_rgba(184,154,94,0.07)] transition-all duration-200">
            <Search className="w-5 h-5 text-ivory-mute flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent border-none outline-none text-ivory text-[15px] placeholder:text-ivory-mute min-w-0 transition-all"
              aria-label="Tìm kiếm tri thức"
            />
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="hidden sm:flex gap-1.5 rounded-xl"
                onClick={() => router.push("/ai")}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                AI Research
              </Button>
              <Button type="submit" size="sm" variant="primary" className="rounded-xl px-5">
                Khám phá
              </Button>
            </div>
          </div>
        </form>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {CHIPS.map((c) => (
            <button key={c} type="button" onClick={() => go(c)}
              className="text-[12px] text-ivory-mute bg-charcoal-3 border border-charcoal-4 rounded-full px-3.5 py-1.5 hover:text-ivory-dim hover:border-gold-dim transition-all duration-150">
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.12em] uppercase text-ivory-mute animate-scroll-bob">
        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
        Khám phá
      </div>
    </section>
  );
}
