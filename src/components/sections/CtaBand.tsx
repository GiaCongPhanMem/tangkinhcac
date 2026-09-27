"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="relative py-28 text-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(184,154,94,0.07) 0%, transparent 60%)" }} />
      <div className="relative max-w-container mx-auto px-6">
        <RevealWrapper>
          <h2 className="font-serif text-[clamp(32px,4.5vw,58px)] font-bold text-ivory leading-[1.08] mb-4">
            Bắt đầu <em className="italic text-gold">khám phá</em><br />tri thức ngay hôm nay.
          </h2>
          <p className="text-[16px] font-light text-ivory-dim max-w-[440px] mx-auto mb-12 leading-[1.75]">
            Không cần đăng ký. Nhập bất kỳ điều gì bạn muốn học và trải nghiệm sự khác biệt.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button asChild size="xl" variant="primary">
              <Link href="/search">Khám phá tri thức</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/ai"><Sparkles className="w-4 h-4 text-gold" />Nghiên cứu với AI</Link>
            </Button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
