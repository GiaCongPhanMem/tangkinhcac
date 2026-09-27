import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMMUNITIES } from "@/lib/data/communities";

export const metadata: Metadata = { title: "Cộng đồng tri thức" };

function fmtNum(n: number) { return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n); }

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-12">
          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">Cộng đồng tri thức</div>
          <h1 className="font-serif text-4xl font-bold text-ivory mb-4">Nơi tri thức<br />đang diễn ra.</h1>
          <p className="text-[15px] text-ivory-dim max-w-[480px] leading-relaxed">
            Kết nối với những người đang nghiên cứu cùng lĩnh vực — tìm cộng đồng, thảo luận và học hỏi lẫn nhau.
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-2 text-[13px] text-green-400 font-medium mb-8">
          <span className="active-dot animate-pulse-dot" />
          {COMMUNITIES.reduce((s, c) => s + c.discussionsThisWeek, 0)} discussions đang diễn ra tuần này
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMUNITIES.map((c) => (
            <Link key={c.slug} href={`/communities/${c.slug}`}
              className="group card-base card-hover p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="active-dot w-1.5 h-1.5" />
                    <span className="text-[10px] text-green-400 font-semibold">Active now</span>
                    <span className="text-[11px] text-ivory-mute ml-auto">{c.platform}</span>
                  </div>
                  <div className="text-[15px] font-semibold text-ivory group-hover:text-gold transition-colors leading-snug">{c.name}</div>
                  <div className="text-[12px] text-ivory-mute mt-1">{c.topic}</div>
                </div>
              </div>

              <p className="text-[13px] text-ivory-mute leading-relaxed line-clamp-2">{c.description}</p>

              <div className="flex gap-4 text-[12px] text-ivory-mute">
                <span><strong className="text-ivory-dim">{fmtNum(c.members)}</strong> thành viên</span>
                <span><strong className="text-ivory-dim">{c.discussionsThisWeek}</strong> /tuần</span>
              </div>

              <div className="pt-3 border-t border-charcoal-4">
                <div className="text-[11px] font-semibold text-ivory-mute mb-2">Đang thảo luận:</div>
                <div className="text-[11px] text-ivory-dim leading-relaxed line-clamp-1 italic">
                  &ldquo;{c.trendingDiscussions[0]}&rdquo;
                </div>
              </div>

              <div className="flex items-center gap-1 text-[13px] font-semibold text-gold group-hover:gap-2 transition-all">
                Khám phá <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
