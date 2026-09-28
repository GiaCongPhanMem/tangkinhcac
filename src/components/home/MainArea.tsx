"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Plus, Brain, Mic, ArrowUp, Image as ImageIcon,
  PenLine, Globe, Sparkles, BookOpen, Users,
  ChevronDown, Zap, TrendingDown, Layers, Check,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { DonateButton } from "./DonateButton";
import { cn } from "@/lib/utils";

// ─── AI Platform logos (text-based badges) ───────────────────
const AI_PLATFORMS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    model: "GPT-4o",
    color: "#10a37f",
    bg: "rgba(16,163,127,0.1)",
    border: "rgba(16,163,127,0.25)",
    initial: "G",
  },
  {
    id: "gemini",
    name: "Gemini",
    model: "Gemini 1.5 Pro",
    color: "#4285f4",
    bg: "rgba(66,133,244,0.1)",
    border: "rgba(66,133,244,0.25)",
    initial: "G",
  },
  {
    id: "claude",
    name: "Claude",
    model: "Claude 3.5 Sonnet",
    color: "#d97706",
    bg: "rgba(217,119,6,0.1)",
    border: "rgba(217,119,6,0.25)",
    initial: "C",
  },
  {
    id: "grok",
    name: "Grok",
    model: "Grok-2",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.15)",
    initial: "X",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    model: "DeepSeek V3",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
    initial: "D",
  },
  {
    id: "mistral",
    name: "Mistral",
    model: "Mistral Large",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    initial: "M",
  },
];

const INSIGHT_POINTS = [
  {
    icon: TrendingDown,
    title: "Chi phí thấp hơn đến 90%",
    desc: "Chọn đúng model cho từng tác vụ — không cần trả tiền GPT-4 cho câu hỏi đơn giản.",
    color: "#22c55e",
  },
  {
    icon: Layers,
    title: "Đa nền tảng, một giao diện",
    desc: "Truy cập ChatGPT, Gemini, Claude, Grok và nhiều AI khác từ một nơi duy nhất.",
    color: "#b89a5e",
  },
  {
    icon: Brain,
    title: "Chọn AI thông minh hơn",
    desc: "So sánh câu trả lời từ nhiều model cùng lúc. Biết model nào phù hợp cho từng việc.",
    color: "#818cf8",
  },
];

const SUGGESTION_CHIPS = [
  { icon: ImageIcon, label: "Tạo ảnh hoặc hình dẫn" },
  { icon: PenLine, label: "Viết hoặc chỉnh sửa" },
  { icon: Globe, label: "Tìm kiếm trên web" },
];

const QUICK_ACTIONS = [
  { icon: BookOpen, label: "Tìm sách hay", query: "Tìm sách hay về" },
  { icon: Sparkles, label: "Nghiên cứu với AI", query: "Nghiên cứu về" },
  { icon: Users, label: "Tìm cộng đồng", query: "Tìm cộng đồng về" },
  { icon: Globe, label: "Khám phá chủ đề", query: "Khám phá chủ đề" },
];

const MODELS = [
  { id: "tkc", label: "TKC Standard", icon: Zap },
  { id: "tkc-pro", label: "TKC Research", icon: Sparkles },
  { id: "chatgpt", label: "ChatGPT 4o", icon: Zap },
  { id: "gemini", label: "Gemini 1.5 Pro", icon: Sparkles },
  { id: "claude", label: "Claude 3.5", icon: Brain },
];

interface MainAreaProps {
  sidebarOpen: boolean;
}

export function MainArea({ sidebarOpen }: MainAreaProps) {
  const [query, setQuery] = useState("");
  const [modelOpen, setModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 200) + "px";
  }, [query]);

  function submit() {
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function applyChip(label: string) {
    setQuery(label + " ");
    textareaRef.current?.focus();
  }

  return (
    <div
      className="flex-1 flex flex-col h-full overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0">
        {/* Model selector */}
        <div className="relative">
          <button
            onClick={() => setModelOpen((o) => !o)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors hover:bg-[var(--bg-3)]"
            style={{ color: "var(--text-primary)" }}
          >
            <selectedModel.icon className="w-3.5 h-3.5" style={{ color: "var(--gold)" }} />
            {selectedModel.label}
            <ChevronDown className="w-3.5 h-3.5" style={{ color: "var(--text-mute)" }} />
          </button>

          {modelOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setModelOpen(false)} />
              <div
                className="absolute top-full left-0 mt-1 w-[220px] rounded-xl border shadow-xl z-20 overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-2)",
                  borderColor: "var(--color-border)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  className="px-4 py-2 text-[10px] font-bold tracking-[0.12em] uppercase"
                  style={{ color: "var(--text-mute)" }}
                >
                  Chọn AI Model
                </div>
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => { setSelectedModel(m); setModelOpen(false); }}
                    className="flex items-center gap-2.5 w-full px-4 py-2.5 text-[13px] text-left transition-colors hover:bg-[var(--bg-3)]"
                    style={{ color: selectedModel.id === m.id ? "var(--text-primary)" : "var(--text-dim)" }}
                  >
                    <m.icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <span className="flex-1 font-medium">{m.label}</span>
                    {selectedModel.id === m.id && (
                      <Check className="w-3.5 h-3.5" style={{ color: "var(--gold)" }} />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle size="sm" />
          <DonateButton />
        </div>
      </div>

      {/* ── Scrollable center ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center px-4 pb-8 pt-4">
          <div className="w-full max-w-[680px] flex flex-col items-center gap-7">

            {/* ── Headline ── */}
            <h1
              className="font-serif text-[26px] sm:text-[30px] font-semibold text-center leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              Nhiều AI Pro. Một nơi.{" "}
              <span style={{ color: "var(--gold)" }}>Không mất tiền.</span>
            </h1>

            {/* ── Input box ── */}
            <div className="w-full">
              <div
                className="rounded-2xl border transition-all focus-within:border-[var(--gold-dim)] focus-within:shadow-[0_0_0_3px_rgba(184,154,94,0.08)]"
                style={{
                  backgroundColor: "var(--bg-2)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="px-4 pt-4 pb-2">
                  <textarea
                    ref={textareaRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Cứ hỏi nhé..."
                    rows={1}
                    className="w-full bg-transparent border-none outline-none resize-none text-[15px] leading-relaxed"
                    style={{
                      color: "var(--text-primary)",
                      minHeight: "28px",
                      maxHeight: "200px",
                    }}
                    aria-label="Nhập câu hỏi"
                  />
                </div>
                <div className="flex items-center justify-between px-3 pb-3 pt-1">
                  <div className="flex items-center gap-1">
                    <button className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-3)]" style={{ color: "var(--text-mute)" }} aria-label="Đính kèm">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors hover:bg-[var(--bg-3)]" style={{ color: "var(--text-mute)" }}>
                      <Brain className="w-3.5 h-3.5" />
                      Suy luận
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-3)]" style={{ color: "var(--text-mute)" }} aria-label="Giọng nói">
                      <Mic className="w-4 h-4" />
                    </button>
                    <button
                      onClick={submit}
                      disabled={!query.trim()}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-25"
                      style={{
                        backgroundColor: query.trim() ? "var(--gold)" : "var(--bg-4)",
                        color: query.trim() ? "var(--bg-base)" : "var(--text-mute)",
                      }}
                      aria-label="Gửi"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Suggestion chips ── */}
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTION_CHIPS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => applyChip(label)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] border transition-all hover:-translate-y-px"
                  style={{
                    backgroundColor: "var(--bg-2)",
                    borderColor: "var(--color-border)",
                    color: "var(--text-dim)",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--text-mute)" }} />
                  {label}
                </button>
              ))}
            </div>

            {/* ── INSIGHT BANNER ── */}
            <div
              className="w-full rounded-2xl border overflow-hidden"
              style={{
                borderColor: "rgba(184,154,94,0.2)",
                background: "linear-gradient(135deg, var(--bg-2) 0%, rgba(184,154,94,0.04) 100%)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 px-5 py-4 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(184,154,94,0.15)" }}
                >
                  <Layers className="w-4 h-4" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <div
                    className="text-[13px] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sử dụng AI thông minh hơn
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--text-mute)" }}>
                    Chi phí thấp hơn · Đa nền tảng · Không bị lock-in
                  </div>
                </div>
              </div>

              {/* 3 insight points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: "var(--color-border)" }}>
                {INSIGHT_POINTS.map(({ icon: Icon, title, desc, color }) => (
                  <div key={title} className="flex flex-col gap-2 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                      <span className="text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>
                        {title}
                      </span>
                    </div>
                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-mute)" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* AI Platform badges */}
              <div
                className="px-5 py-4 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="text-[11px] font-semibold mb-3 tracking-wide uppercase" style={{ color: "var(--text-mute)" }}>
                  Nền tảng AI được hỗ trợ
                </div>
                <div className="flex flex-wrap gap-2">
                  {AI_PLATFORMS.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium border"
                      style={{
                        backgroundColor: p.bg,
                        borderColor: p.border,
                        color: p.color,
                      }}
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                        style={{ backgroundColor: p.color, color: "#fff" }}
                      >
                        {p.initial}
                      </span>
                      <span>{p.name}</span>
                      <span className="text-[10px] opacity-60">{p.model}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Quick actions ── */}
            <div
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              {QUICK_ACTIONS.map(({ icon: Icon, label, query: q }) => (
                <button
                  key={label}
                  onClick={() => router.push(`/search?q=${encodeURIComponent(q)}`)}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl text-[12px] border transition-all hover:-translate-y-0.5 hover:border-[var(--gold-dim)] text-center"
                  style={{
                    backgroundColor: "var(--bg-2)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  <span style={{ color: "var(--text-dim)" }}>{label}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
