"use client";

import { useState } from "react";
import { Heart, X, Copy, Check } from "lucide-react";

export function DonateButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const BANK_INFO = {
    name: "Nguyễn Hoàng Anh",
    bank: "MoMo",
    number: "0849 247 247",
    content: "Ủng hộ Tàng Kinh Các",
  };

  function copyNumber() {
    navigator.clipboard.writeText(BANK_INFO.number.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {/* ── Trigger ── */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all hover:opacity-90 hover:-translate-y-px"
        style={{
          background: "linear-gradient(135deg, #e91e8c, #ff4d94)",
          color: "#fff",
          boxShadow: "0 2px 12px rgba(233,30,140,0.35)",
        }}
        aria-label="Donate ủng hộ"
      >
        <Heart className="w-3 h-3 fill-white" />
        Donate
      </button>

      {/* ── Modal ── */}
      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[360px] rounded-2xl overflow-hidden shadow-2xl animate-slide-up"
            style={{
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--color-border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-[#e91e8c] text-[#e91e8c]" />
                <span className="text-[14px] font-semibold" style={{ color: "var(--text-primary)" }}>
                  Ủng hộ Tàng Kinh Các
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[var(--bg-3)] transition-colors"
                style={{ color: "var(--text-mute)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-5 flex flex-col items-center gap-4">
              <p className="text-[13px] text-center leading-relaxed" style={{ color: "var(--text-dim)" }}>
                Mọi đóng góp đều giúp duy trì và phát triển nền tảng tri thức miễn phí này. 💛
              </p>

              {/* QR ảnh thật từ MoMo */}
              <div
                className="rounded-2xl overflow-hidden border-2 p-2"
                style={{ borderColor: "#e91e8c", background: "#fce4ec" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/qr-momo.png"
                  alt="QR MoMo - Nguyễn Hoàng Anh"
                  width={220}
                  height={220}
                  style={{ display: "block", borderRadius: "12px" }}
                />
              </div>

              {/* Tên người nhận */}
              <div className="text-center">
                <div
                  className="text-[13px] font-bold tracking-wide uppercase"
                  style={{ color: "#ae2070" }}
                >
                  NGUYEN HOANG ANH
                </div>
                <div className="text-[11px] mt-0.5" style={{ color: "var(--text-mute)" }}>
                  Quét bằng app MoMo hoặc camera
                </div>
              </div>

              {/* Divider */}
              <div className="w-full flex items-center gap-3">
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
                <span className="text-[11px]" style={{ color: "var(--text-mute)" }}>hoặc chuyển khoản thủ công</span>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
              </div>

              {/* Bank info */}
              <div
                className="w-full rounded-xl p-4 flex flex-col gap-2.5"
                style={{ backgroundColor: "var(--bg-3)", border: "1px solid var(--color-border)" }}
              >
                {[
                  { label: "Nền tảng", value: BANK_INFO.bank },
                  { label: "Tên", value: BANK_INFO.name },
                  { label: "Nội dung", value: BANK_INFO.content },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-[11px]" style={{ color: "var(--text-mute)" }}>{label}</span>
                    <span className="text-[12px] font-medium" style={{ color: "var(--text-dim)" }}>{value}</span>
                  </div>
                ))}
                {/* SĐT + copy */}
                <div className="flex items-center justify-between pt-1 border-t" style={{ borderColor: "var(--color-border)" }}>
                  <span className="text-[11px]" style={{ color: "var(--text-mute)" }}>Số điện thoại</span>
                  <button
                    onClick={copyNumber}
                    className="flex items-center gap-1.5 text-[13px] font-bold transition-colors"
                    style={{ color: "#e91e8c" }}
                  >
                    {BANK_INFO.number}
                    {copied
                      ? <Check className="w-3.5 h-3.5 text-green-400" />
                      : <Copy className="w-3.5 h-3.5" />
                    }
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-center" style={{ color: "var(--text-mute)" }}>
                Cảm ơn bạn rất nhiều! 🙏
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
