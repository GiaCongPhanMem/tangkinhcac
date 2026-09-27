"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Sparkles, BookOpen, FileText, GraduationCap, Users, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/Tabs";
import type { SearchResult } from "@/lib/data/search";

interface Props { query: string; results: SearchResult | null; }

export function SearchPageClient({ query, results }: Props) {
  const [input, setInput] = useState(query);
  const [displayText, setDisplayText] = useState("");
  const router = useRouter();

  useEffect(() => { setInput(query); }, [query]);

  useEffect(() => {
    if (!results) return;
    setDisplayText("");
    let i = 0;
    const txt = results.aiOverview;
    const id = setInterval(() => { setDisplayText(txt.slice(0, ++i)); if (i >= txt.length) clearInterval(id); }, 14);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results?.aiOverview]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = input.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  // Empty state
  if (!results) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center pt-16">
            <div className="text-5xl mb-6">🔍</div>
            <h1 className="font-serif text-4xl font-bold text-ivory mb-4">Tìm kiếm tri thức</h1>
            <p className="text-ivory-dim mb-10 text-[15px] leading-relaxed">
              Nhập bất kỳ chủ đề, câu hỏi hoặc lĩnh vực bạn muốn khám phá.
            </p>
            <form onSubmit={submit} className="flex items-center bg-charcoal-2 border border-charcoal-4 rounded-2xl pl-5 pr-1.5 py-1.5 gap-3 focus-within:border-gold-dim transition-all">
              <Search className="w-5 h-5 text-ivory-mute" />
              <input autoFocus value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Bạn đang muốn tìm hiểu điều gì?"
                className="flex-1 bg-transparent outline-none text-ivory placeholder:text-ivory-mute text-[15px]" />
              <Button type="submit" size="sm" className="rounded-xl">Khám phá</Button>
            </form>
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {["Triết học Stoicism","Digital Marketing","AI & Machine Learning","Tâm lý học hành vi"].map((s) => (
                <button key={s} onClick={() => router.push(`/search?q=${encodeURIComponent(s)}`)}
                  className="text-xs text-ivory-mute bg-charcoal-3 border border-charcoal-4 rounded-full px-3 py-1.5 hover:border-gold-dim hover:text-ivory transition-all">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-charcoal-2">
      <div className="max-w-container mx-auto px-6 pt-6">
        {/* Top bar */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-ivory-mute hover:text-ivory transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <form onSubmit={submit} className="flex-1 max-w-2xl">
            <div className="flex items-center bg-charcoal-3 border border-charcoal-4 rounded-xl pl-4 pr-1.5 py-1.5 gap-3 focus-within:border-gold-dim transition-all">
              <Search className="w-4 h-4 text-ivory-mute flex-shrink-0" />
              <input value={input} onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-ivory placeholder:text-ivory-mute text-sm"
                placeholder="Tìm kiếm tri thức..." />
              <Button type="submit" size="sm" variant="primary" className="rounded-lg">Tìm</Button>
            </div>
          </form>
          <Button asChild variant="gold" size="sm" className="hidden sm:flex flex-shrink-0">
            <Link href={`/ai?q=${encodeURIComponent(query)}`}><Sparkles className="w-3.5 h-3.5" />AI Research</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-7 items-start">
          {/* ── Main column ── */}
          <div className="flex flex-col gap-5">
            {/* AI Overview */}
            <div className="card-base p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute">AI Overview</span>
              </div>
              <p className="text-[14px] text-ivory-dim leading-[1.8]">
                {displayText}
                {displayText.length < results.aiOverview.length && <span className="typing-cursor" />}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: BookOpen, label: "Cuốn sách", value: results.stats.books },
                { icon: FileText, label: "Tài liệu", value: results.stats.documents },
                { icon: GraduationCap, label: "Khóa học", value: results.stats.courses },
                { icon: Users, label: "Cộng đồng", value: results.stats.communities },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="card-base p-4 text-center">
                  <Icon className="w-4 h-4 text-ivory-mute mx-auto mb-2" />
                  <div className="font-serif text-3xl font-bold text-gold">{value}</div>
                  <div className="text-[11px] text-ivory-mute mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Tabbed results */}
            <div className="card-base p-6">
              <Tabs
                tabs={[
                  { id: "books", label: "📚 Sách", count: results.stats.books },
                  { id: "docs", label: "📄 Tài liệu", count: results.stats.documents },
                  { id: "courses", label: "🎓 Khóa học", count: results.stats.courses },
                  { id: "communities", label: "👥 Cộng đồng", count: results.stats.communities },
                ]}
              >
                {(tab) => (
                  <>
                    {tab === "books" && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {results.books.map((b) => (
                          <Link key={b.slug} href={`/books/${b.slug}`}
                            className="group bg-charcoal-3 rounded-xl overflow-hidden hover:border-gold-dim border border-charcoal-4 transition-all hover:-translate-y-0.5">
                            <div className={`aspect-[3/4] bg-gradient-to-br ${b.coverGrad} flex items-center justify-center text-3xl`}>{b.cover}</div>
                            <div className="p-3">
                              <div className="text-[12px] font-semibold text-ivory group-hover:text-gold transition-colors leading-snug">{b.title}</div>
                              <div className="text-[10px] text-ivory-mute mt-0.5">{b.author}</div>
                              <Badge variant="gold" size="sm" className="mt-2">{b.difficulty}</Badge>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    {tab === "docs" && (
                      <div className="flex flex-col gap-3">
                        {results.documents.map((d) => (
                          <a key={d.id} href={d.url} target="_blank" rel="noopener noreferrer"
                            className="group flex items-start gap-4 p-4 bg-charcoal-3 rounded-xl border border-charcoal-4 hover:border-gold-dim transition-all">
                            <div className="w-8 h-8 rounded-lg bg-charcoal-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FileText className="w-3.5 h-3.5 text-ivory-mute" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-ivory group-hover:text-gold transition-colors">{d.title}</div>
                              <div className="text-[11px] text-ivory-mute mt-0.5">{d.source}</div>
                              <p className="text-[12px] text-ivory-mute mt-1.5 leading-relaxed line-clamp-2">{d.excerpt}</p>
                            </div>
                            <Badge variant="default" size="sm" className="flex-shrink-0">{d.type}</Badge>
                          </a>
                        ))}
                      </div>
                    )}
                    {tab === "courses" && (
                      <div className="flex flex-col gap-3">
                        {results.courses.map((c) => (
                          <a key={c.id} href={c.url} target="_blank" rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-4 bg-charcoal-3 rounded-xl border border-charcoal-4 hover:border-gold-dim transition-all">
                            <div className="w-9 h-9 rounded-xl bg-charcoal-4 flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="w-4 h-4 text-ivory-mute" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-ivory group-hover:text-gold transition-colors">{c.title}</div>
                              <div className="text-[11px] text-ivory-mute mt-0.5">{c.provider} · {c.duration}</div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                              <Badge variant="default" size="sm">{c.level}</Badge>
                              <Badge variant={c.free ? "active" : "default"} size="sm">{c.free ? "Free" : "Paid"}</Badge>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                    {tab === "communities" && (
                      <div className="flex flex-col gap-3">
                        {results.communities.map((c) => (
                          <Link key={c.slug} href={`/communities/${c.slug}`}
                            className="group flex items-start gap-4 p-4 bg-charcoal-3 rounded-xl border border-charcoal-4 hover:border-gold-dim transition-all">
                            <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.5)" }} />
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-semibold text-ivory group-hover:text-gold transition-colors">{c.name}</div>
                              <div className="text-[11px] text-ivory-mute mt-0.5">{c.topic}</div>
                              <div className="text-[11px] text-ivory-mute mt-1">{(c.members / 1000).toFixed(1)}K members · {c.discussionsThisWeek} discussions/week</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-ivory-mute flex-shrink-0 mt-1" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </Tabs>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-4 xl:sticky xl:top-20">
            {/* Related topics */}
            <div className="card-base p-5">
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4">🧠 Chủ đề liên quan</div>
              <div className="flex flex-wrap gap-2">
                {results.topics.map((t) => (
                  <button key={t} onClick={() => router.push(`/search?q=${encodeURIComponent(t)}`)}
                    className="text-[11px] text-ivory-dim bg-charcoal-3 border border-charcoal-4 rounded-full px-3 py-1.5 hover:border-gold-dim hover:text-ivory transition-all">
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Learning path */}
            <div className="rounded-2xl p-5 border border-[rgba(184,154,94,0.15)]"
              style={{ background: "linear-gradient(135deg,#242420 0%,rgba(184,154,94,0.04) 100%)" }}>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold mb-4">🗺️ Learning Path</div>
              <div className="flex flex-col gap-3">
                {results.learningPath.map((step) => (
                  <div key={step.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[rgba(184,154,94,0.15)] border border-[rgba(184,154,94,0.3)] flex items-center justify-center text-[10px] font-bold text-gold flex-shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-ivory">{step.title}</div>
                      <div className="text-[11px] text-ivory-mute mt-0.5 leading-relaxed">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next questions */}
            <div className="card-base p-5">
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4">💡 Câu hỏi tiếp theo</div>
              <div className="flex flex-col gap-2">
                {results.suggestedQuestions.map((q) => (
                  <button key={q} onClick={() => router.push(`/ai?q=${encodeURIComponent(q)}`)}
                    className="group flex items-center gap-2.5 p-3 bg-charcoal-3 rounded-xl border border-charcoal-4 hover:border-gold-dim transition-all text-left">
                    <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="text-[12px] text-ivory-dim group-hover:text-ivory transition-colors leading-relaxed">{q}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* AI CTA */}
            <Button asChild variant="gold" size="md" className="w-full">
              <Link href={`/ai?q=${encodeURIComponent(query)}`}>
                <Sparkles className="w-4 h-4" />Nghiên cứu sâu hơn với AI
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
