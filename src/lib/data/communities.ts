export interface Community {
  slug: string;
  name: string;
  description: string;
  topic: string;
  topicSlug: string;
  members: number;
  discussionsThisWeek: number;
  isActive: boolean;
  platform: string;
  trendingDiscussions: string[];
  relatedTopics: string[];
  relatedBookSlugs: string[];
}

export const COMMUNITIES: Community[] = [
  {
    slug: "ai-builders-vietnam",
    name: "AI Builders Vietnam",
    description:
      "Cộng đồng kỹ sư, researcher và builder đang xây dựng với AI tại Việt Nam. Thảo luận về LLM, AI Agents, MLOps và ứng dụng thực tế.",
    topic: "AI & Machine Learning",
    topicSlug: "ai-ml",
    members: 24800,
    discussionsThisWeek: 347,
    isActive: true,
    platform: "Discord + Forum",
    trendingDiscussions: [
      "So sánh các LLM cho tiếng Việt: GPT-4o vs Claude 3.5 vs Gemini",
      "Kiến trúc Multi-Agent System cho doanh nghiệp vừa và nhỏ",
      "RAG vs Fine-tuning: Khi nào dùng cái nào?",
      "Tổng hợp paper AI tháng này — top 10 đáng đọc",
    ],
    relatedTopics: ["LLM", "AI Agents", "Machine Learning", "MLOps", "NLP"],
    relatedBookSlugs: [],
  },
  {
    slug: "triet-hoc-ung-dung",
    name: "Triết học ứng dụng",
    description:
      "Cộng đồng nghiên cứu và ứng dụng triết học vào cuộc sống — từ Stoicism, Phật giáo đến triết học phân tích và đạo đức học.",
    topic: "Triết học",
    topicSlug: "philosophy",
    members: 11200,
    discussionsThisWeek: 128,
    isActive: true,
    platform: "Facebook Group + Blog",
    trendingDiscussions: [
      "Stoicism và quản lý cảm xúc trong công việc áp lực cao",
      "Epictetus và sự phân biệt giữa những gì ta kiểm soát được",
      "Đọc Meditations như thế nào để thực sự thay đổi tư duy",
      "Triết học Phật giáo và tâm lý học hiện đại — điểm gặp nhau",
    ],
    relatedTopics: ["Stoicism", "Phật giáo", "Tư duy phản biện", "Ethics", "Mindfulness"],
    relatedBookSlugs: ["meditations", "letters-from-a-stoic", "enchiridion"],
  },
  {
    slug: "lich-su-viet-nam",
    name: "Lịch sử Việt Nam",
    description:
      "Nghiên cứu và thảo luận về lịch sử, văn hóa và xã hội Việt Nam — từ thời Hùng Vương đến hiện đại.",
    topic: "Lịch sử",
    topicSlug: "history",
    members: 32100,
    discussionsThisWeek: 412,
    isActive: true,
    platform: "Facebook Group + Podcast",
    trendingDiscussions: [
      "Triều Nguyễn — đánh giá lại qua lăng kính lịch sử hiện đại",
      "Ảnh hưởng của Nho giáo trong hệ thống giáo dục Đại Việt",
      "Bản đồ lãnh thổ Đại Việt qua các triều đại",
      "Kinh tế thời Lý-Trần: Thương mại và ngoại giao",
    ],
    relatedTopics: ["Triều Nguyễn", "Lý Trần", "Văn hóa Đông Sơn", "Hùng Vương"],
    relatedBookSlugs: ["sapiens"],
  },
  {
    slug: "digital-marketing-vn",
    name: "Digital Marketing Vietnam",
    description:
      "Cộng đồng marketer Việt Nam thảo luận về SEO, Content Marketing, Performance Marketing, Data Analytics và xu hướng mới nhất.",
    topic: "Marketing",
    topicSlug: "marketing",
    members: 18600,
    discussionsThisWeek: 523,
    isActive: true,
    platform: "Facebook Group + Slack",
    trendingDiscussions: [
      "Google SGE ảnh hưởng như thế nào đến SEO trong 2025",
      "TikTok Shop vs Shopee vs Lazada — chiến lược D2C nào hiệu quả",
      "AI Content: Cách dùng đúng để không bị Google penalty",
      "Attribution model nào phù hợp với SME Việt Nam",
    ],
    relatedTopics: ["SEO", "Content Marketing", "Performance Marketing", "Analytics"],
    relatedBookSlugs: ["this-is-marketing", "hooked"],
  },
  {
    slug: "psychology-vietnam",
    name: "Psychology Vietnam",
    description:
      "Cộng đồng nghiên cứu tâm lý học — từ tâm lý học nhận thức, hành vi đến tâm lý học lâm sàng và ứng dụng.",
    topic: "Tâm lý học",
    topicSlug: "psychology",
    members: 15400,
    discussionsThisWeek: 289,
    isActive: true,
    platform: "Facebook Group + Newsletter",
    trendingDiscussions: [
      "Cognitive Bias trong môi trường làm việc — nhận diện và xử lý",
      "Attachment Theory và các mối quan hệ trưởng thành",
      "Behavioral Design: Thiết kế môi trường để thay đổi hành vi",
      "Tâm lý học tích cực — nghiên cứu nền tảng và ứng dụng",
    ],
    relatedTopics: ["Cognitive Bias", "Behavioral Economics", "CBT", "Mindfulness"],
    relatedBookSlugs: ["thinking-fast-and-slow", "predictably-irrational", "hooked"],
  },
  {
    slug: "startup-founders-vn",
    name: "Startup Founders Vietnam",
    description:
      "Cộng đồng founders, co-founders và early-stage team đang xây dựng startup tại Việt Nam và Đông Nam Á.",
    topic: "Kinh doanh & Startup",
    topicSlug: "business-startup",
    members: 8900,
    discussionsThisWeek: 198,
    isActive: true,
    platform: "Slack + Discord",
    trendingDiscussions: [
      "Fundraising trong thị trường Vietnam 2025 — kinh nghiệm thực tế",
      "Product-Market Fit: Khi nào bạn biết mình đã có nó",
      "Go-to-market strategy cho B2B SaaS tại Việt Nam",
      "Hiring đầu tiên: Engineer vs Sales vs Marketing?",
    ],
    relatedTopics: ["Startup", "Venture Capital", "Product-Market Fit", "Growth"],
    relatedBookSlugs: ["zero-to-one", "hooked", "this-is-marketing"],
  },
  {
    slug: "product-design-vn",
    name: "Product & Design Vietnam",
    description:
      "Cộng đồng product manager, UX/UI designer và design engineer tại Việt Nam — chia sẻ process, case study và học hỏi lẫn nhau.",
    topic: "Product & Design",
    topicSlug: "product-design",
    members: 12300,
    discussionsThisWeek: 234,
    isActive: true,
    platform: "Facebook Group + Figma Community",
    trendingDiscussions: [
      "Design System từ đầu — kinh nghiệm từ các startup Việt",
      "PM vs PO vs Delivery Manager — khác nhau ở đâu trong practice",
      "User Research với budget eo hẹp — các kỹ thuật hiệu quả",
      "AI trong design workflow — từ ideation đến handoff",
    ],
    relatedTopics: ["UX Design", "Product Management", "Design System", "User Research"],
    relatedBookSlugs: ["hooked", "thinking-fast-and-slow"],
  },
  {
    slug: "data-science-vn",
    name: "Data Science Vietnam",
    description:
      "Cộng đồng data scientist, data analyst và data engineer Việt Nam — từ học thuật đến ứng dụng thực tế trong doanh nghiệp.",
    topic: "Data Science",
    topicSlug: "data-science",
    members: 19200,
    discussionsThisWeek: 315,
    isActive: true,
    platform: "Discord + Kaggle Group",
    trendingDiscussions: [
      "Career path: Data Analyst → Data Scientist → ML Engineer",
      "So sánh các cloud ML platform: AWS SageMaker vs GCP Vertex AI",
      "Xây dựng data pipeline production-ready với Airflow + dbt",
      "LLM cho phân tích dữ liệu: Ứng dụng thực tế và giới hạn",
    ],
    relatedTopics: ["Machine Learning", "Analytics", "SQL", "Python", "Statistics"],
    relatedBookSlugs: [],
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return COMMUNITIES.find((c) => c.slug === slug);
}

export function getCommunitiesByTopic(topicSlug: string): Community[] {
  return COMMUNITIES.filter((c) => c.topicSlug === topicSlug);
}
