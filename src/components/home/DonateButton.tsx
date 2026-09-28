"use client";

import { useState } from "react";
import { Heart, X, Copy, Check } from "lucide-react";

export function DonateButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const BANK_INFO = {
    name: "Nguyễn Văn A",
    bank: "MoMo",
    number: "0909 123 456",
    content: "Ủng hộ Tàng Kinh Các",
  };

  function copyNumber() {
    navigator.clipboard.writeText(BANK_INFO.number.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {/* Trigger button */}
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

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[360px] rounded-2xl overflow-hidden shadow-2xl"
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

              {/* QR Code placeholder — dùng QR thực từ Momo */}
              <div
                className="w-[200px] h-[200px] rounded-2xl flex flex-col items-center justify-center border-2"
                style={{
                  background: "#fff",
                  borderColor: "#e91e8c",
                }}
              >
                {/* MoMo QR placeholder — thay bằng <img src="/qr-momo.png"> khi có ảnh thật */}
                <svg viewBox="0 0 100 100" width="160" height="160" aria-hidden>
                  {/* Border squares */}
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="#e91e8c" strokeWidth="3"/>
                  <rect x="9" y="9" width="20" height="20" rx="2" fill="#e91e8c"/>
                  <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="#e91e8c" strokeWidth="3"/>
                  <rect x="71" y="9" width="20" height="20" rx="2" fill="#e91e8c"/>
                  <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="#e91e8c" strokeWidth="3"/>
                  <rect x="9" y="71" width="20" height="20" rx="2" fill="#e91e8c"/>
                  {/* Data dots */}
                  {[40,46,52,58,40,52,40,52,58,40,46,58,40,52,58].map((x, i) => (
                    <rect key={i} x={x} y={40 + (i % 5) * 6} width="4" height="4" rx="0.5" fill="#333" />
                  ))}
                  {/* Center MoMo text */}
                  <text x="50" y="88" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#e91e8c">MOMO</text>
                </svg>
              </div>

              <p className="text-[11px]" style={{ color: "var(--text-mute)" }}>
                Quét mã QR bằng app MoMo
              </p>

              {/* Divider */}
              <div className="w-full flex items-center gap-3">
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
                <span className="text-[11px]" style={{ color: "var(--text-mute)" }}>hoặc chuyển khoản</span>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
              </div>

              {/* Bank info */}
              <div
                className="w-full rounded-xl p-4 flex flex-col gap-2"
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
                {/* Phone with copy */}
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px]" style={{ color: "var(--text-mute)" }}>Số điện thoại</span>
                  <button
                    onClick={copyNumber}
                    className="flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                    style={{ color: "var(--gold)" }}
                  >
                    {BANK_INFO.number}
                    {copied
                      ? <Check className="w-3 h-3 text-green-400" />
                      : <Copy className="w-3 h-3" />
                    }
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-center" style={{ color: "var(--text-mute)" }}>
                Cảm ơn bạn đã ủng hộ! 🙏
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
