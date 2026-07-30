export type NavChild = {
  title: string;
  href: string;
  description: string;
};

export type NavGroup = {
  title: string;
  items: NavChild[];
};

export const navigation: NavGroup[] = [
  {
    title: "关于燕南",
    items: [
      {
        title: "关于燕南创新",
        href: "/about",
        description: "源自北京大学、扎根中关村的 AI 早期创业孵化平台。"
      },
      {
        title: "团队",
        href: "/team",
        description: "汇聚高校创新、成果转化、公司创建与资本实践经验。"
      }
    ]
  },
  {
    title: "创业孵化",
    items: [
      {
        title: "业务体系",
        href: "/what-we-do",
        description: "科技成果转化、创业公司赋能与校友企业孵化。"
      },
      {
        title: "机构化联合创业",
        href: "/venture-studio",
        description: "从 0 到 1 深度参与早期项目创建。"
      },
      {
        title: "重点方向",
        href: "/focus-areas",
        description: "AI 与前沿硬科技方向的投资和孵化主题。"
      }
    ]
  },
  {
    title: "创新生态",
    items: [
      {
        title: "生态网络",
        href: "/ecosystem",
        description: "高校、科研、资本、产业与政策资源网络。"
      },
      {
        title: "资本支持",
        href: "/capital",
        description: "面向早期 AI 创新的基金生态与资本支持。"
      }
    ]
  },
  {
    title: "实践案例",
    items: [
      {
        title: "企业与生态项目",
        href: "/case-studies",
        description: "企业创建案例、创业营与产业创新项目。"
      }
    ]
  },
  {
    title: "联系我们",
    items: [
      {
        title: "提交项目与合作",
        href: "/contact",
        description: "项目投递、产业合作与投资机构连接入口。"
      }
    ]
  }
];

export const footerNavigation = [
  { title: "关于燕南", href: "/about" },
  { title: "机构化联合创业", href: "/venture-studio" },
  { title: "创新生态", href: "/ecosystem" },
  { title: "重点方向", href: "/focus-areas" },
  { title: "企业与生态项目", href: "/case-studies" },
  { title: "资本支持", href: "/capital" },
  { title: "团队", href: "/team" },
  { title: "联系我们", href: "/contact" }
];
