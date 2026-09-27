import { BOOKS } from "./books";
import { COMMUNITIES } from "./communities";
import type { SearchResult, Document, Course, LearningPathStep } from "./search";

// ─── Documents ──────────────────────────────────────────────────────────────

const DOCS_BY_TOPIC: Record<string, Document[]> = {
  "digital-marketing": [
    { id: "dm-1", title: "The Ultimate Guide to SEO in 2025", source: "Moz", type: "guide", url: "#", excerpt: "Hướng dẫn toàn diện về SEO từ kỹ thuật cơ bản đến nâng cao..." },
    { id: "dm-2", title: "State of Marketing Report 2025", source: "HubSpot", type: "report", url: "#", excerpt: "Báo cáo thường niên về xu hướng marketing toàn cầu..." },
    { id: "dm-3", title: "Content Marketing Strategy Framework", source: "Content Marketing Institute", type: "guide", url: "#", excerpt: "Framework xây dựng chiến lược content marketing..." },
    { id: "dm-4", title: "Performance Marketing Playbook", source: "Google", type: "guide", url: "#", excerpt: "Hướng dẫn chạy quảng cáo hiệu quả trên Google..." },
  ],
  "stoicism": [
    { id: "st-1", title: "An Introduction to Stoic Philosophy", source: "Stanford Encyclopedia", type: "article", url: "#", excerpt: "Tổng quan học thuật về triết học Stoic..." },
    { id: "st-2", title: "Stoicism and Modern Psychology", source: "Psychology Today", type: "article", url: "#", excerpt: "Mối liên hệ giữa Stoicism và CBT hiện đại..." },
    { id: "st-3", title: "Marcus Aurelius: The Philosopher King", source: "Ancient History Encyclopedia", type: "article", url: "#", excerpt: "Tiểu sử và di sản triết học của Marcus Aurelius..." },
  ],
  "ai-ml": [
    { id: "ai-1", title: "Attention Is All You Need", source: "arXiv", type: "paper", url: "#", excerpt: "Paper gốc giới thiệu kiến trúc Transformer..." },
    { id: "ai-2", title: "A Survey of Large Language Models", source: "arXiv", type: "paper", url: "#", excerpt: "Tổng quan toàn diện về các LLM hiện đại..." },
    { id: "ai-3", title: "Building LLM Applications for Production", source: "Chip Huyen", type: "guide", url: "#", excerpt: "Hướng dẫn triển khai LLM trong môi trường production..." },
    { id: "ai-4", title: "The Illustrated Transformer", source: "Jay Alammar", type: "guide", url: "#", excerpt: "Giải thích trực quan về kiến trúc Transformer..." },
  ],
  "behavioral-psychology": [
    { id: "bp-1", title: "Cognitive Bias Codex", source: "Wikipedia", type: "guide", url: "#", excerpt: "Danh mục toàn diện về các cognitive bias..." },
    { id: "bp-2", title: "The Psychology of Decision Making", source: "Harvard Business Review", type: "article", url: "#", excerpt: "Phân tích quá trình ra quyết định của con người..." },
  ],
  default: [
    { id: "def-1", title: "Getting Started with Knowledge Research", source: "Tàng Kinh Các", type: "guide", url: "#", excerpt: "Hướng dẫn bắt đầu hành trình nghiên cứu tri thức..." },
    { id: "def-2", title: "How to Learn Anything Deeply", source: "Scott Young", type: "article", url: "#", excerpt: "Phương pháp học sâu và hiệu quả..." },
  ],
};

// ─── Courses ─────────────────────────────────────────────────────────────────

const COURSES_BY_TOPIC: Record<string, Course[]> = {
  "digital-marketing": [
    { id: "dmc-1", title: "Google Digital Marketing & E-commerce Certificate", provider: "Google / Coursera", level: "Beginner", duration: "6 tháng", free: false, url: "#" },
    { id: "dmc-2", title: "SEO Training Course", provider: "Moz Academy", level: "Intermediate", duration: "10 giờ", free: true, url: "#" },
    { id: "dmc-3", title: "Facebook Blueprint", provider: "Meta", level: "Beginner", duration: "Tự học", free: true, url: "#" },
    { id: "dmc-4", title: "Digital Marketing Fundamentals", provider: "Kyna.vn", level: "Beginner", duration: "20 giờ", free: false, url: "#" },
  ],
  "ai-ml": [
    { id: "aimlc-1", title: "Machine Learning Specialization", provider: "DeepLearning.AI / Coursera", level: "Intermediate", duration: "3 tháng", free: false, url: "#" },
    { id: "aimlc-2", title: "Deep Learning Specialization", provider: "DeepLearning.AI", level: "Advanced", duration: "5 tháng", free: false, url: "#" },
    { id: "aimlc-3", title: "fast.ai Practical Deep Learning", provider: "fast.ai", level: "Intermediate", duration: "Tự học", free: true, url: "#" },
    { id: "aimlc-4", title: "CS229: Machine Learning", provider: "Stanford Online", level: "Advanced", duration: "1 học kỳ", free: true, url: "#" },
  ],
  "behavioral-psychology": [
    { id: "bpc-1", title: "A Beginner's Guide to Irrational Behavior", provider: "Duke / Coursera", level: "Beginner", duration: "4 tuần", free: false, url: "#" },
    { id: "bpc-2", title: "Introduction to Psychology", provider: "Yale / Coursera", level: "Beginner", duration: "6 tuần", free: true, url: "#" },
  ],
  default: [
    { id: "defc-1", title: "Learning How to Learn", provider: "UC San Diego / Coursera", level: "Beginner", duration: "4 tuần", free: true, url: "#" },
    { id: "defc-2", title: "Critical Thinking & Problem Solving", provider: "Rochester / Coursera", level: "Beginner", duration: "6 tuần", free: false, url: "#" },
  ],
};

// ─── Learning Paths ──────────────────────────────────────────────────────────

const PATHS_BY_TOPIC: Record<string, LearningPathStep[]> = {
  "digital-marketing": [
    { step: 1, title: "Nền tảng Digital Marketing", description: "Hiểu tổng quan các kênh và framework cơ bản", resources: ["Google Digital Marketing Certificate", "This Is Marketing"] },
    { step: 2, title: "SEO & Content Strategy", description: "Xây dựng presence organic trên search engines", resources: ["Moz SEO Guide", "Content Marketing Institute"] },
    { step: 3, title: "Paid Advertising", description: "Google Ads, Meta Ads và performance marketing", resources: ["Google Blueprint", "Facebook Blueprint"] },
    { step: 4, title: "Analytics & Data", description: "Đo lường, phân tích và tối ưu hóa", resources: ["Google Analytics 4", "Data Studio"] },
    { step: 5, title: "Advanced Strategy", description: "Xây dựng growth strategy và scale", resources: ["Growth Hacking communities", "Case studies"] },
  ],
  "stoicism": [
    { step: 1, title: "Stoicism là gì?", description: "Lịch sử và các nguyên tắc cơ bản của Stoicism", resources: ["Enchiridion - Epictetus", "Stanford Encyclopedia"] },
    { step: 2, title: "Ba nhà Stoic vĩ đại", description: "Đọc và so sánh Marcus Aurelius, Seneca và Epictetus", resources: ["Meditations", "Letters from a Stoic"] },
    { step: 3, title: "Thực hành Stoic", description: "Áp dụng vào cuộc sống hàng ngày", resources: ["The Obstacle Is the Way", "Triết học ứng dụng community"] },
    { step: 4, title: "Stoicism nâng cao", description: "Nghiên cứu học thuật và so sánh với các trường phái khác", resources: ["Stanford Encyclopedia", "Academic papers"] },
  ],
  "ai-ml": [
    { step: 1, title: "Toán học cho ML", description: "Linear algebra, calculus, probability và statistics", resources: ["Khan Academy", "Mathematics for Machine Learning"] },
    { step: 2, title: "Machine Learning cơ bản", description: "Supervised, unsupervised, reinforcement learning", resources: ["CS229 Stanford", "ML Specialization"] },
    { step: 3, title: "Deep Learning", description: "Neural networks, CNN, RNN và Transformers", resources: ["Deep Learning Specialization", "fast.ai"] },
    { step: 4, title: "LLM & AI hiện đại", description: "Large Language Models, prompt engineering và AI Agents", resources: ["Building LLM Applications", "AI Builders Vietnam"] },
    { step: 5, title: "Production & MLOps", description: "Deploy, monitor và maintain AI systems", resources: ["Full Stack Deep Learning", "MLOps community"] },
  ],
  default: [
    { step: 1, title: "Khám phá nền tảng", description: "Tìm hiểu các khái niệm cơ bản của chủ đề", resources: ["Beginner books", "Intro articles"] },
    { step: 2, title: "Đi sâu vào lý thuyết", description: "Nghiên cứu chi tiết và học từ chuyên gia", resources: ["Intermediate books", "Online courses"] },
    { step: 3, title: "Thực hành ứng dụng", description: "Áp dụng kiến thức vào thực tế", resources: ["Projects", "Communities"] },
    { step: 4, title: "Kết nối cộng đồng", description: "Học từ người khác và chia sẻ kiến thức", resources: ["Discussion forums", "Expert networks"] },
  ],
};

// ─── Knowledge Map ────────────────────────────────────────────────────────────

const SUGGESTED_QUESTIONS: Record<string, string[]> = {
  "digital-marketing": [
    "SEO và Content Marketing liên quan như thế nào?",
    "Làm thế nào để đo ROI của digital marketing?",
    "Xu hướng digital marketing 2025 là gì?",
    "Sự khác biệt giữa Growth Hacking và Digital Marketing?",
  ],
  "stoicism": [
    "Stoicism khác Phật giáo như thế nào?",
    "Làm thế nào để áp dụng Stoicism trong công việc hiện đại?",
    "Marcus Aurelius, Seneca và Epictetus — ai phù hợp đọc trước?",
    "Stoicism và CBT có mối liên hệ gì?",
  ],
  "ai-ml": [
    "Sự khác biệt giữa AI, Machine Learning và Deep Learning?",
    "LLM hoạt động như thế nào?",
    "Bắt đầu học ML cần biết toán đến đâu?",
    "AI Agents là gì và xây dựng như thế nào?",
  ],
  default: [
    "Tài nguyên nào tốt nhất để bắt đầu học chủ đề này?",
    "Cộng đồng nào đang thảo luận nhiều nhất về chủ đề này?",
    "Làm thế nào để học chủ đề này hiệu quả nhất?",
    "Chủ đề này liên quan đến những lĩnh vực nào khác?",
  ],
};

// ─── Query → Topic mapping ────────────────────────────────────────────────────

function resolveTopicKey(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("digital marketing") || q.includes("seo") || q.includes("content marketing")) return "digital-marketing";
  if (q.includes("stoic") || q.includes("marcus") || q.includes("epictetus") || q.includes("seneca")) return "stoicism";
  if (q.includes("ai") || q.includes("machine learning") || q.includes("llm") || q.includes("deep learning")) return "ai-ml";
  if (q.includes("tâm lý") || q.includes("psychology") || q.includes("behavioral") || q.includes("hành vi")) return "behavioral-psychology";
  if (q.includes("lịch sử") || q.includes("history") || q.includes("việt nam")) return "history";
  if (q.includes("startup") || q.includes("kinh doanh") || q.includes("business")) return "business-startup";
  return "default";
}

// ─── Main lookup ──────────────────────────────────────────────────────────────

const OVERVIEWS: Record<string, string> = {
  "digital-marketing": "Digital Marketing là hệ thống marketing sử dụng các kênh kỹ thuật số để tiếp cận, thu hút và chuyển đổi khách hàng. Bao gồm SEO, Content Marketing, Email Marketing, Social Media, và Performance Advertising — một lĩnh vực liên tục thay đổi theo thuật toán và hành vi người dùng.",
  "stoicism": "Stoicism là trường phái triết học Hy Lạp cổ đại được Zeno of Citium sáng lập, nhấn mạnh đức hạnh (virtue), lý trí (reason) và sự chấp nhận (acceptance). Ba nhà Stoic vĩ đại — Marcus Aurelius, Seneca và Epictetus — để lại những tác phẩm được đọc rộng rãi đến ngày nay trong lãnh đạo, tâm lý học và phát triển cá nhân.",
  "ai-ml": "AI và Machine Learning đang định hình lại mọi ngành công nghiệp. Từ neural networks đến Large Language Models, từ supervised learning đến reinforcement learning — đây là lĩnh vực đòi hỏi nền tảng toán học vững chắc kết hợp tư duy kỹ thuật và hiểu biết về domain.",
  "behavioral-psychology": "Tâm lý học hành vi nghiên cứu cách con người hành động, quyết định và thay đổi hành vi. Từ lý thuyết điều kiện hóa cổ điển đến kinh tế học hành vi hiện đại, đây là nền tảng cho thiết kế sản phẩm, marketing, giáo dục và trị liệu tâm lý.",
  "history": "Lịch sử Việt Nam trải dài hơn 4.000 năm, từ thời Hùng Vương qua các triều đại phong kiến, thời kỳ Bắc thuộc, đến cuộc kháng chiến và xây dựng đất nước hiện đại. Nghiên cứu lịch sử giúp hiểu bản sắc văn hóa, tư duy xã hội và con đường phát triển của dân tộc.",
  "business-startup": "Startup và entrepreneurship đòi hỏi sự kết hợp giữa tầm nhìn sản phẩm, hiểu biết thị trường và khả năng thực thi. Từ product-market fit đến fundraising, từ team building đến scale — đây là hành trình đòi hỏi cả knowledge lẫn resilience.",
  "default": "Tàng Kinh Các tổng hợp nguồn tri thức từ sách, tài liệu, khóa học và cộng đồng xung quanh chủ đề bạn quan tâm. Chúng tôi không chỉ trả lời câu hỏi của bạn — chúng tôi giúp bạn xây dựng toàn bộ hành trình nghiên cứu từ cơ bản đến nâng cao.",
};

const TOPICS_BY_KEY: Record<string, string[]> = {
  "digital-marketing": ["SEO", "Content Marketing", "Email Marketing", "Social Media", "Growth Hacking", "Analytics", "Copywriting", "Performance Marketing"],
  "stoicism": ["Marcus Aurelius", "Virtue Ethics", "Epictetus", "Mindfulness", "CBT", "Tư duy phản biện", "Ryan Holiday", "Phật giáo"],
  "ai-ml": ["Neural Networks", "LLM", "Computer Vision", "NLP", "Reinforcement Learning", "MLOps", "AI Ethics", "Prompt Engineering"],
  "behavioral-psychology": ["Cognitive Bias", "Behavioral Economics", "Habit Formation", "Nudge Theory", "Daniel Kahneman", "CBT", "UX Psychology"],
  "history": ["Triều Nguyễn", "Hùng Vương", "Lý Trần", "Văn hóa Đông Sơn", "Bắc thuộc", "Kháng chiến"],
  "business-startup": ["Lean Startup", "Product-Market Fit", "Venture Capital", "Growth Strategy", "B2B SaaS", "Go-to-Market"],
  "default": ["Knowledge Management", "Critical Thinking", "Research Methods", "Learning Science", "Mental Models"],
};

const BOOKS_BY_TOPIC_KEY: Record<string, string[]> = {
  "digital-marketing": ["this-is-marketing", "hooked", "zero-to-one", "predictably-irrational"],
  "stoicism": ["meditations", "letters-from-a-stoic", "enchiridion", "obstacle-is-the-way"],
  "ai-ml": [],
  "behavioral-psychology": ["thinking-fast-and-slow", "predictably-irrational", "hooked", "atomic-habits"],
  "history": ["sapiens"],
  "business-startup": ["zero-to-one", "this-is-marketing", "hooked"],
  "default": ["meditations", "atomic-habits", "thinking-fast-and-slow", "sapiens"],
};

const COMMUNITIES_BY_TOPIC_KEY: Record<string, string[]> = {
  "digital-marketing": ["digital-marketing-vn", "startup-founders-vn"],
  "stoicism": ["triet-hoc-ung-dung"],
  "ai-ml": ["ai-builders-vietnam", "data-science-vn"],
  "behavioral-psychology": ["psychology-vietnam"],
  "history": ["lich-su-viet-nam"],
  "business-startup": ["startup-founders-vn", "digital-marketing-vn"],
  "default": ["ai-builders-vietnam", "triet-hoc-ung-dung"],
};

export function getSearchResults(query: string): SearchResult {
  const topicKey = resolveTopicKey(query);

  const bookSlugs = BOOKS_BY_TOPIC_KEY[topicKey] || BOOKS_BY_TOPIC_KEY.default;
  const books = bookSlugs
    .map((slug) => BOOKS.find((b) => b.slug === slug))
    .filter(Boolean) as typeof BOOKS;

  const communitySlugs = COMMUNITIES_BY_TOPIC_KEY[topicKey] || COMMUNITIES_BY_TOPIC_KEY.default;
  const communities = communitySlugs
    .map((slug) => COMMUNITIES.find((c) => c.slug === slug))
    .filter(Boolean) as typeof COMMUNITIES;

  const documents = DOCS_BY_TOPIC[topicKey] || DOCS_BY_TOPIC.default;
  const courses = COURSES_BY_TOPIC[topicKey] || COURSES_BY_TOPIC.default;
  const topics = TOPICS_BY_KEY[topicKey] || TOPICS_BY_KEY.default;
  const learningPath = PATHS_BY_TOPIC[topicKey] || PATHS_BY_TOPIC.default;
  const suggestedQuestions = SUGGESTED_QUESTIONS[topicKey] || SUGGESTED_QUESTIONS.default;

  return {
    query,
    aiOverview: OVERVIEWS[topicKey] || OVERVIEWS.default,
    stats: {
      books: books.length + 8,
      documents: documents.length + 44,
      courses: courses.length + 12,
      communities: communities.length + 4,
      topics: topics.length,
    },
    books,
    documents,
    courses,
    communities,
    topics,
    learningPath,
    suggestedQuestions,
  };
}
