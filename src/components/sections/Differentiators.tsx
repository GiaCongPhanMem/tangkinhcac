import { Search, Globe, Sparkles } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const CARDS = [
  {
    num: "01", Icon: Search, color: "bg-[rgba(124,45,62,0.15)]", iconColor: "text-burgundy-light",
    sub: "Discover", title: "Tìm đúng tri thức.",
    body: "Khám phá hệ sinh thái tri thức đầy đủ xung quanh bất kỳ chủ đề nào — không chỉ một câu trả lời.",
    items: ["Sách từ tác giả uy tín", "Tài liệu học thuật & chuyên môn", "Khóa học được kiểm chứng", "Tác giả & chuyên gia", "Collections được curate"],
    quote: null,
  },
  {
    num: "02", Icon: Globe, color: "bg-[rgba(184,154,94,0.1)]", iconColor: "text-gold",
    sub: "Connect", title: "Tìm nơi tri thức đang diễn ra.",
    body: "Một phần tri thức nằm trong những cuộc trò chuyện mà công cụ tìm kiếm thông thường khó bao quát.",
    items: ["Hội nhóm chuyên môn", "Diễn đàn học thuật", "Cộng đồng học tập realtime", "Knowledge Networks"],
    quote: '"Tri thức sống trong cộng đồng, không chỉ trong tài liệu."',
  },
  {
    num: "03", Icon: Sparkles, color: "bg-[rgba(90,120,184,0.12)]", iconColor: "text-blue-400",
    sub: "Research", title: "Dùng AI để đi sâu.",
    body: "AI là lớp trí tuệ của Tàng Kinh Các — không phải chatbot, mà là research assistant thực sự.",
    items: ["Explain & Summarize", "Compare sources", "Build Learning Path", "Find connections", "Suggest next questions"],
    quote: null,
  },
];

export function Differentiators() {
  return (
    <section id="kham-pha" className="py-24">
      <div className="max-w-container mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <div className="section-label">Ba khả năng cốt lõi</div>
          <h2 className="section-headline">Một nền tảng.<br />Ba loại giá trị.</h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <RevealWrapper key={c.num} delay={(i + 1) as 1 | 2 | 3}>
              <div className="group card-base card-hover p-9 h-full flex flex-col relative overflow-hidden">
                {/* hover line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-serif text-[52px] font-bold italic text-charcoal-4 leading-none mb-5 select-none">{c.num}</div>
                <div className={`w-11 h-11 rounded-xl ${c.color} flex items-center justify-center mb-4`}>
                  <c.Icon className={`w-5 h-5 ${c.iconColor}`} />
                </div>
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold mb-2">{c.sub}</div>
                <h3 className="font-serif text-[21px] font-bold text-ivory mb-3 leading-snug">{c.title}</h3>
                <p className="text-[14px] font-light text-ivory-dim leading-relaxed mb-5">{c.body}</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-[13px] text-ivory-mute">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />{it}
                    </li>
                  ))}
                </ul>
                {c.quote && (
                  <div className="mt-6 pt-5 border-t border-charcoal-4 text-[12px] italic text-ivory-mute leading-relaxed">{c.quote}</div>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
