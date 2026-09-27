import { RevealWrapper } from "@/components/ui/RevealWrapper";

export function WhyTKC() {
  return (
    <section id="why-tkc" className="py-24 bg-charcoal-2">
      <div className="max-w-container mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <div className="section-label">Tại sao Tàng Kinh Các?</div>
          <h2 className="section-headline">
            ChatGPT trả lời.<br />
            Tàng Kinh Các giúp bạn <em className="italic text-gold">đi xa hơn.</em>
          </h2>
          <p className="section-sub mx-auto text-center">
            Không thay thế. Không cạnh tranh. Một loại giá trị hoàn toàn khác.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_56px_1fr] items-stretch gap-5 lg:gap-0">
          {/* Left — AI thông thường */}
          <RevealWrapper delay={1}>
            <div className="bg-charcoal-3 border border-charcoal-4 rounded-2xl p-10 h-full flex flex-col">
              <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-ivory-mute mb-7">
                AI thông thường
              </div>
              <div className="flex flex-col gap-0 flex-1">
                <FlowStep label="Câu hỏi" bold />
                <FlowArrow />
                <FlowStep label="AI" />
                <FlowArrow />
                <FlowStep label="Câu trả lời" />
              </div>
              <div className="mt-8 p-4 bg-charcoal-4 rounded-xl">
                <p className="text-[13px] text-ivory-mute italic leading-relaxed">
                  Tốt cho những câu hỏi có câu trả lời rõ ràng và nhanh.
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* VS */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-charcoal-4 border border-charcoal-5 flex items-center justify-center text-[10px] font-bold text-ivory-mute tracking-wider">
              VS
            </div>
          </div>

          {/* Right — TKC */}
          <RevealWrapper delay={2}>
            <div className="rounded-2xl p-10 h-full flex flex-col border border-[rgba(184,154,94,0.18)]"
              style={{ background: "linear-gradient(135deg,#242420 0%,rgba(184,154,94,0.04) 100%)" }}>
              <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold mb-7">
                Tàng Kinh Các
              </div>
              <div className="flex flex-col gap-0 flex-1">
                <FlowStep label="Câu hỏi" bold />
                <FlowArrow />
                <FlowStep label="AI + Knowledge Sources" />
                <FlowArrow />
                <div className="pl-4 border-l-2 border-gold-dim my-2 flex flex-col gap-1.5">
                  {["📚 Sách", "📄 Tài liệu", "🎓 Khóa học", "👥 Cộng đồng", "🧠 Chủ đề liên quan"].map((item) => (
                    <div key={item} className="text-[13px] text-ivory-dim flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
                <FlowArrow />
                <FlowStep label="Hành trình nghiên cứu" gold />
              </div>
              <div className="mt-6 p-4 rounded-xl bg-[rgba(184,154,94,0.06)] border border-[rgba(184,154,94,0.12)]">
                <p className="text-[13px] text-gold-light leading-relaxed">
                  Phù hợp khi bạn muốn thực sự hiểu một chủ đề và biết phải tiếp tục ở đâu.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ label, bold, gold }: { label: string; bold?: boolean; gold?: boolean }) {
  return (
    <div className={`py-2 text-sm ${gold ? "text-gold font-semibold" : bold ? "text-ivory font-semibold" : "text-ivory-dim"}`}>
      {label}
    </div>
  );
}

function FlowArrow() {
  return <div className="text-ivory-mute text-lg py-0.5 leading-none">↓</div>;
}
