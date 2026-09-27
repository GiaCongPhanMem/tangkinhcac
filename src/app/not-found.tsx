import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="font-serif text-[96px] font-bold text-charcoal-4 leading-none mb-4 select-none">404</div>
      <h1 className="font-serif text-3xl font-bold text-ivory mb-3">Trang không tồn tại</h1>
      <p className="text-[15px] text-ivory-mute mb-10 max-w-[360px] leading-relaxed">
        Trang này có thể đã được di chuyển. Hãy quay lại và tiếp tục khám phá tri thức.
      </p>
      <Button asChild size="lg" variant="primary">
        <Link href="/">Về trang chủ</Link>
      </Button>
    </div>
  );
}
