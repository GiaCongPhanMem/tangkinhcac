import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Tàng Kinh Các — Knowledge Discovery", template: "%s — Tàng Kinh Các" },
  description: "Tìm sách, tài liệu, khóa học và cộng đồng chuyên sâu — rồi dùng AI để hiểu, kết nối và nghiên cứu chúng.",
  keywords: ["tri thức", "sách", "AI research", "cộng đồng", "knowledge discovery"],
  openGraph: {
    title: "Tàng Kinh Các — Knowledge Discovery",
    description: "Đừng chỉ hỏi AI. Hãy khám phá tri thức.",
    type: "website",
  },
};

// Inline script runs before React hydration to prevent flash
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('tkc-theme');
    var preferred = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.classList.add(preferred);
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Anti-flash script — must run synchronously before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="font-sans antialiased flex flex-col min-h-screen pb-[70px] md:pb-0"
        style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileNav />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
