import Link from "next/link";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { TOPICS } from "@/lib/data/topics";

export function KnowledgePulse() {
  const featured = TOPICS.slice(0, 6);

  return (
    <section id="knowledge-pulse" className="py-24 bg-charcoal-2">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <RevealWrapper>
            <div className="section-label">Knowledge Pulse</div>
            <h2 className="section-headline">
              Những chủ đề tri thức<br /><em className="italic text-gold">đang được quan tâm.</em>
            </h2>
            <p className="section-sub">
              Tàng Kinh Các là hệ sinh thái tri thức sống — luôn cập nhật những gì cộng đồng đang nghiên cứu.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={1} className="flex-shrink-0">
            <div className="flex items-center gap-2 text-[13px] text-green-400 font-medium">
              <span className="active-dot animate-pulse-dot" />
              Đang hoạt động
            </div>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((topic, i) => (
            <RevealWrapper key={topic.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Link href={`/search?q=${encodeURIComponent(topic.name)}`}
                className="group card-base p-6 flex flex-col gap-4 hover:border-[rgba(184,154,94,0.2)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer block">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{topic.emoji}</span>
                  <div className="flex items-center gap-1.5 text-[11px] text-green-400 font-semibold">
                    <span className="active-dot w-1.5 h-1.5" />Active
                  </div>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-ivory mb-1 group-hover:text-gold transition-colors">{topic.name}</div>
                  <div className="text-[12px] text-ivory-mute leading-snug">{topic.description}</div>
                </div>
                <div className="flex gap-3 text-[12px] text-ivory-mute flex-wrap">
                  <span><strong className="text-ivory-dim">{topic.resources}</strong> resources</span>
                  <span><strong className="text-ivory-dim">{topic.communities}</strong> communities</span>
                  <span><strong className="text-ivory-dim">{topic.discussions.toLocaleString()}</strong> discussions</span>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
