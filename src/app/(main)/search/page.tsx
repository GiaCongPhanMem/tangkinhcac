import type { Metadata } from "next";
import { getSearchResults } from "@/lib/data/knowledge";
import { SearchPageClient } from "./SearchPageClient";

interface Props { searchParams: { q?: string } }

export function generateMetadata({ searchParams }: Props): Metadata {
  const q = searchParams.q;
  return { title: q ? `${q} — Tìm kiếm` : "Tìm kiếm tri thức" };
}

export default function SearchPage({ searchParams }: Props) {
  const q = searchParams.q ?? "";
  const results = q ? getSearchResults(q) : null;
  return <SearchPageClient query={q} results={results} />;
}
