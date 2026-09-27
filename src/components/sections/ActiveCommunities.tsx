import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { COMMUNITIES } from "@/lib/data/communities";

function fmtNum(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n);
}

export function ActiveCommunities() {
  const featured = COMMUNITIES.slice(0, 3);

  return (
    <section id="cong-dong" className="py-24 bg-charcoal-2">
      <div className="max-w-container mx-auto px-6">
        <RevealWrapper className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="section-label">Cộng đồng tri thức</div>
            <h2 className="section-headline">Nơi tri thức<br /><em className="italic text-gold">đang diễn ra.</em></h2>
            <p className="section-sub">Tìm những người đang nghiên cứu cùng chủ đề với bạn.</p>
          </div>
          <Link href="/communities"
            className="group flex items-center gap-1.5 text-[13px] font-semibold text-gold hover:text-gold-light transition-colors flex-shrink-0">
            Xem tất cả <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((c, i) => (
            <RevealWrapper key={c.slug} delay={(i + 1) as 1 | 2 | 3}>
              <Link href={`/communities/${c.slug}`}
                className="group card-base card-hover p-6 flex flex-col gap-4 cursor-pointer block">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex items-center gap-1.5 text-[11px] text-green-400 font-semibold">
                        <span className="active-dot w-1.5 h-1.5" />Active now
                      </div>
                    </div>
                    <div className="text-[15px] font-semibold text-ivory group-hover:text-gold transition-colors leading-snug">{c.name}</div>
                    <div className="text-[12px] text-ivory-mute mt-1">{c.topic}</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-charcoal-3 border border-charcoal-4 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4.5 h-4.5 text-ivory-mute" />
                  </div>
                </div>

                <p className="text-[13px] text-ivory-mute leading-relaxed line-clamp-2">{c.description}</p>

                <div className="flex gap-4 text-[12px] text-ivory-mute">
                  <span><strong className="text-ivory-dim">{fmtNum(c.members)}</strong> thành viên</span>
                  <span><strong className="text-ivory-dim">{c.discussionsThisWeek}</strong> discussions/tuần</span>
                </div>

                <div className="flex items-center gap-1 text-[13px] font-semibold text-gold group-hover:gap-2 transition-all">
                  Khám phá <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
