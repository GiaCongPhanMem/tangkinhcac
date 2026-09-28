import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
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

const themeScript = `(function(){try{var s=localStorage.getItem('tkc-theme');var p=s||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.classList.add(p);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="font-sans antialiased"
        style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
