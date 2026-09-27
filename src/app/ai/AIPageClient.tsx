"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Search, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSearchResults } from "@/lib/data/knowledge";

const EXAMPLES = [
  "Digital Marketing và consumer psychology liên quan như thế nào?",
  "Stoicism khác Phật giáo ở điểm nào trong thực hành?",
  "Làm thế nào để bắt đầu học Machine Learning hiệu quả?",
  "Tâm lý học hành vi ứng dụng vào product design như thế nào?",
];

export function AIPageClient({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [submitted, setSubmitted] = useState(!!initialQuery);
  const results = submitted && query ? getSearchResults(query) : null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) setSubmitted(true);
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header band */}
      <div className="bg-charcoal-2 border-b border-charcoal-4 py-10">
        <div className="max-w-container mx-auto px-6">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
            <Sparkles className="w-3.5 h-3.5" />AI Research
          </div>
          <h1 className="font-serif text-3xl font-bold text-ivory mb-5">
            Nghiên cứu sâu hơn với AI.
          </h1>
          <form onSubmit={submit} className="max-w-2xl">
            <div className="flex items-center bg-charcoal-3 border border-charcoal-4 rounded-2xl pl-5 pr-1.5 py-1.5 gap-3 focus-within:border-gold-dim transition-all">
              <Sparkles className="w-4.5 h-4.5 text-gold flex-shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Đặt câu hỏi nghiên cứu của bạn..."
                className="flex-1 bg-transparent outline-none text-ivory placeholder:text-ivory-mute text-[15px]"
                autoFocus={!initialQuery}
              />
              <Button type="submit" size="sm" variant="primary" className="rounded-xl px-5">Nghiên cứu</Button>
            </div>
          </form>
          {!submitted && (
            <div className="flex flex-wrap gap-2 mt-4">
              {EXAMPLES.map((ex) => (
                <button key={ex} onClick={() => { setQuery(ex); setSubmitted(true); }}
                  className="text-[11px] text-ivory-mute bg-charcoal-4 border border-charcoal-5 rounded-full px-3 py-1.5 hover:border-gold-dim hover:text-ivory-dim transition-all text-left">
                  {ex}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="max-w-container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-7">
            {/* Main */}
            <div className="flex flex-col gap-5">
              {/* AI Answer */}
              <div className="card-base p-7">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute">AI Research Overview</span>
                </div>
                <div className="text-[15px] text-ivory-dim leading-[1.9] mb-6">{results.aiOverview}</div>

                {/* Key findings */}
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4 pt-5 border-t border-charcoal-4">
                  💡 Key Findings
                </div>
                <ul className="flex flex-col gap-3">
                  {results.learningPath.slice(0, 4).map((step) => (
                    <li key={step.step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[rgba(184,154,94,0.15)] border border-[rgba(184,154,94,0.25)] flex items-center justify-center text-[9px] font-bold text-gold flex-shrink-0 mt-0.5">{step.step}</span>
                      <div>
                        <div className="text-[13px] font-semibold text-ivory">{step.title}</div>
                        <div className="text-[12px] text-ivory-mute mt-0.5 leading-relaxed">{step.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sources */}
              <div className="card-base p-6">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4">📎 Nguồn & Tài liệu</div>
                <div className="flex flex-col gap-3">
                  {results.documents.map((d) => (
                    <a key={d.id} href={d.url} target="_blank" rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-3 bg-charcoal-3 rounded-xl border border-charcoal-4 hover:border-gold-dim transition-all">
                      <div className="w-7 h-7 rounded-lg bg-charcoal-4 flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px]">
                        {{paper:"📄",article:"📰",guide:"📋",report:"📊"}[d.type] ?? "📄"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-semibold text-ivory group-hover:text-gold transition-colors">{d.title}</div>
                        <div className="text-[11px] text-ivory-mute">{d.source}</div>
                      </div>
                      <Badge variant="default" size="sm" className="flex-shrink-0">{d.type}</Badge>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recommended Books */}
              <div className="card-base p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute">📚 Sách được đề xuất</div>
                  <Link href={`/search?q=${encodeURIComponent(query)}`} className="text-[11px] text-gold hover:text-gold-light flex items-center gap-1 transition-colors">
                    Xem tất cả <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {results.books.slice(0, 3).map((b) => (
                    <Link key={b.slug} href={`/books/${b.slug}`}
                      className="group bg-charcoal-3 rounded-xl overflow-hidden border border-charcoal-4 hover:border-gold-dim transition-all hover:-translate-y-0.5">
                      <div className={`aspect-[3/4] bg-gradient-to-br ${b.coverGrad} flex items-center justify-center text-2xl`}>{b.cover}</div>
                      <div className="p-2.5">
                        <div className="text-[11px] font-semibold text-ivory group-hover:text-gold transition-colors leading-tight">{b.title}</div>
                        <div className="text-[10px] text-ivory-mute mt-0.5">{b.author}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4 xl:sticky xl:top-20">
              {/* Related topics */}
              <div className="card-base p-5">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4">🧠 Chủ đề liên quan</div>
                <div className="flex flex-wrap gap-2">
                  {results.topics.map((t) => (
                    <button key={t} onClick={() => { setQuery(t); setSubmitted(true); }}
                      className="text-[11px] text-ivory-dim bg-charcoal-3 border border-charcoal-4 rounded-full px-2.5 py-1 hover:border-gold-dim hover:text-ivory transition-all">
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Suggested next questions */}
              <div className="card-base p-5">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4">💭 Câu hỏi tiếp theo</div>
                <div className="flex flex-col gap-2">
                  {results.suggestedQuestions.map((q) => (
                    <button key={q} onClick={() => { setQuery(q); setSubmitted(true); }}
                      className="group text-left p-3 bg-charcoal-3 rounded-xl border border-charcoal-4 hover:border-gold-dim transition-all flex items-start gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[12px] text-ivory-dim group-hover:text-ivory transition-colors leading-relaxed">{q}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div className="card-base p-5">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4">👥 Cộng đồng liên quan</div>
                <div className="flex flex-col gap-2.5">
                  {results.communities.slice(0, 2).map((c) => (
                    <Link key={c.slug} href={`/communities/${c.slug}`}
                      className="group flex items-center gap-2.5 p-3 bg-charcoal-3 rounded-xl border border-charcoal-4 hover:border-gold-dim transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" style={{ boxShadow: "0 0 4px rgba(74,222,128,0.5)" }} />
                      <span className="text-[12px] text-ivory-dim group-hover:text-ivory flex-1 transition-colors leading-snug">{c.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-ivory-mute" />
                    </Link>
                  ))}
                </div>
              </div>

              <Button asChild variant="secondary" size="md">
                <Link href={`/search?q=${encodeURIComponent(query)}`}>
                  <Search className="w-4 h-4" />Xem tất cả kết quả
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Empty: show capabilities */}
      {!results && (
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: "🔍", title: "Explain & Summarize", desc: "AI giải thích và tóm tắt bất kỳ chủ đề nào một cách rõ ràng." },
              { icon: "⚖️", title: "Compare Sources", desc: "So sánh các quan điểm từ nhiều nguồn khác nhau." },
              { icon: "🗺️", title: "Build Learning Path", desc: "Xây hành trình học cá nhân hóa từ beginner đến advanced." },
            ].map((c) => (
              <div key={c.title} className="card-base p-6 text-center">
                <div className="text-3xl mb-3">{c.icon}</div>
                <div className="text-[14px] font-semibold text-ivory mb-2">{c.title}</div>
                <p className="text-[12px] text-ivory-mute leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
