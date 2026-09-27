"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Search, Sparkles, Users, Library } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/", icon: Compass, label: "Khám phá", exact: true },
  { href: "/search", icon: Search, label: "Tìm kiếm" },
  { href: "/ai", icon: Sparkles, label: "AI" },
  { href: "/communities", icon: Users, label: "Cộng đồng" },
  { href: "/library", icon: Library, label: "Thư viện" },
];

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t"
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "var(--color-border)",
      }}
      aria-label="Navigation"
    >
      <div className="flex justify-around py-2">
        {ITEMS.map(({ href, icon: Icon, label, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 text-[10px] font-medium transition-colors"
              )}
              style={{ color: active ? "var(--gold)" : "var(--text-mute)" }}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
