"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, Book, Users, Brain, Library, X, ArrowRight } from "lucide-react";

const QUICK_ACTIONS = [
  { icon: Search, label: "Tìm kiếm tri thức", action: "/search", hint: "Search" },
  { icon: Brain, label: "Nghiên cứu với AI", action: "/ai", hint: "AI" },
  { icon: Book, label: "Thư viện sách", action: "/books", hint: "Books" },
  { icon: Users, label: "Cộng đồng", action: "/communities", hint: "Community" },
  { icon: Library, label: "Thư viện của tôi", action: "/library", hint: "Library" },
];

const SUGGESTIONS = [
  "Triết học Stoicism",
  "Digital Marketing",
  "AI & Machine Learning",
  "Tâm lý học hành vi",
  "Lịch sử Việt Nam",
  "Kinh doanh & Startup",
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  function navigate(path: string) {
    router.push(path);
    close();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  const filteredSuggestions = SUGGESTIONS.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]"
      onClick={close}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden />

      {/* Panel */}
      <div
        className="relative w-full max-w-[600px] mx-4 bg-charcoal-2 border border-charcoal-4 rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal
        aria-label="Command Palette"
      >
        {/* Search input */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 px-5 py-4 border-b border-charcoal-4">
            <Search className="w-5 h-5 text-ivory-mute flex-shrink-0" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm kiếm tri thức, sách, cộng đồng..."
              className="flex-1 bg-transparent border-none outline-none text-ivory text-[15px] placeholder:text-ivory-mute"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} className="text-ivory-mute hover:text-ivory">
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-charcoal-4 border border-charcoal-5 rounded text-[10px] text-ivory-mute font-mono">
              ESC
            </kbd>
          </div>
        </form>

        <div className="p-2 max-h-[400px] overflow-y-auto">
          {query === "" ? (
            <>
              <div className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-ivory-mute">
                Truy cập nhanh
              </div>
              {QUICK_ACTIONS.map(({ icon: Icon, label, action, hint }) => (
                <button
                  key={action}
                  onClick={() => navigate(action)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-charcoal-3 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-charcoal-3 group-hover:bg-charcoal-4 border border-charcoal-4 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-ivory-mute group-hover:text-gold" />
                  </div>
                  <span className="flex-1 text-sm text-ivory-dim group-hover:text-ivory">{label}</span>
                  <span className="text-[10px] text-ivory-mute hidden sm:block">{hint}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-ivory-mute opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}

              <div className="px-3 pt-3 pb-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-ivory-mute">
                Chủ đề gợi ý
              </div>
              <div className="flex flex-wrap gap-2 px-3 pb-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => navigate(`/search?q=${encodeURIComponent(s)}`)}
                    className="text-xs text-ivory-dim bg-charcoal-3 border border-charcoal-4 rounded-full px-3 py-1.5 hover:border-gold-dim hover:text-ivory transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </>
          ) : filteredSuggestions.length > 0 ? (
            <>
              <div className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-ivory-mute">
                Gợi ý
              </div>
              {filteredSuggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(s)}`)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-charcoal-3 transition-colors group"
                >
                  <Search className="w-4 h-4 text-ivory-mute" />
                  <span className="text-sm text-ivory-dim group-hover:text-ivory">{s}</span>
                </button>
              ))}
              <button
                onClick={() => navigate(`/search?q=${encodeURIComponent(query)}`)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-charcoal-3 transition-colors group"
              >
                <ArrowRight className="w-4 h-4 text-gold" />
                <span className="text-sm text-ivory-dim group-hover:text-ivory">
                  Tìm kiếm &ldquo;<strong className="text-ivory">{query}</strong>&rdquo;
                </span>
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate(`/search?q=${encodeURIComponent(query)}`)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-charcoal-3 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 text-gold" />
              <span className="text-sm text-ivory-dim group-hover:text-ivory">
                Khám phá &ldquo;<strong className="text-ivory">{query}</strong>&rdquo;
              </span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 px-5 py-3 border-t border-charcoal-4 text-[10px] text-ivory-mute">
          <span><kbd className="font-mono">↑↓</kbd> điều hướng</span>
          <span><kbd className="font-mono">Enter</kbd> mở</span>
          <span><kbd className="font-mono">Esc</kbd> đóng</span>
          <span className="ml-auto">
            <kbd className="font-mono bg-charcoal-4 px-1.5 py-0.5 rounded">⌘K</kbd> mọi lúc
          </span>
        </div>
      </div>
    </div>
  );
}
