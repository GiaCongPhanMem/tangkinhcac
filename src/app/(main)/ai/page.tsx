import type { Metadata } from "next";
import { AIPageClient } from "./AIPageClient";

interface Props { searchParams: { q?: string } }
export const metadata: Metadata = { title: "AI Research" };

export default function AIPage({ searchParams }: Props) {
  return <AIPageClient initialQuery={searchParams.q ?? ""} />;
}
