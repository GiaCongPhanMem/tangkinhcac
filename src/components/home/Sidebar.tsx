"use client";

import Link from "next/link";
import {
  PenSquare, Image, Library, History, Puzzle, Briefcase,
  Heart, Code2, MoreHorizontal, ChevronLeft, ChevronRight,
  Sparkles, BookOpen, Users, Search,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_TOP = [
  { icon: PenSquare, label: "Khám phá mới", href: "/", active: true },
  { icon: Search, label: "Tìm kiếm", href: "/(main)/search" },
  { icon: BookOpen, label: "Thư viện sách", href: "/books" },
  { icon: History, label: "Lịch sử", href: "#" },
  { icon: Sparkles, label: "AI Research", href: "/ai" },
  { icon: Puzzle, label: "Collections", href: "#" },
  { icon: Briefcase, label: "Dự án", href: "#" },
  { icon: Users, label: "Cộng đồng", href: "/communities" },
  { icon: Library, label: "Thư viện", href: "/library" },
];

const RECENT = [
  {
    label: "So sánh Stoicism và Phật giáo",
    tag: "Triết học",
  },
  {
    label: "Tóm tắt sách Sapiens của Harari",
    tag: "Học thuật",
  },
  {
    label: "Giải thích Transformer architecture",
    tag: "AI & ML",
  },
  {
    label: "So sánh GPT-4o vs Gemini 1.5 Pro",
    tag: "Tra cứu",
  },
  {
    label: "Lịch sử hình thành triều Nguyễn",
    tag: "Lịch sử",
  },
  {
    label: "Cognitive bias trong ra quyết định",
    tag: "Tâm lý học",
  },
  {
    label: "Sự khác biệt giữa SEO và SEM",
    tag: "Marketing",
  },
  {
    label: "Phân tích tác phẩm Chiến tranh và Hòa bình",
    tag: "Văn học",
  },
  {
    label: "Atomic Habits — key concepts",
    tag: "Học thuật",
  },
  {
    label: "So sánh React vs Vue vs Angular",
    tag: "Lập trình",
  },
  {
    label: "Kinh tế học hành vi là gì?",
    tag: "Kinh tế",
  },
  {
    label: "Tìm tài liệu về Deep Learning",
    tag: "AI & ML",
  },
];

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex-shrink-0 flex flex-col h-full transition-all duration-300 overflow-hidden border-r z-30",
        "fixed md:relative",
        open ? "w-[260px]" : "w-0 md:w-[52px]",
      )}
      style={{
        backgroundColor: "var(--bg-2)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className={cn("flex flex-col h-full", open ? "w-[260px]" : "w-[52px]", "overflow-hidden")}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 flex-shrink-0">
          {open && (
            <Link href="/" className="flex items-center gap-2 px-1">
              <span
                className="font-serif text-[15px] font-bold tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                Tàng <span style={{ color: "var(--gold)" }}>Kinh</span> Các
              </span>
            </Link>
          )}
          <button
            onClick={onToggle}
            className="p-1.5 rounded-lg transition-colors hover:bg-[var(--bg-3)] ml-auto flex-shrink-0"
            style={{ color: "var(--text-mute)" }}
            aria-label={open ? "Thu nhỏ sidebar" : "Mở rộng sidebar"}
          >
            {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-0.5 px-2 flex-shrink-0">
          {NAV_TOP.map(({ icon: Icon, label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex items-center gap-3 px-2 py-2 rounded-lg text-[13px] font-medium transition-colors",
                active
                  ? "font-semibold"
                  : "hover:bg-[var(--bg-3)]"
              )}
              style={{
                color: active ? "var(--text-primary)" : "var(--text-mute)",
                backgroundColor: active ? "var(--bg-3)" : undefined,
              }}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {open && <span className="truncate">{label}</span>}
            </Link>
          ))}

          {open && (
            <button
              className="flex items-center gap-3 px-2 py-2 rounded-lg text-[13px] transition-colors hover:bg-[var(--bg-3)] w-full text-left"
              style={{ color: "var(--text-mute)" }}
            >
              <MoreHorizontal className="w-4 h-4 flex-shrink-0" />
              <span>Thêm</span>
            </button>
          )}
        </nav>

        {/* Recent */}
        {open && (
          <div className="flex-1 overflow-y-auto mt-4 min-h-0">
            <div
              className="px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase"
              style={{ color: "var(--text-mute)" }}
            >
              Gần đây
            </div>
          <div className="flex flex-col gap-0 px-2">
              {RECENT.map((item) => (
                <button
                  key={item.label}
                  className="group text-left px-2 py-2 rounded-lg transition-colors hover:bg-[var(--bg-3)] w-full"
                >
                  <div
                    className="text-[13px] truncate leading-snug"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-[10px] mt-0.5 font-medium"
                    style={{ color: "var(--text-mute)" }}
                  >
                    {item.tag}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          className="flex-shrink-0 border-t px-3 py-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          {open ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #b89a5e, #7a6438)" }}
                >
                  A
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                    Người dùng
                  </div>
                  <div className="text-[10px]" style={{ color: "var(--text-mute)" }}>Miễn phí</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <ThemeToggle size="sm" />
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #b89a5e, #7a6438)" }}
              >
                A
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
