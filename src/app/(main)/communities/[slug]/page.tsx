import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Users, MessageSquare, Sparkles, ExternalLink } from "lucide-react";
import { getCommunityBySlug, COMMUNITIES } from "@/lib/data/communities";
import { BOOKS } from "@/lib/data/books";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return COMMUNITIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getCommunityBySlug(params.slug);
  return { title: c ? `${c.name}` : "Không tìm thấy" };
}

function fmtNum(n: number) { return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n); }

export default function CommunityPage({ params }: Props) {
  const community = getCommunityBySlug(params.slug);
  if (!community) notFound();

  const relatedBooks = community.relatedBookSlugs
    .map((s) => BOOKS.find((b) => b.slug === s))
    .filter(Boolean) as typeof BOOKS;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-container mx-auto px-6">
        <Link href="/communities" className="inline-flex items-center gap-2 text-[13px] text-ivory-mute hover:text-ivory transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />Cộng đồng
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* Main */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="active-dot" />
              <span className="text-[11px] text-green-400 font-semibold">Active now</span>
              <Badge variant="default" size="sm" className="ml-2">{community.platform}</Badge>
            </div>
            <h1 className="font-serif text-4xl font-bold text-ivory mb-2">{community.name}</h1>
            <div className="text-[14px] text-gold mb-6">{community.topic}</div>
            <p className="text-[15px] text-ivory-dim leading-[1.85] mb-8">{community.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: Users, label: "Thành viên", value: fmtNum(community.members) },
                { icon: MessageSquare, label: "Discussions/tuần", value: String(community.discussionsThisWeek) },
                { icon: MessageSquare, label: "Chủ đề", value: String(community.relatedTopics.length) },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="card-base p-4 text-center">
                  <Icon className="w-4 h-4 text-ivory-mute mx-auto mb-2" />
                  <div className="font-serif text-2xl font-bold text-gold">{value}</div>
                  <div className="text-[11px] text-ivory-mute mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Trending discussions */}
            <div className="mb-8">
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-5 pb-3 border-b border-charcoal-4">
                🔥 Đang thảo luận
              </div>
              <div className="flex flex-col gap-3">
                {community.trendingDiscussions.map((d, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 card-base card-hover cursor-pointer">
                    <div className="font-serif text-2xl font-bold text-charcoal-4 leading-none w-8 flex-shrink-0">{i + 1}</div>
                    <div>
                      <div className="text-[13px] font-semibold text-ivory leading-snug">{d}</div>
                      <div className="text-[11px] text-ivory-mute mt-1">{community.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related books */}
            {relatedBooks.length > 0 && (
              <div>
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-5 pb-3 border-b border-charcoal-4">
                  📚 Sách được đề xuất trong cộng đồng
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {relatedBooks.map((b) => (
                    <Link key={b.slug} href={`/books/${b.slug}`}
                      className="group card-base card-hover overflow-hidden">
                      <div className={`aspect-[3/4] bg-gradient-to-br ${b.coverGrad} flex items-center justify-center text-3xl`}>{b.cover}</div>
                      <div className="p-3">
                        <div className="text-[12px] font-semibold text-ivory group-hover:text-gold transition-colors leading-snug">{b.title}</div>
                        <div className="text-[10px] text-ivory-mute mt-0.5">{b.author}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-20">
            <div className="card-base p-6">
              <Button variant="primary" size="md" className="w-full mb-3">
                <ExternalLink className="w-4 h-4" />Tham gia cộng đồng
              </Button>
              <Button asChild variant="gold" size="md" className="w-full">
                <Link href={`/ai?q=${encodeURIComponent(community.topic)}`}>
                  <Sparkles className="w-4 h-4" />Nghiên cứu chủ đề
                </Link>
              </Button>
            </div>

            <div className="card-base p-5">
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ivory-mute mb-4">🏷️ Chủ đề</div>
              <div className="flex flex-wrap gap-2">
                {community.relatedTopics.map((t) => (
                  <Link key={t} href={`/search?q=${encodeURIComponent(t)}`}>
                    <Badge variant="topic" size="md">{t}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
