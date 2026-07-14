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
    title: "About",
    items: [
      {
        title: "About YAN VENTURES",
        href: "/about",
        description: "源自北京大学、扎根中关村的 AI 早期创业孵化平台。"
      },
      {
        title: "Team",
        href: "/team",
        description: "Innovation leaders, venture builders and industry advisors."
      }
    ]
  },
  {
    title: "Build",
    items: [
      {
        title: "What We Do",
        href: "/what-we-do",
        description: "科技成果转化、创业公司赋能与校友企业孵化。"
      },
      {
        title: "Venture Studio",
        href: "/venture-studio",
        description: "从 0 到 1 深度参与早期项目创建。"
      },
      {
        title: "Focus Areas",
        href: "/focus-areas",
        description: "AI 与前沿硬科技方向的投资和孵化主题。"
      }
    ]
  },
  {
    title: "Network",
    items: [
      {
        title: "Ecosystem",
        href: "/ecosystem",
        description: "高校、科研、资本、产业与政策资源网络。"
      },
      {
        title: "Capital",
        href: "/capital",
        description: "面向早期 AI 创新的基金生态与资本支持。"
      }
    ]
  },
  {
    title: "Cases",
    items: [
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "Incubation in action."
      }
    ]
  },
  {
    title: "Contact",
    items: [
      {
        title: "Contact",
        href: "/contact",
        description: "项目投递、产业合作与投资机构连接入口。"
      }
    ]
  }
];

export const footerNavigation = [
  { title: "About", href: "/about" },
  { title: "What We Do", href: "/what-we-do" },
  { title: "Venture Studio", href: "/venture-studio" },
  { title: "Ecosystem", href: "/ecosystem" },
  { title: "Focus Areas", href: "/focus-areas" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Contact", href: "/contact" }
];
