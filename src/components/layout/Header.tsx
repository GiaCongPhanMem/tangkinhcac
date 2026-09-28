"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#kham-pha", label: "Khám phá" },
  { href: "/books", label: "Sách" },
  { href: "/communities", label: "Cộng đồng" },
  { href: "/ai", label: "AI Research" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function openPalette() {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true })
    );
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b transition-all duration-300",
        scrolled ? "glass border-[var(--color-border)]" : "bg-transparent border-transparent"
      )}
    >
      <div className="flex items-center gap-6 w-full max-w-container mx-auto px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo size="sm" />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[13px] transition-colors duration-150 hover:opacity-100"
              style={{ color: "var(--text-mute)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mute)")}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Search pill */}
        <button
          onClick={openPalette}
          className="hidden lg:flex items-center gap-2.5 flex-1 max-w-[240px] ml-auto rounded-full px-4 py-2 text-[13px] transition-all duration-200"
          style={{
            backgroundColor: "var(--bg-3)",
            border: "1px solid var(--bg-4)",
            color: "var(--text-mute)",
          }}
          aria-label="Tìm kiếm (Ctrl+K)"
        >
          <Search className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="flex-1 text-left">Tìm kiếm...</span>
          <kbd
            className="flex items-center gap-0.5 font-mono text-[10px] px-1.5 py-0.5 rounded"
            style={{ backgroundColor: "var(--bg-4)", color: "var(--text-mute)" }}
          >
            <Command className="w-2.5 h-2.5" />K
          </kbd>
        </button>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="lg:hidden flex-1 max-w-[180px] ml-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm..."
            className="w-full rounded-full px-4 py-1.5 text-xs outline-none transition-all"
            style={{
              backgroundColor: "var(--bg-3)",
              border: "1px solid var(--bg-4)",
              color: "var(--text-primary)",
            }}
          />
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Theme toggle */}
          <ThemeToggle size="md" />

          <button
            className="hidden sm:block text-[13px] px-3 py-1.5 rounded-lg transition-colors"
            style={{ color: "var(--text-mute)" }}
          >
            Đăng nhập
          </button>
          <Button size="sm" variant="primary" className="rounded-full text-[13px]">
            Bắt đầu
          </Button>
        </div>
      </div>
    </header>
  );
}
