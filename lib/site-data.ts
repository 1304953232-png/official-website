import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Building2,
  CalendarDays,
  CircuitBoard,
  Cpu,
  Factory,
  FlaskConical,
  Globe2,
  Handshake,
  Landmark,
  Network,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "关于燕南", href: "/about" },
  { label: "业务体系", href: "/what-we-do" },
  { label: "机构化联合创业", href: "/venture-studio" },
  { label: "创新生态", href: "/ecosystem" },
  { label: "重点方向", href: "/focus-areas" },
  { label: "实践案例", href: "/case-studies" },
  { label: "资本支持", href: "/capital" },
  { label: "团队", href: "/team" },
  { label: "联系我们", href: "/contact" }
];

export const aboutCards = [
  { value: "2024 年成立", label: "立足新一轮科技创新浪潮，开启专业化科创服务实践。", icon: Sparkles },
  { value: "扎根中关村", label: "总部设于北京中关村，深度连接中国科技创新核心区域。", icon: Building2 },
  { value: "聚焦 AI 与前沿科技", label: "关注 AI 智能体、AI 基础设施、具身智能、大模型与物理智能等方向。", icon: BrainCircuit },
  { value: "全周期公司共创", label: "围绕团队、资本、产业、政策与公司治理，提供长期创建支持。", icon: Workflow }
];

export const services = [
  {
    zhTitle: "科技成果转化",
    title: "让实验室技术走向市场",
    cn: "触达全国顶级实验室前沿技术，培育“水下”优质项目，协助完成合规流程、技术确权、知识产权、成果转化、公司设立和产业落地，最大程度获取高校资源助力。",
    keywords: ["技术确权", "专利申请", "产学研合作", "公司设立", "产业落地"],
    examples: ["北京大学工业具身实验室", "北京大学触觉感知实验室"],
    icon: FlaskConical
  },
  {
    zhTitle: "创业公司赋能",
    title: "让早期公司更快建立增长秩序",
    cn: "面向具备技术壁垒和成长潜力的早期科技企业，提供多元活动与流量渠道、全域资本对接、战略梳理、融资规划、产业对接、路演辅导、政策申报和治理支持。",
    keywords: ["战略咨询", "融资陪跑", "产业对接", "路演辅导", "政策申报"],
    examples: ["AI 基础设施企业融资顾问", "类脑计算芯片企业融资顾问"],
    icon: Rocket
  },
  {
    zhTitle: "校友企业孵化",
    title: "让校友网络成为长期创业资源",
    cn: "依托高校校友网络、创业社区和产业资本生态，深度链接技术创始人、产业专家、投资机构和创业导师，为校友创业企业提供专属资源倾斜和长期成长支持。",
    keywords: ["校友网络", "创业导师", "资本资源", "产业订单", "长期陪跑"],
    examples: ["前沿技术航空航天量子芯片项目", "北大具身智能创业者世界模型项目"],
    icon: Users
  }
];

export const ventureComparisons = [
  { model: "燕南创新共创模式", stage: "0-1 创意期", value: "资金 + 运营团队 + 生态支持 + 全周期资源整合", depth: "长期深度参与，陪伴 2-4 年", goal: "共同创建和孵化可规模化的科技公司" },
  { model: "传统孵化器", stage: "1-N 成长期", value: "工位、基础服务、活动资源", depth: "通常为 3-6 个月轻度扶持", goal: "提供创业基础设施" },
  { model: "传统风险投资", stage: "产品验证期后", value: "资金和部分投后管理", depth: "以财务投资和投后跟踪为主", goal: "资本增值和退出" }
];

export const ventureSteps = [
  { title: "明确创业方向", text: "从产业痛点和技术趋势出发，形成经得起验证的商业概念与战略方向。" },
  { title: "提供种子资本", text: "以早期资金支持关键验证，为公司启动和市场反馈建立基础。" },
  { title: "组建核心团队", text: "匹配 CEO 或外部合伙人，连接技术伙伴与产业顾问，搭建核心创始团队。" },
  { title: "完成公司设立", text: "协助股权架构、工商注册、园区选址、政策申报与企业落地，降低早期试错成本。" },
  { title: "进入产业验证", text: "导入真实场景、客户资源、上下游协同与商业订单，推动业务闭环形成。" },
  { title: "规划后续资本路径", text: "提供融资规划、路演辅导和后续投资机构对接，支持并购、产业整合或独立上市等长期路径。" }
];

export const ecosystemStats = [
  ["20+", "高校科技成果转化机构"],
  ["40+", "学院"],
  ["60+", "实验室"],
  ["30+", "高校创业社区"],
  ["10,000+", "高校创业社群成员"],
  ["200+", "早期投资机构"],
  ["50+", "产业投资机构"],
  ["400+", "天使投资人"],
  ["1000+", "AI 创业者"],
  ["3000+", "联合创始人"],
  ["500+", "高校 EMBA 校友"],
  ["200+", "创业导师"],
  ["1500+", "顶尖高校校友"],
  ["10+", "上市公司"],
  ["30+", "创业顾问"]
].map(([value, label]) => ({ value, label }));

export const ecosystemCards = [
  { title: "海量源头项目池", text: "依托头部高校顶级 AI 人才网络、院系合作渠道及技术转移中心，整合校内科研与校友创业资源，形成高质量早期科技项目蓄水池。", icon: FlaskConical },
  { title: "校友创始人网络", text: "通过高校校友会、行业俱乐部等组织深度触达全球校友，重点筛选具备扎实技术背景、商业嗅觉和产业资源的创始人。", icon: Users },
  { title: "产业与资本协同", text: "联动高校校友基金、校内孵化器、校企合作平台、早期投资机构、产业资本和企业家资源，为项目提供融资、场景和订单支持。", icon: Handshake },
  { title: "政策与落地支持", text: "围绕工商注册、园区选址、政策申报、政府补贴和合规治理，帮助初创企业降低运营成本和试错成本。", icon: Landmark }
];

export const activityStats = [
  ["100+", "北京大学 AI 创业营报名项目"],
  ["360+", "海聚英才北京赛区全球人才项目"],
  ["150+", "海聚英才决赛现场生态代表"],
  ["100+", "大湾区创业大赛北京站参与者"],
  ["40+", "AI 宁波北京宣讲高层次人才"],
  ["12", "AI 宁波北京宣讲投资机构代表"]
].map(([value, label]) => ({ value, label }));

function activityImages(slug: string, count: number) {
  return Array.from({ length: count }, (_, index) =>
    `/cases/${slug}/${String(index + 1).padStart(2, "0")}.webp`
  );
}

export const activityPrograms = [
  {
    slug: "pku-ai-camp",
    title: "北京大学 AI 创业营",
    tag: "高校 AI 创业营",
    location: "北京大学 / 北京",
    format: "高校创业营",
    text: "面向北大全校征集人工智能创业项目，吸引超过 100 个项目报名，覆盖机器人、脑机接口、AI4S、智慧医疗、类脑芯片等硬核科技方向，并出现天使轮估值达 5 亿元人民币的明星初创企业。",
    detail: "创业营围绕项目征集、创业课程、导师交流和生态连接，为具备科研背景与技术壁垒的 AI 团队提供集中展示和加速成长的场域。项目方向横跨软件智能与硬科技，体现了高校源头创新的广度与深度。",
    role: "连接高校创新团队、创业导师、产业资源与早期资本，让实验室成果和校园创业项目更快进入公司化与市场验证阶段。",
    metrics: ["100+ 报名项目", "AI4S / 机器人 / 智慧医疗", "5 亿估值项目"],
    outcomes: [
      "形成覆盖机器人、脑机接口、AI4S、智慧医疗和类脑芯片的项目池",
      "建立技术团队与创业导师、产业资源和投资机构之间的交流入口",
      "发现天使轮估值达到 5 亿元人民币的高潜力初创企业"
    ],
    cover: "/cases/pku-ai-camp/02.webp",
    gallery: activityImages("pku-ai-camp", 2),
    icon: BrainCircuit
  },
  {
    slug: "hangzhou-ai-journey",
    title: "杭州 AI 创新之旅",
    tag: "产业创新参访",
    location: "杭州 / 浙江",
    format: "创业者产业参访",
    text: "组织创业者走进宇树科技、阿里总部、云深处、图灵小镇、浙大强鹰及北大信息技术高等研究院，结合闭门晚宴、投资活动和工程创业教授分享，形成跨城市技术、产业与资本连接。",
    detail: "活动以企业参访、技术交流、创业者闭门沟通和投资对接为主线，让参与者在短时间内接触杭州人工智能产业的一线公司、研究机构与创业基础设施。",
    role: "通过高密度行程连接企业、科研机构、工程创业者和投资人，将参访学习进一步转化为合作线索、产业认知与长期关系。",
    metrics: ["六小龙参访", "阿里 / 浙大 / 北大信研院", "CEO 闭门晚宴"],
    outcomes: [
      "走进宇树科技、云深处、阿里总部等人工智能与科技企业",
      "链接浙大强鹰、北大信息技术高等研究院等科研与转化平台",
      "通过 CEO 闭门晚宴、教授分享和投资活动沉淀深度连接"
    ],
    cover: "/cases/hangzhou-ai-journey/01.webp",
    gallery: activityImages("hangzhou-ai-journey", 6),
    icon: Globe2
  },
  {
    slug: "zhongguancun-maker-competition",
    title: "中关村百校联盟创客大赛",
    tag: "高校创业大赛",
    location: "北京 / 多高校赛区",
    format: "高校创业大赛",
    text: "围绕人工智能、智能智造等新兴产业集群，在清北、矿大（北京）、国科大等赛区发现高水平创新创业团队，推动高校项目接受产业界、学术界和投资界联合评审。",
    detail: "第七届中关村百校联盟人才创客大赛通过清北赛区、中国矿业大学（北京）赛区和中国科学院大学赛区等多场活动，持续触达不同高校的科研与创业团队。",
    role: "以分赛区路演和联合评审机制筛选项目，让高校创业者获得来自产业、学术和投资视角的反馈，并为后续孵化与资源对接建立基础。",
    metrics: ["清北赛区", "矿大赛区", "国科大赛区"],
    outcomes: [
      "覆盖清北、中国矿业大学（北京）和中国科学院大学等高校赛区",
      "围绕人工智能、智能制造等新兴产业方向开展项目展示",
      "引入产业界、学术界和投资界代表参与项目评审与交流"
    ],
    cover: "/cases/zhongguancun-maker-competition/04.webp",
    gallery: activityImages("zhongguancun-maker-competition", 12),
    icon: Trophy
  },
  {
    slug: "haiju-global-competition",
    title: "第五届“海聚英才”全球创新创业大赛",
    tag: "全球人才赛事",
    location: "北京赛区",
    format: "全球人才创新赛事",
    text: "北京赛区吸引全球 10 余个国家的 360 余个人才项目参赛，人工智能项目超过三分之一，创始团队具海外背景项目占比超 50%，现场汇聚高校、园区、投资机构与人力资源服务机构等 150 余名代表。",
    detail: "北京赛区以全球人才项目为核心，形成项目征集、决赛展示和多方生态对接的完整活动场景。人工智能项目与海外背景团队占比较高，体现出项目池的国际化和前沿科技属性。",
    role: "连接全球人才团队与北京高校、产业园区、投资机构和专业服务资源，帮助优质项目获得城市落地、融资与产业合作的进一步机会。",
    metrics: ["360+ 人才项目", "10+ 国家", "150+ 生态代表"],
    outcomes: [
      "吸引来自全球 10 余个国家的 360 余个人才项目",
      "人工智能项目占比超过三分之一，海外背景项目占比超过 50%",
      "汇聚高校、园区、投资机构及专业服务机构等 150 余名代表"
    ],
    cover: "/cases/haiju-global-competition/01.webp",
    gallery: activityImages("haiju-global-competition", 4),
    icon: Users
  },
  {
    slug: "greater-bay-area-roadshow",
    title: "粤港澳大湾区创业大赛北京站",
    tag: "区域创新路演",
    location: "北京站",
    format: "区域创新路演",
    text: "以“湾创未来 粤聚英才”为主题，在北京组织省外宣介活动，连接政府部门、高校、孵化基地、创业团队、投融资机构及行业协会代表，现场吸引 100 余人参与。",
    detail: "北京站宣介活动围绕大湾区创新创业政策、参赛通道与人才机会展开，通过跨区域推介把北京高校和创业团队与粤港澳大湾区的产业、政策和孵化资源连接起来。",
    role: "组织政府、高校、孵化载体、创业者、投融资机构和行业协会代表同场交流，降低跨区域政策与资源信息的获取门槛。",
    metrics: ["北京站", "100+ 参与者", "政府 / 高校 / 资本"],
    outcomes: [
      "以“湾创未来 粤聚英才”为主题开展北京站宣介",
      "现场吸引政府、高校、孵化基地、创业团队和投资机构等 100 余人",
      "为北京创新项目连接大湾区赛事、人才政策与产业落地资源"
    ],
    cover: "/cases/greater-bay-area-roadshow/02.webp",
    gallery: activityImages("greater-bay-area-roadshow", 4),
    icon: Network
  },
  {
    slug: "ai-ningbo-competition",
    title: "第二届“AI 宁波”人工智能赋能产业大赛",
    tag: "AI 产业赛事",
    location: "北京宣讲 / 宁波北仑",
    format: "AI 产业创新赛事",
    text: "北京宣讲活动汇聚 40 位人工智能领域高层次人才、12 位投资机构代表，以及北京大学 AI 创业营、北京大学创新学社等百余位嘉宾，聚焦具身智能机器人、智能网联汽车、人工智能芯片等赛道。",
    detail: "活动以宁波产业需求和人工智能人才项目为连接点，围绕具身智能机器人、智能网联汽车、人工智能芯片等六大产业赛道开展赛事宣讲、人才交流和资本连接。",
    role: "把城市产业命题、人工智能高层次人才、高校创业社群和投资机构集中到同一场景，推动技术项目与区域产业需求形成匹配。",
    metrics: ["40 位 AI 人才", "12 家投资机构", "6 大产业赛道"],
    outcomes: [
      "汇聚 40 位人工智能领域高层次人才和 12 家投资机构代表",
      "连接北京大学 AI 创业营、北京大学创新学社等百余位嘉宾",
      "覆盖具身智能机器人、智能网联汽车和人工智能芯片等六大赛道"
    ],
    cover: "/cases/ai-ningbo-competition/01.webp",
    gallery: activityImages("ai-ningbo-competition", 4),
    icon: CalendarDays
  }
];

export type ActivityProgram = (typeof activityPrograms)[number];

export const yanYuanEcosystem = [
  { title: "燕缘实验室", text: "联合政府与市场化资本探索拨投联动，支持有组织的超前孵化与概念验证。" },
  { title: "燕缘孵化器", text: "聚焦成果转化和科学家服务的专业孵化载体，深化企业培育服务。" },
  { title: "燕缘国际科创大赛", text: "生态化整合北大资源，建设国际一流科创交流服务平台和优质项目池。" },
  { title: "燕缘创投", text: "延续元培基金实践基础，投早、投小、投原始创新，做耐心资本。" },
  { title: "燕缘科创人才社区", text: "建设北大系科创人才社区，连接培训、猎头、创业服务和长期社群力量。" },
  { title: "燕缘科创评论", text: "聚焦全球科技成果转化的专业智库与媒体，讲好科创故事，传播科创力量。" },
  { title: "燕缘会客厅", text: "打造城市级北大人会客空间，服务北大人及北大之友交流与合作。" },
  { title: "燕缘公益", text: "拓展公益项目，反哺北大、服务行业进步，做更多难而正确且专业的事。" }
];

export const sourcingMix = [
  { label: "院系、实验室转化", value: "≥40%", note: "核心筛选占比" },
  { label: "校友创始人企业", value: "≥20%", note: "核心筛选占比" },
  { label: "联动生态布局", value: "≤40%", note: "外部补充占比" }
];

export const partnerInstitutions = [
  "北京大学创新创业学院",
  "北京大学科技开发部",
  "北京大学 AI 创业营",
  "北京大学学生创新学社",
  "清华大学工业开发研究院",
  "清华大学智能产业研究院",
  "中国科学院物理研究所",
  "中国科学院自动化研究所",
  "中国科学院计算机研究所",
  "海淀创业园"
];

const focusAreaRows: Array<[string, string, LucideIcon]> = [
  ["智能硬件与 AI 智能体", "面向智能硬件、企业服务、知识工作流和自动化场景的新一代 AI 智能体与交互系统。", BrainCircuit],
  ["AI 基础设施", "支撑模型训练、推理部署、数据处理和算力调度的底层基础设施。", CircuitBoard],
  ["具身智能", "连接感知、决策与行动的智能系统，推动机器人进入真实产业场景。", Factory],
  ["大模型与物理智能", "关注大模型能力、垂直应用、物理智能与行业落地形成的创业机会。", Blocks],
  ["生物医药", "面向生命科学、医疗健康和药物研发的前沿技术项目。", ShieldCheck],
  ["航空航天", "围绕航空航天、卫星、先进材料和高端制造的硬科技方向。", Orbit],
  ["量子计算与芯片", "关注量子计算、芯片设计和下一代计算架构相关机会。", Cpu],
  ["先进制造", "以智能制造、柔性制造、离散制造流程优化和工业自动化为核心的产业升级方向。", Factory],
  ["AI 人才与创始人网络", "围绕高校 AI 人才、校友创始人与产业专家形成早期项目发现网络。", Network],
  ["科技成果转化", "支持高校科研成果从实验室进入产品、公司和产业场景。", FlaskConical]
];

export const focusAreas = focusAreaRows.map(([title, description, icon]) => ({ title, description, icon }));

export const caseServices = [
  "公司股权架构设立",
  "天使轮融资直投（400 万人民币）",
  "公司业务梳理与战略框架形成（形成正式 BP）",
  "种子轮融资 FA（1000 万元人民币）",
  "协助与北京大学成立联合实验室",
  "后续轮次融资对接"
];

export const caseTimeline = [
  ["2026 年初", "公司设立与早期战略梳理"],
  ["2026 年 4 月", "天使轮融资与业务框架形成"],
  ["2026 年 6 月", "种子轮融资推进"],
  ["2026 年 7 月", "联合实验室与后续融资对接"]
].map(([date, text]) => ({ date, text }));

export const caseHighlights = [
  { label: "项目定位", value: "国际化产业老兵 + 顶尖科研团队" },
  { label: "技术方向", value: "离散制造流程 · 柔性精密制造优化" },
  { label: "阶段进展", value: "第一个工位交付，20 人团队到岗，启动大学联合实验室" },
  { label: "产业验证", value: "已与 10+ 家行业头部企业达成意向订单" }
];

export const fundItems = [
  { title: "燕南一期基金", text: "元禾重元人工智能创业投资基金，双管理人早期创投基金设立中。", status: "目标规模 1 亿元 / 设立中", icon: BrainCircuit },
  { title: "联合管理基金模式", text: "计划以联合普通合伙人（Co-GP）方式与燕缘创投筹备早期创投基金，形成资源与资本的深度联动。", status: "筹备中", icon: Handshake },
  { title: "成果转化支持", text: "支持高校科研成果从实验室进入产业场景，联动技术转移中心与高校创新平台。", status: "持续关注", icon: Landmark },
  { title: "公司共创投资", text: "不止投资，更参与公司从 0 到 1 的创建、团队搭建、产业验证和融资成长。", status: "持续关注", icon: ArrowUpRight }
];

export const fundFacts = [
  { label: "基金管理人", value: "苏州工业园区元禾重元股权投资基金管理有限公司（登记编号：P1000720）" },
  { label: "执行事务合伙人", value: "燕南创新（北京）企业孵化器有限公司" },
  { label: "基金存续期", value: "4+4+2，投资期 4 年，退出期 4 年，可延期 2 年" },
  { label: "合作方信息", value: "燕缘创投为北京大学上海临港国际科技创新中心发起设立的北大系市场化创业投资机构" }
];

export const teamPeople = [
  { initials: "LDY", name: "刘德英", role: "创业顾问", bio: "北京大学创新创业学院院长、校科协秘书长，副教授。曾任北大生命科学学院党委书记、学生工作部副部长，长期专注双创教育与思政研究。" },
  { initials: "YWH", name: "姚卫浩", role: "创业顾问", bio: "北京大学科技开发部部长、产业技术研究院院长。深耕高校科技成果转化与产学研融合，牵头搭建北大知识产权与技术转移体系。" },
  { initials: "SFZ", name: "孙方舟", role: "执行团队", bio: "硕士毕业于北京大学，拥有超过十年的金融投资工作经验，专注早期创业孵化与早期投资，累计辅导超 200 个初创项目。" },
  { initials: "ZXY", name: "张馨予", role: "执行团队", bio: "硕士毕业于美国芝加哥大学，曾任职于券商投行部，负责过多个重组并购及投融资项目。" },
  { initials: "JY", name: "惊云", role: "执行团队", bio: "毕业于清华大学五道口金融学院，康奈尔大学 MBA。连续创业者，前腾讯游戏产品经理，资深互联网自媒体。" },
  { initials: "CL", name: "Celly Li", role: "执行团队", bio: "曾任知名私募投资主管，主导早期项目投资额超 3 亿元，擅长投后孵化、财务建模、资本规划及跨境投融资合规。" }
];

const teamRoleRows: Array<[string, string, string]> = [
  ["UIL", "高校创新与转化", "深度理解高校科研体系、创新创业教育和成果转化机制。"],
  ["VB", "公司创建与运营", "参与公司从概念、团队、产品到融资的全过程建设。"],
  ["IP", "投资与资本规划", "具备早期投资、融资顾问、资本规划和投后支持经验。"],
  ["IA", "产业顾问与场景", "连接真实产业场景、客户资源、供应链和商业订单。"],
  ["RC", "科研成果产业化", "支持专利、技术确权、产学研合作和成果产业化路径设计。"]
];

export const teamRoles = teamRoleRows.map(([initials, title, text]) => ({ initials, title, text }));

export const serviceMatrix = ["联创推荐", "工商注册", "园区选址", "政策申报", "战略咨询", "股权架构搭建", "核心团队组建", "专利申请", "技术确权", "产学研合作落地", "产业对接", "真实应用场景导入", "商业订单导入", "融资陪跑", "路演辅导", "对接顶级投资机构与产业资本", "财务、法务、合规咨询", "政府补贴申请"];

export const contactStages = ["创意或科研阶段", "公司已设立", "种子轮阶段", "A 轮前", "产业合作方", "投资合作方"];

export const socialProof = [
  { label: "源自高校创新", icon: Landmark },
  { label: "聚焦 AI 与前沿科技", icon: BrainCircuit },
  { label: "机构化共创模式", icon: Workflow }
];

export const footerLinks = navItems.filter((item) =>
  ["关于燕南", "业务体系", "机构化联合创业", "创新生态", "重点方向", "实践案例", "联系我们"].includes(item.label)
);

export const ecosystemPillars = [
  { label: "科研", icon: FlaskConical },
  { label: "资本", icon: Globe2 },
  { label: "产业", icon: Factory },
  { label: "政策", icon: Landmark }
];
