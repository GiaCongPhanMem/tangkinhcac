import Link from "next/link";

const COLS = [
  {
    title: "Khám phá",
    links: [
      { href: "/search", label: "Tìm kiếm tri thức" },
      { href: "/books", label: "Thư viện sách" },
      { href: "/communities", label: "Cộng đồng" },
      { href: "/library", label: "Thư viện cá nhân" },
    ],
  },
  {
    title: "AI Research",
    links: [
      { href: "/ai", label: "Nghiên cứu với AI" },
      { href: "/search", label: "Knowledge Map" },
      { href: "/ai", label: "Learning Path" },
      { href: "/ai", label: "Câu hỏi nghiên cứu" },
    ],
  },
  {
    title: "Công ty",
    links: [
      { href: "#", label: "Về chúng tôi" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Tuyển dụng" },
      { href: "#", label: "Liên hệ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer-root border-t mt-auto">
      <div className="max-w-container mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-xl font-bold mb-3 footer-text-primary">
              Tàng <span className="footer-text-gold">Kinh</span> Các
            </div>
            <p className="text-sm leading-relaxed max-w-[220px] footer-text-mute">
              Knowledge Discovery Platform — giúp bạn khám phá hệ sinh thái tri thức thay vì chỉ nhận câu trả lời.
            </p>
          </div>

          {/* Cols */}
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-4 footer-text-mute">
                {col.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link text-[13px]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t footer-border text-[12px] footer-text-mute">
          <span>© 2026 Tàng Kinh Các. Knowledge Discovery Platform.</span>
          <div className="flex gap-5">
            {["Chính sách bảo mật", "Điều khoản", "Liên hệ"].map((t) => (
              <Link key={t} href="#" className="footer-link">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
