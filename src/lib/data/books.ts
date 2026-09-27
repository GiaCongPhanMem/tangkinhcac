export interface Book {
  slug: string;
  title: string;
  author: string;
  cover: string; // emoji or image path
  coverGrad: string;
  topic: string;
  topicSlug: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  whyRead: string;
  whoFor: string;
  pages: number;
  year: number;
  relatedSlugs: string[];
  buyLinks: { label: string; url: string }[];
}

export const BOOKS: Book[] = [
  {
    slug: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    cover: "📖",
    coverGrad: "from-[#1a0f0a] to-[#5a2510]",
    topic: "Triết học Stoicism",
    topicSlug: "stoicism",
    difficulty: "Beginner",
    description:
      "Nhật ký cá nhân của Hoàng đế Marcus Aurelius — bộ sưu tập những suy ngẫm về đức hạnh, lý trí và cách sống một cuộc đời có ý nghĩa theo triết học Stoic.",
    whyRead:
      "Đây là văn bản Stoic gốc, không được viết để xuất bản — sự chân thực đó khiến nó trở nên mạnh mẽ hơn bất kỳ cuốn tự giúp nào hiện đại.",
    whoFor: "Bất kỳ ai muốn hiểu Stoicism từ nguồn gốc. Không cần nền tảng triết học.",
    pages: 256,
    year: 180,
    relatedSlugs: ["letters-from-a-stoic", "obstacle-is-the-way", "enchiridion"],
    buyLinks: [
      { label: "Tiki", url: "https://tiki.vn" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
  },
  {
    slug: "letters-from-a-stoic",
    title: "Letters from a Stoic",
    author: "Seneca",
    cover: "📜",
    coverGrad: "from-[#0f1a0a] to-[#1a3a10]",
    topic: "Triết học Stoicism",
    topicSlug: "stoicism",
    difficulty: "Beginner",
    description:
      "Bộ sưu tập 124 bức thư của Seneca gửi cho người bạn Lucilius — mỗi bức thư là một bài học triết học thực tiễn về cách sống, chết, tình bạn và tự do.",
    whyRead:
      "Seneca viết với giọng văn ấm áp, gần gũi hơn Marcus Aurelius. Dễ đọc và áp dụng ngay vào cuộc sống hiện đại.",
    whoFor: "Người muốn áp dụng Stoicism vào cuộc sống hàng ngày.",
    pages: 272,
    year: 65,
    relatedSlugs: ["meditations", "obstacle-is-the-way"],
    buyLinks: [{ label: "Amazon", url: "https://amazon.com" }],
  },
  {
    slug: "enchiridion",
    title: "Enchiridion",
    author: "Epictetus",
    cover: "🏛️",
    coverGrad: "from-[#1a1a0a] to-[#3a3010]",
    topic: "Triết học Stoicism",
    topicSlug: "stoicism",
    difficulty: "Beginner",
    description:
      "Cẩm nang triết học Stoic được biên soạn từ các bài giảng của Epictetus. Ngắn gọn, súc tích — 53 chương về cách phân biệt những gì trong tầm kiểm soát của bạn.",
    whyRead:
      "Cuốn sách ngắn nhất và dễ tiếp cận nhất về Stoicism. Đọc trong 2 giờ, áp dụng cả đời.",
    whoFor: "Người bắt đầu với Stoicism, muốn một bản tóm tắt thực hành.",
    pages: 93,
    year: 135,
    relatedSlugs: ["meditations", "letters-from-a-stoic"],
    buyLinks: [{ label: "Amazon", url: "https://amazon.com" }],
  },
  {
    slug: "obstacle-is-the-way",
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    cover: "⚡",
    coverGrad: "from-[#1a0a0a] to-[#3a1010]",
    topic: "Triết học Stoicism",
    topicSlug: "stoicism",
    difficulty: "Beginner",
    description:
      "Ryan Holiday hiện đại hóa triết học Stoic thông qua những câu chuyện về các nhà lãnh đạo vĩ đại — từ Marcus Aurelius đến Steve Jobs — những người biến trở ngại thành lợi thế.",
    whyRead:
      "Cầu nối tốt nhất giữa Stoicism cổ đại và ứng dụng thực tế trong kinh doanh, thể thao và cuộc sống hiện đại.",
    whoFor: "Doanh nhân, nhà lãnh đạo, người muốn tư duy resilience.",
    pages: 224,
    year: 2014,
    relatedSlugs: ["meditations", "letters-from-a-stoic"],
    buyLinks: [
      { label: "Tiki", url: "https://tiki.vn" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
  },
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "🧠",
    coverGrad: "from-[#0a0f1a] to-[#102050]",
    topic: "Tâm lý học hành vi",
    topicSlug: "behavioral-psychology",
    difficulty: "Intermediate",
    description:
      "Daniel Kahneman — nhà tâm lý học đoạt Nobel — giải thích hai hệ thống tư duy của con người: System 1 (nhanh, trực giác) và System 2 (chậm, lý trí) và cách chúng ảnh hưởng mọi quyết định.",
    whyRead:
      "Cuốn sách nền tảng cho bất kỳ ai muốn hiểu cognitive bias, behavioral economics và quá trình ra quyết định.",
    whoFor: "Người làm marketing, UX, quản lý, đầu tư — bất kỳ ai ra quyết định.",
    pages: 499,
    year: 2011,
    relatedSlugs: ["hooked", "atomic-habits", "predictably-irrational"],
    buyLinks: [
      { label: "Tiki", url: "https://tiki.vn" },
      { label: "Fahasa", url: "https://fahasa.com" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "⚛️",
    coverGrad: "from-[#0a1a10] to-[#103a20]",
    topic: "Phát triển bản thân",
    topicSlug: "self-development",
    difficulty: "Beginner",
    description:
      "Hệ thống khoa học về việc xây dựng thói quen tốt và phá bỏ thói quen xấu. James Clear tổng hợp nghiên cứu từ khoa học thần kinh, tâm lý học và khoa học hành vi.",
    whyRead:
      "Cuốn sách thực hành nhất về thay đổi hành vi. Framework 4 bước có thể áp dụng cho bất kỳ thói quen nào.",
    whoFor: "Bất kỳ ai muốn cải thiện năng suất, sức khỏe hoặc kỹ năng.",
    pages: 320,
    year: 2018,
    relatedSlugs: ["thinking-fast-and-slow", "hooked", "deep-work"],
    buyLinks: [
      { label: "Tiki", url: "https://tiki.vn" },
      { label: "Fahasa", url: "https://fahasa.com" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
  },
  {
    slug: "hooked",
    title: "Hooked",
    author: "Nir Eyal",
    cover: "🪝",
    coverGrad: "from-[#1a0a1a] to-[#3a1040]",
    topic: "Product & UX",
    topicSlug: "product-ux",
    difficulty: "Intermediate",
    description:
      "Model Hook 4 bước (Trigger → Action → Variable Reward → Investment) giải thích cách các sản phẩm công nghệ tạo ra thói quen người dùng.",
    whyRead:
      "Bắt buộc đọc cho product manager, UX designer và marketer muốn hiểu psychology of engagement.",
    whoFor: "Product manager, UX designer, startup founder, marketer.",
    pages: 256,
    year: 2014,
    relatedSlugs: ["thinking-fast-and-slow", "atomic-habits"],
    buyLinks: [{ label: "Amazon", url: "https://amazon.com" }],
  },
  {
    slug: "sapiens",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    cover: "🌍",
    coverGrad: "from-[#0a150f] to-[#0f2a1a]",
    topic: "Lịch sử",
    topicSlug: "history",
    difficulty: "Beginner",
    description:
      "Từ loài linh trưởng đến chủ nhân hành tinh — Harari kể lại toàn bộ lịch sử nhân loại trong một narrative đặc biệt hấp dẫn về cách Homo sapiens chinh phục thế giới.",
    whyRead:
      "Cho bạn một framework để hiểu tại sao thế giới hoạt động như nó đang hoạt động. Thay đổi cách bạn nhìn nhận xã hội, kinh tế và tôn giáo.",
    whoFor: "Bất kỳ ai muốn hiểu big picture về lịch sử nhân loại.",
    pages: 512,
    year: 2011,
    relatedSlugs: ["homo-deus"],
    buyLinks: [
      { label: "Tiki", url: "https://tiki.vn" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
  },
  {
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    cover: "🎯",
    coverGrad: "from-[#0a0f1a] to-[#101a30]",
    topic: "Năng suất",
    topicSlug: "productivity",
    difficulty: "Beginner",
    description:
      "Cal Newport lập luận rằng khả năng tập trung sâu là kỹ năng quý hiếm nhất trong nền kinh tế hiện đại, và đưa ra framework để cultivate nó.",
    whyRead:
      "Trong thời đại distraction, Deep Work là competitive advantage. Newport cho bạn cả philosophy lẫn practical rules.",
    whoFor: "Knowledge worker, developer, writer, researcher — ai cũng cần deep work.",
    pages: 304,
    year: 2016,
    relatedSlugs: ["atomic-habits", "thinking-fast-and-slow"],
    buyLinks: [
      { label: "Tiki", url: "https://tiki.vn" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
  },
  {
    slug: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel",
    cover: "🚀",
    coverGrad: "from-[#0f0a1a] to-[#1a1040]",
    topic: "Kinh doanh & Startup",
    topicSlug: "business-startup",
    difficulty: "Intermediate",
    description:
      "Peter Thiel — đồng sáng lập PayPal và nhà đầu tư đầu tiên của Facebook — chia sẻ những suy nghĩ phản thông thường về startup, cạnh tranh và xây dựng tương lai.",
    whyRead:
      "Thay đổi cách bạn nghĩ về competition, monopoly và innovation. Một trong những cuốn sách quan trọng nhất về startup thinking.",
    whoFor: "Startup founder, nhà đầu tư, người muốn hiểu Silicon Valley mindset.",
    pages: 224,
    year: 2014,
    relatedSlugs: ["hooked"],
    buyLinks: [
      { label: "Tiki", url: "https://tiki.vn" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
  },
  {
    slug: "this-is-marketing",
    title: "This Is Marketing",
    author: "Seth Godin",
    cover: "📢",
    coverGrad: "from-[#1a0f0a] to-[#3a1f10]",
    topic: "Marketing",
    topicSlug: "marketing",
    difficulty: "Beginner",
    description:
      "Seth Godin định nghĩa lại marketing không phải là quảng cáo hay spam — mà là hành động làm cho cuộc sống của người khác tốt hơn bằng cách kết nối họ với thứ họ thực sự cần.",
    whyRead:
      "Thay đổi hoàn toàn mindset về marketing. Đặc biệt phù hợp cho creator economy và personal branding.",
    whoFor: "Marketer, creator, founder, consultant — ai cần kể câu chuyện của mình.",
    pages: 288,
    year: 2018,
    relatedSlugs: ["hooked", "zero-to-one"],
    buyLinks: [{ label: "Amazon", url: "https://amazon.com" }],
  },
  {
    slug: "predictably-irrational",
    title: "Predictably Irrational",
    author: "Dan Ariely",
    cover: "🎲",
    coverGrad: "from-[#0a1010] to-[#102020]",
    topic: "Tâm lý học hành vi",
    topicSlug: "behavioral-psychology",
    difficulty: "Beginner",
    description:
      "Dan Ariely chứng minh rằng con người không phải rational actors — chúng ta đưa ra những quyết định phi lý một cách có thể dự đoán được.",
    whyRead:
      "Đọc để hiểu tại sao bạn đưa ra những quyết định tệ, và làm thế nào để thiết kế môi trường giúp bạn quyết định tốt hơn.",
    whoFor: "Bất kỳ ai muốn hiểu behavioral economics và decision making.",
    pages: 304,
    year: 2008,
    relatedSlugs: ["thinking-fast-and-slow", "hooked"],
    buyLinks: [{ label: "Amazon", url: "https://amazon.com" }],
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

export function getBooksByTopic(topicSlug: string): Book[] {
  return BOOKS.filter((b) => b.topicSlug === topicSlug);
}

export function getRelatedBooks(book: Book): Book[] {
  return book.relatedSlugs
    .map((s) => BOOKS.find((b) => b.slug === s))
    .filter(Boolean) as Book[];
}
