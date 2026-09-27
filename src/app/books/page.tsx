import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { BOOKS } from "@/lib/data/books";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Thư viện sách" };

const TOPICS = ["Tất cả", "Triết học Stoicism", "Tâm lý học hành vi", "Phát triển bản thân", "Marketing", "Kinh doanh & Startup", "Lịch sử", "Năng suất", "Product & UX"];

export default function BooksPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">Thư viện sách</div>
          <h1 className="font-serif text-4xl font-bold text-ivory mb-4">Những cuốn sách<br />đáng để đọc.</h1>
          <p className="text-[15px] text-ivory-dim max-w-[480px] leading-relaxed">
            Không chỉ là danh sách — mỗi cuốn sách đều có lý do tại sao bạn nên đọc và dành cho ai.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TOPICS.map((t) => (
            <button key={t}
              className="text-[12px] text-ivory-mute bg-charcoal-3 border border-charcoal-4 rounded-full px-3.5 py-1.5 hover:border-gold-dim hover:text-ivory transition-all first:bg-charcoal-4 first:text-ivory first:border-charcoal-5">
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {BOOKS.map((book) => (
            <Link key={book.slug} href={`/books/${book.slug}`}
              className="group card-base card-hover flex flex-col h-full overflow-hidden">
              <div className={`aspect-[3/4] bg-gradient-to-br ${book.coverGrad} flex items-center justify-center text-4xl`}>
                {book.cover}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="text-[13px] font-semibold text-ivory group-hover:text-gold transition-colors mb-1 leading-snug">{book.title}</div>
                <div className="text-[11px] text-ivory-mute mb-3">{book.author}</div>
                <Badge variant="gold" size="sm" className="self-start mb-3">{book.topic}</Badge>
                <p className="text-[12px] text-ivory-mute leading-relaxed flex-1 line-clamp-3">{book.whyRead}</p>
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="default" size="sm">{book.difficulty}</Badge>
                  <span className="text-[11px] text-ivory-mute">{book.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
