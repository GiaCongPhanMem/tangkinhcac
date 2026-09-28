import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Sparkles, Users } from "lucide-react";
import { getBookBySlug, getRelatedBooks, BOOKS } from "@/lib/data/books";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const book = getBookBySlug(params.slug);
  if (!book) return { title: "Không tìm thấy" };
  return { title: `${book.title} — ${book.author}` };
}

export default function BookPage({ params }: Props) {
  const book = getBookBySlug(params.slug);
  if (!book) notFound();
  const related = getRelatedBooks(book);

  const diffColor = { Beginner: "text-green-400 bg-green-400/10 border-green-400/20", Intermediate: "text-gold bg-gold/10 border-gold/20", Advanced: "text-burgundy-light bg-burgundy/10 border-burgundy/20" }[book.difficulty];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-container mx-auto px-6">
        <Link href="/books" className="inline-flex items-center gap-2 text-[13px] text-ivory-mute hover:text-ivory transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />Thư viện sách
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Cover column */}
          <div className="flex flex-col gap-5">
            <div className={`aspect-[3/4] bg-gradient-to-br ${book.coverGrad} rounded-2xl flex items-center justify-center text-7xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}>
              {book.cover}
            </div>
            <div className="flex flex-col gap-3">
              {book.buyLinks.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="md" className="w-full justify-between">
                    Mua tại {l.label}<ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </a>
              ))}
              <Button asChild variant="gold" size="md">
                <Link href={`/ai?q=${encodeURIComponent(book.title)}`}>
                  <Sparkles className="w-4 h-4" />Hỏi AI về cuốn sách này
                </Link>
              </Button>
            </div>

            {/* Meta */}
            <div className="card-base p-5 flex flex-col gap-3">
              {[["Tác giả", book.author], ["Năm xuất bản", String(book.year)], ["Số trang", `${book.pages} trang`]].map(([k, v]) => (
                <div key={k} className="flex justify-between text-[13px]">
                  <span className="text-ivory-mute">{k}</span>
                  <span className="text-ivory-dim font-medium">{v}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-ivory-mute">Độ khó</span>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${diffColor}`}>{book.difficulty}</span>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div>
            <Badge variant="gold" size="sm" className="mb-4">{book.topic}</Badge>
            <h1 className="font-serif text-4xl font-bold text-ivory mb-2 leading-tight">{book.title}</h1>
            <div className="text-[15px] text-ivory-mute mb-8">{book.author}</div>

            <div className="flex flex-col gap-7">
              <Section title="Về cuốn sách">
                <p className="text-[15px] text-ivory-dim leading-[1.85]">{book.description}</p>
              </Section>
              <Section title="Tại sao nên đọc?">
                <p className="text-[15px] text-ivory-dim leading-[1.85]">{book.whyRead}</p>
              </Section>
              <Section title="Dành cho ai?">
                <p className="text-[15px] text-ivory-dim leading-[1.85]">{book.whoFor}</p>
              </Section>

              {related.length > 0 && (
                <Section title="Sách liên quan">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/books/${r.slug}`}
                        className="group card-base card-hover overflow-hidden">
                        <div className={`aspect-[3/4] bg-gradient-to-br ${r.coverGrad} flex items-center justify-center text-3xl`}>{r.cover}</div>
                        <div className="p-3">
                          <div className="text-[12px] font-semibold text-ivory group-hover:text-gold transition-colors leading-snug">{r.title}</div>
                          <div className="text-[10px] text-ivory-mute mt-0.5">{r.author}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4 pb-3 border-b border-charcoal-4">{title}</div>
      {children}
    </div>
  );
}
