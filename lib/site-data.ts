import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Building2,
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
  Users,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Venture Studio", href: "#venture-studio" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Case Study", href: "#case-study" },
  { label: "Fund", href: "#fund" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

export const aboutCards = [
  { value: "Founded in 2024", label: "2024 年正式成立，立足新时代科技创新发展浪潮，开启专业化科创服务新篇章。", icon: Sparkles },
  { value: "Based in Zhongguancun", label: "总部设于北京中关村，深度扎根中国科技创新核心区域。", icon: Building2 },
  { value: "AI & Frontier Technology", label: "聚焦 AI Agent、AI 基础设施、具身智能、大模型、物理智能等前沿科技方向。", icon: BrainCircuit },
  { value: "Full-Cycle Venture Building", label: "围绕团队组建、校企资源、投融资、产业与地方政策、校友网络和生产落地形成全周期赋能。", icon: Workflow }
];

export const services = [
  {
    zhTitle: "实验室科技成果转化",
    title: "Lab-to-Market Technology Transfer",
    cn: "触达全国顶级实验室前沿技术，培育“水下”优质项目，协助完成合规流程、技术确权、知识产权、成果转化、公司设立和产业落地，最大程度获取高校资源助力。",
    keywords: ["技术确权", "专利申请", "产学研合作", "公司设立", "产业落地"],
    examples: ["北京大学工业具身实验室", "北京大学触觉感知实验室"],
    icon: FlaskConical
  },
  {
    zhTitle: "优质创业公司赋能",
    title: "Startup Empowerment",
    cn: "面向具备技术壁垒和成长潜力的早期科技企业，提供多元活动与流量渠道、全域资本对接、战略梳理、融资规划、产业对接、路演辅导、政策申报和治理支持。",
    keywords: ["战略咨询", "融资陪跑", "产业对接", "路演辅导", "政策申报"],
    examples: ["AI 基础设施企业融资顾问", "类脑计算芯片企业融资顾问"],
    icon: Rocket
  },
  {
    zhTitle: "校友企业孵化",
    title: "Alumni Venture Incubation",
    cn: "依托高校校友网络、创业社区和产业资本生态，深度链接技术创始人、产业专家、投资机构和创业导师，为校友创业企业提供专属资源倾斜和长期成长支持。",
    keywords: ["校友网络", "创业导师", "资本资源", "产业订单", "长期陪跑"],
    examples: ["前沿技术航空航天量子芯片项目", "北大具身智能创业者世界模型项目"],
    icon: Users
  }
];

export const ventureComparisons = [
  { model: "Venture Studio", stage: "0-1 创意期", value: "资金 + 运营团队 + 生态支持 + 全周期资源整合", depth: "长期深度操盘，陪伴 2-4 年", goal: "共同创建和孵化可规模化的科技公司" },
  { model: "Traditional Incubator", stage: "1-N 成长期", value: "工位、基础服务、活动资源", depth: "通常为 3-6 个月轻度扶持", goal: "提供创业基础设施" },
  { model: "Traditional VC", stage: "产品验证期后", value: "资金和部分投后管理", depth: "以财务投资和投后跟踪为主", goal: "资本增值和退出" }
];

export const ventureSteps = [
  { title: "Strategic Direction", text: "挖掘市场痛点，参与产业趋势判断，形成高可行性的商业概念和战略方向。" },
  { title: "Seed Capital", text: "投入种子资金，为公司早期发展形成基石，并支持项目验证市场反馈。" },
  { title: "Team Building", text: "匹配精准画像 CEO 或外部合伙人，链接技术合伙人、产业顾问和外部资源，完成核心创始团队搭建。" },
  { title: "Company Formation", text: "协助完成股权架构、工商注册、园区选址、政策申报和企业落地，并协调后台服务降低试错成本。" },
  { title: "Industrial Validation", text: "导入真实产业场景、客户资源、上下游协同和商业订单，推动业务闭环跑通。" },
  { title: "Follow-on Financing & Exit", text: "提供融资规划、路演辅导、后续轮次投资机构对接，并支持独立 IPO、并购或产业整合等长期资本路径。" }
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
  ["Smart Hardware / AI Agent", "面向智能硬件、企业服务、知识工作流和自动化场景的新一代 AI Agent 与交互系统。", BrainCircuit],
  ["AI Infrastructure", "支撑模型训练、推理部署、数据处理和算力调度的 AI 基础设施。", CircuitBoard],
  ["Embodied Intelligence", "连接感知、决策与行动的具身智能系统，推动机器人进入真实产业场景。", Factory],
  ["Large Models / Physical AI", "围绕大模型能力、垂直应用、物理智能和行业落地的创新公司。", Blocks],
  ["Biomedicine", "面向生命科学、医疗健康和药物研发的前沿技术项目。", ShieldCheck],
  ["Aerospace", "围绕航空航天、卫星、先进材料和高端制造的硬科技方向。", Orbit],
  ["Quantum Chips", "关注量子计算、芯片设计和下一代计算架构相关机会。", Cpu],
  ["Advanced Manufacturing", "以智能制造、柔性制造、离散制造流程优化和工业自动化为核心的产业升级方向。", Factory],
  ["AI Talent & Founder Networks", "围绕高校 AI 人才、校友创始人与产业专家形成早期项目发现网络。", Network],
  ["Technology Transfer", "支持高校科研成果从实验室进入产品、公司和产业场景。", FlaskConical]
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
  { title: "燕南一期基金", text: "元禾重元人工智能创业投资基金，双管理人早期创投基金设立中。", status: "基金规模 1 亿", icon: BrainCircuit },
  { title: "Co-GP Model", text: "计划与燕缘创投成立 Co-GP 早期创投基金，形成资源与资本的深度联动。", status: "设立中 / To Be Announced", icon: Handshake },
  { title: "Technology Transfer", text: "支持高校科研成果从实验室进入产业场景，联动技术转移中心与高校创新平台。", status: "Active Thesis", icon: Landmark },
  { title: "Venture Building", text: "不止投资，更参与公司从 0 到 1 的创建、团队搭建、产业验证和融资成长。", status: "Active Thesis", icon: ArrowUpRight }
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
  ["UIL", "University Innovation Leaders", "深度理解高校科研体系、创新创业教育和成果转化机制。"],
  ["VB", "Venture Builders", "参与公司从概念、团队、产品到融资的全过程建设。"],
  ["IP", "Investment Professionals", "具备早期投资、融资顾问、资本规划和投后支持经验。"],
  ["IA", "Industry Advisors", "连接真实产业场景、客户资源、供应链和商业订单。"],
  ["RC", "Research Commercialization Experts", "支持专利、技术确权、产学研合作和成果产业化路径设计。"]
];

export const teamRoles = teamRoleRows.map(([initials, title, text]) => ({ initials, title, text }));

export const serviceMatrix = ["联创推荐", "工商注册", "园区选址", "政策申报", "战略咨询", "股权架构搭建", "核心团队组建", "专利申请", "技术确权", "产学研合作落地", "产业对接", "真实应用场景导入", "商业订单导入", "融资陪跑", "路演辅导", "对接顶级投资机构与产业资本", "财务、法务、合规咨询", "政府补贴申请"];

export const contactStages = ["Idea / Research Stage", "Company Formed", "Seed Stage", "Pre-Series A", "Industry Partner", "Investment Partner"];

export const socialProof = [
  { label: "University-Originated", icon: Landmark },
  { label: "AI-Focused", icon: BrainCircuit },
  { label: "Venture Studio Model", icon: Workflow }
];

export const footerLinks = navItems.filter((item) => ["About", "What We Do", "Venture Studio", "Ecosystem", "Focus Areas", "Case Study", "Contact"].includes(item.label));

export const ecosystemPillars = [
  { label: "Research", icon: FlaskConical },
  { label: "Capital", icon: Globe2 },
  { label: "Industry", icon: Factory },
  { label: "Policy", icon: Landmark }
];
