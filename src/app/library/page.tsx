import type { Metadata } from "next";
import Link from "next/link";
import { Library, BookOpen, FileText, GraduationCap, Users, FolderOpen, Lock } from "lucide-react";
import { BOOKS } from "@/lib/data/books";
import { COMMUNITIES } from "@/lib/data/communities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Thư viện cá nhân" };

export default function LibraryPage() {
  const savedBooks = BOOKS.slice(0, 4);
  const savedCommunities = COMMUNITIES.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
              <Library className="w-3.5 h-3.5" />Thư viện cá nhân
            </div>
            <h1 className="font-serif text-4xl font-bold text-ivory mb-3">Không gian tri thức<br />của bạn.</h1>
            <p className="text-[15px] text-ivory-dim max-w-[420px] leading-relaxed">
              Lưu sách, tài liệu, khóa học và cộng đồng — tạo collections cá nhân hóa.
            </p>
          </div>
          <div className="flex items-center gap-3 p-4 card-base">
            <Lock className="w-4 h-4 text-ivory-mute" />
            <div>
              <div className="text-[13px] font-semibold text-ivory">Đăng nhập để lưu</div>
              <div className="text-[11px] text-ivory-mute">Sync across devices</div>
            </div>
            <Button size="sm" variant="primary" className="ml-2">Đăng nhập</Button>
          </div>
        </div>

        {/* Tabs layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
          {/* Sidebar nav */}
          <nav className="flex flex-row lg:flex-col gap-1">
            {[
              { icon: BookOpen, label: "Sách đã lưu", count: 4 },
              { icon: FileText, label: "Tài liệu", count: 12 },
              { icon: GraduationCap, label: "Khóa học", count: 3 },
              { icon: Users, label: "Cộng đồng", count: 3 },
              { icon: FolderOpen, label: "Collections", count: 2 },
            ].map(({ icon: Icon, label, count }, i) => (
              <button key={label}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all text-left ${i === 0 ? "bg-charcoal-3 border border-charcoal-4 text-ivory" : "text-ivory-mute hover:text-ivory hover:bg-charcoal-3"}`}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 truncate">{label}</span>
                <span className="text-[11px] bg-charcoal-4 px-1.5 py-0.5 rounded-md text-ivory-mute">{count}</span>
              </button>
            ))}
          </nav>

          {/* Content */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[17px] font-semibold text-ivory">Sách đã lưu</h2>
              <Link href="/books" className="text-[12px] text-gold hover:text-gold-light transition-colors">+ Thêm sách</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {savedBooks.map((book) => (
                <Link key={book.slug} href={`/books/${book.slug}`}
                  className="group card-base card-hover flex flex-col overflow-hidden">
                  <div className={`aspect-[3/4] bg-gradient-to-br ${book.coverGrad} flex items-center justify-center text-4xl`}>{book.cover}</div>
                  <div className="p-3 flex flex-col flex-1">
                    <div className="text-[12px] font-semibold text-ivory group-hover:text-gold transition-colors leading-snug">{book.title}</div>
                    <div className="text-[10px] text-ivory-mute mt-1">{book.author}</div>
                    <Badge variant="gold" size="sm" className="mt-2 self-start">{book.difficulty}</Badge>
                  </div>
                </Link>
              ))}
            </div>

            {/* Collections preview */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[17px] font-semibold text-ivory">Collections</h2>
                <button className="text-[12px] text-gold hover:text-gold-light transition-colors">+ Tạo collection</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "AI Engineering Library", desc: "Sách và tài liệu về AI, ML và engineering", items: "12 sách · 28 tài liệu · 4 khóa học", emoji: "🤖" },
                  { name: "Stoicism & Philosophy", desc: "Hành trình nghiên cứu triết học Stoic", items: "6 sách · 8 tài liệu · 2 cộng đồng", emoji: "🏛️" },
                ].map((col) => (
                  <div key={col.name} className="card-base card-hover p-6 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-charcoal-3 border border-charcoal-4 flex items-center justify-center text-xl">{col.emoji}</div>
                      <div>
                        <div className="text-[14px] font-semibold text-ivory">{col.name}</div>
                        <div className="text-[11px] text-ivory-mute">{col.items}</div>
                      </div>
                    </div>
                    <p className="text-[12px] text-ivory-mute leading-relaxed">{col.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
