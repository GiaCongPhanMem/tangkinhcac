export interface Topic {
  slug: string;
  name: string;
  description: string;
  emoji: string;
  resources: number;
  communities: number;
  discussions: number;
  isActive: boolean;
  relatedSlugs: string[];
}

export const TOPICS: Topic[] = [
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    description: "Trí tuệ nhân tạo, machine learning, deep learning và ứng dụng thực tế",
    emoji: "🤖",
    resources: 284,
    communities: 12,
    discussions: 2847,
    isActive: true,
    relatedSlugs: ["data-science", "nlp", "computer-vision"],
  },
  {
    slug: "stoicism",
    name: "Triết học Stoicism",
    description: "Triết học Hy Lạp cổ đại về đức hạnh, lý trí và sự chấp nhận",
    emoji: "🏛️",
    resources: 86,
    communities: 6,
    discussions: 543,
    isActive: true,
    relatedSlugs: ["philosophy", "mindfulness", "self-development"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    description: "SEO, Content Marketing, Performance Marketing, Social Media và Analytics",
    emoji: "📊",
    resources: 312,
    communities: 14,
    discussions: 3421,
    isActive: true,
    relatedSlugs: ["marketing", "growth-hacking", "product-ux"],
  },
  {
    slug: "behavioral-psychology",
    name: "Tâm lý học hành vi",
    description: "Cognitive bias, decision making, behavioral economics và habit formation",
    emoji: "🧠",
    resources: 178,
    communities: 8,
    discussions: 1234,
    isActive: true,
    relatedSlugs: ["neuroscience", "philosophy", "product-ux"],
  },
  {
    slug: "history",
    name: "Lịch sử",
    description: "Lịch sử Việt Nam, lịch sử thế giới và nghiên cứu lịch sử",
    emoji: "📜",
    resources: 203,
    communities: 9,
    discussions: 1876,
    isActive: true,
    relatedSlugs: ["culture", "social-science"],
  },
  {
    slug: "business-startup",
    name: "Kinh doanh & Startup",
    description: "Startup, entrepreneurship, venture capital và business strategy",
    emoji: "🚀",
    resources: 267,
    communities: 11,
    discussions: 2156,
    isActive: true,
    relatedSlugs: ["marketing", "product-ux", "leadership"],
  },
  {
    slug: "philosophy",
    name: "Triết học",
    description: "Triết học tổng hợp từ cổ đại đến hiện đại",
    emoji: "🔭",
    resources: 142,
    communities: 7,
    discussions: 876,
    isActive: true,
    relatedSlugs: ["stoicism", "ethics", "logic"],
  },
  {
    slug: "data-science",
    name: "Data Science",
    description: "Phân tích dữ liệu, thống kê, visualization và data engineering",
    emoji: "📈",
    resources: 198,
    communities: 8,
    discussions: 1543,
    isActive: true,
    relatedSlugs: ["ai-ml", "statistics", "python"],
  },
  {
    slug: "self-development",
    name: "Phát triển bản thân",
    description: "Habits, productivity, mindset và personal growth",
    emoji: "⚡",
    resources: 234,
    communities: 10,
    discussions: 2876,
    isActive: true,
    relatedSlugs: ["stoicism", "behavioral-psychology", "productivity"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    description: "Brand marketing, content, storytelling và consumer psychology",
    emoji: "📢",
    resources: 189,
    communities: 9,
    discussions: 2143,
    isActive: true,
    relatedSlugs: ["digital-marketing", "product-ux", "business-startup"],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
