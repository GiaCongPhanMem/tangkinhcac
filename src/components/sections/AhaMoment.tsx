import Link from "next/link";
import { Sparkles } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";

const FEATURES = [
  { icon: "📚", title: "Sách & tài liệu được curate", desc: "Đúng nguồn, đúng lúc — không phải mọi cuốn sách, mà là những cuốn phù hợp nhất cho bạn." },
  { icon: "👥", title: "Cộng đồng đang hoạt động", desc: "Kết nối với người đang nghiên cứu cùng chủ đề ngay lúc này." },
  { icon: "🗺️", title: "Learning path cá nhân hóa", desc: "AI xây hành trình học từ beginner đến advanced theo mục tiêu của bạn." },
  { icon: "🧠", title: "Chủ đề liên quan & mở rộng", desc: "Khám phá những gì bạn chưa biết mình cần biết." },
];

export function AhaMoment() {
  return (
    <section id="ai-research" className="py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <RevealWrapper>
            <div className="section-label">The Aha Moment</div>
            <h2 className="section-headline">
              Nhập điều muốn học.<br />
              Nhận về <em className="italic text-gold">cả bản đồ.</em>
            </h2>
            <p className="section-sub mb-8">
              Nếu chỉ hỏi ChatGPT, bạn nhận được một câu trả lời. Ở đây bạn nhận được toàn bộ hành trình để tiếp tục khám phá.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-charcoal-3 border border-charcoal-4 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-ivory mb-0.5">{f.title}</div>
                    <div className="text-[12px] text-ivory-mute">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Button asChild variant="primary" size="md">
                <Link href="/search?q=Digital Marketing">Xem demo</Link>
              </Button>
              <Button asChild variant="gold" size="md">
                <Link href="/ai"><Sparkles className="w-4 h-4" />AI Research</Link>
              </Button>
            </div>
          </RevealWrapper>

          {/* Mock panel */}
          <RevealWrapper delay={2}>
            <MockResultPanel />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

function MockResultPanel() {
  return (
    <div className="bg-charcoal-3 border border-charcoal-4 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
      {/* Topbar */}
      <div className="bg-charcoal-2 border-b border-charcoal-4 px-5 py-3.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          {["#ff5f57","#febc2e","#28c840"].map((c) => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
        </div>
        <div className="text-[12px] text-ivory-dim flex-1 truncate">
          &ldquo;<strong className="text-gold">Digital Marketing</strong>&rdquo;
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-0 divide-y divide-charcoal-4">
        {/* AI Overview */}
        <div className="pb-4">
          <SectionHead emoji="🤖" label="AI Overview" />
          <p className="text-[12px] text-ivory-dim leading-relaxed">
            Digital Marketing là hệ thống marketing sử dụng kênh kỹ thuật số để tiếp cận khách hàng. Bao gồm SEO, Content, Email, Social Media và Analytics...
            <span className="typing-cursor" />
          </p>
        </div>

        {/* Stats */}
        <div className="py-4">
          <div className="grid grid-cols-4 gap-2">
            {[["12","📚 Sách"],["48","📄 Tài liệu"],["16","🎓 Khóa học"],["9","👥 Cộng đồng"]].map(([n,l]) => (
              <div key={l} className="bg-charcoal-4 rounded-lg p-2 text-center">
                <div className="font-serif text-lg font-bold text-gold">{n}</div>
                <div className="text-[9px] text-ivory-mute mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Books */}
        <div className="py-4">
          <SectionHead emoji="📚" label="Sách đề xuất" count="12" />
          <div className="grid grid-cols-3 gap-2">
            {[
              { t: "This Is Marketing", a: "Seth Godin", g: "from-[#1a0f0a] to-[#3a1f10]" },
              { t: "Hooked", a: "Nir Eyal", g: "from-[#0a0f1a] to-[#102040]" },
              { t: "Zero to One", a: "Peter Thiel", g: "from-[#0f0a1a] to-[#1a1040]" },
            ].map((b) => (
              <div key={b.t} className="bg-charcoal-4 rounded-lg overflow-hidden">
                <div className={`aspect-[3/4] bg-gradient-to-br ${b.g} flex items-center justify-center text-lg`}>📖</div>
                <div className="p-1.5">
                  <div className="text-[10px] font-semibold text-ivory-dim leading-tight">{b.t}</div>
                  <div className="text-[9px] text-ivory-mute">{b.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="py-4">
          <SectionHead emoji="🧠" label="Chủ đề liên quan" />
          <div className="flex flex-wrap gap-1.5">
            {["SEO","Content","Analytics","Social","Growth"].map((t) => (
              <span key={t} className="text-[10px] text-ivory-dim bg-charcoal-4 border border-white/5 rounded-full px-2 py-0.5">{t}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <button className="w-full py-2.5 bg-[rgba(184,154,94,0.1)] border border-[rgba(184,154,94,0.2)] rounded-xl text-[12px] font-semibold text-gold-light flex items-center justify-center gap-2 hover:bg-[rgba(184,154,94,0.16)] transition-colors">
            <Sparkles className="w-3.5 h-3.5" /> Nghiên cứu sâu hơn với AI
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionHead({ emoji, label, count }: { emoji: string; label: string; count?: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-2.5">
      <span className="text-sm">{emoji}</span>
      <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-ivory-mute">{label}</span>
      {count && <span className="ml-auto text-[10px] text-gold font-semibold">{count} cuốn</span>}
    </div>
  );
}
