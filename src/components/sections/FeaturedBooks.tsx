import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Badge } from "@/components/ui/badge";
import { BOOKS } from "@/lib/data/books";

export function FeaturedBooks() {
  const featured = BOOKS.slice(0, 4);

  return (
    <section id="sach" className="py-24">
      <div className="max-w-container mx-auto px-6">
        <RevealWrapper className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="section-label">Thư viện sách</div>
            <h2 className="section-headline">Những cuốn sách<br />đáng để đọc.</h2>
          </div>
          <Link href="/books" className="group flex items-center gap-1.5 text-[13px] font-semibold text-gold hover:text-gold-light transition-colors">
            Xem tất cả <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((book, i) => (
            <RevealWrapper key={book.slug} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              <Link href={`/books/${book.slug}`}
                className="group card-base card-hover flex flex-col h-full overflow-hidden cursor-pointer block">
                {/* Cover */}
                <div className={`aspect-[3/4] bg-gradient-to-br ${book.coverGrad} flex items-center justify-center text-4xl`}>
                  {book.cover}
                </div>
                {/* Body */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="text-[13px] font-semibold text-ivory mb-1 leading-snug group-hover:text-gold transition-colors">{book.title}</div>
                  <div className="text-[11px] text-ivory-mute mb-3">{book.author}</div>
                  <Badge variant="gold" size="sm" className="self-start mb-3">{book.topic}</Badge>
                  <p className="text-[12px] text-ivory-mute leading-relaxed flex-1 mb-4 line-clamp-3">{book.whyRead}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="default" size="sm">{book.difficulty}</Badge>
                    <span className="text-[11px] text-ivory-mute">{book.pages} trang</span>
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
