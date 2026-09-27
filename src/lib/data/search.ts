import type { Book } from "./books";
import type { Community } from "./communities";

export interface SearchResult {
  query: string;
  aiOverview: string;
  stats: { books: number; documents: number; courses: number; communities: number; topics: number };
  books: Book[];
  documents: Document[];
  courses: Course[];
  communities: Community[];
  topics: string[];
  learningPath: LearningPathStep[];
  suggestedQuestions: string[];
}

export interface Document {
  id: string;
  title: string;
  source: string;
  type: "paper" | "article" | "guide" | "report";
  url: string;
  excerpt: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  free: boolean;
  url: string;
}

export interface LearningPathStep {
  step: number;
  title: string;
  description: string;
  resources: string[];
}
