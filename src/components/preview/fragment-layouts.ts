import type { PreviewLayoutVariants } from "../../lib/style-engine";
import type { OverallStyle } from "../../types/style";

export type FragmentType =
  | "navbar"
  | "hero"
  | "features"
  | "form"
  | "testimonials";

export interface FragmentSectionContent {
  title: string;
  eyebrow?: string;
  lead?: string;
  details: string[];
  badges?: string[];
  actions?: string[];
}

export interface FragmentLayoutDefinition {
  type: FragmentType;
  sectionLabel: string;
  variant: PreviewLayoutVariants[keyof PreviewLayoutVariants];
  layoutLabel: string;
  summary: string;
  promptInstruction: string;
  primary: FragmentSectionContent;
  secondary?: FragmentSectionContent;
  tertiary?: FragmentSectionContent;
}

type StyleFragmentCatalog = Record<FragmentType, FragmentLayoutDefinition>;

export const fragmentLayoutsByStyle: Record<OverallStyle, StyleFragmentCatalog> = {
  minimal: {
    navbar: {
      type: "navbar",
      sectionLabel: "导航栏",
      variant: "compact-actions",
      layoutLabel: "居左导航 + 右侧主按钮",
      summary: "低高度、少元素、明确主操作。",
      promptInstruction:
        "导航栏保持低高度，左侧放置品牌标识和少量导航项，右侧只保留一个主按钮。",
      primary: {
        title: "Studio",
        details: ["产品", "方案", "价格"],
        actions: ["开始使用"]
      }
    },
    hero: {
      type: "hero",
      sectionLabel: "首屏区块",
      variant: "centered-focus",
      layoutLabel: "居中单栏",
      summary: "信息集中在中心，留白放大标题和行动区。",
      promptInstruction:
        "Hero 使用居中单栏，标题、说明和按钮沿同一中轴组织，避免回到复杂分栏。",
      primary: {
        eyebrow: "清晰风格基线",
        title: "在开始生成页面之前，先固定视觉方向。",
        lead: "用更克制的结构表达产品重点，让页面一眼能读懂。",
        details: ["主标题", "短说明", "双按钮"],
        actions: ["查看示例", "生成主题"]
      },
      secondary: {
        title: "信任信息",
        details: ["设计一致性", "工程可落地", "交付更稳定"]
      }
    },
    features: {
      type: "features",
      sectionLabel: "功能介绍区",
      variant: "balanced-grid",
      layoutLabel: "规则三列网格",
      summary: "统一卡片宽度和节奏，降低视觉噪音。",
      promptInstruction:
        "功能介绍区使用规则网格，卡片宽度和节奏保持一致，弱化不必要的视觉冲突。",
      primary: {
        title: "功能卡片 A",
        details: ["统一颜色约束", "克制层级", "适度留白"]
      },
      secondary: {
        title: "功能卡片 B",
        details: ["结构稳定", "视觉连贯", "易于复用"]
      },
      tertiary: {
        title: "功能卡片 C",
        details: ["前端友好", "组件一致", "导出明确"]
      }
    },
    form: {
      type: "form",
      sectionLabel: "表单区",
      variant: "centered-form",
      layoutLabel: "居中窄栏表单",
      summary: "字段收敛，辅助说明简短直接。",
      promptInstruction:
        "表单区使用居中窄栏结构，字段收敛，辅助说明保持简短直接。",
      primary: {
        title: "申请体验",
        lead: "留下项目信息，快速生成适配主题。",
        details: ["姓名", "项目类型", "目标风格"],
        actions: ["提交申请"]
      }
    },
    testimonials: {
      type: "testimonials",
      sectionLabel: "客户案例区",
      variant: "quote-grid",
      layoutLabel: "整齐引用卡片网格",
      summary: "强调可信度与信息清晰度。",
      promptInstruction:
        "客户案例区使用整齐引用卡片网格，重点强调可信度和信息清晰度。",
      primary: {
        title: "案例一",
        details: ["页面输出更统一", "减少反复调样式"]
      },
      secondary: {
        title: "案例二",
        details: ["从提示词过渡到主题资产", "交付更可控"]
      }
    }
  },
  tech: {
    navbar: {
      type: "navbar",
      sectionLabel: "导航栏",
      variant: "utility-status",
      layoutLabel: "状态标签 + 工具操作区",
      summary: "导航同时承担产品状态感和系统入口。",
      promptInstruction:
        "导航栏加入状态标签和工具操作区，导航本身更像系统入口而不是纯品牌横幅。",
      primary: {
        title: "Console",
        badges: ["Live", "v1.2"],
        details: ["能力矩阵", "模板中心", "集成"],
        actions: ["连接项目", "查看日志"]
      }
    },
    hero: {
      type: "hero",
      sectionLabel: "首屏区块",
      variant: "split-metrics",
      layoutLabel: "左文案 + 右指标面板",
      summary: "强调系统感、数据感和高密度信息组织。",
      promptInstruction:
        "Hero 使用左右双栏，左侧标题和按钮，右侧指标面板。",
      primary: {
        eyebrow: "布局模板引擎",
        title: "让风格选择直接改变页面骨架。",
        lead: "科技风不只是发光边框，而是信息层级和布局结构都更像产品系统。",
        details: ["主叙述区", "双 CTA", "功能摘要"],
        actions: ["查看布局", "导出配置"]
      },
      secondary: {
        title: "指标面板",
        details: ["模板命中率 92%", "主题生成 < 1s", "组件覆盖 24+"],
        badges: ["实时指标", "系统状态"]
      }
    },
    features: {
      type: "features",
      sectionLabel: "功能介绍区",
      variant: "stacked-capabilities",
      layoutLabel: "说明区 + 堆叠能力模块",
      summary: "用模块堆叠表达能力矩阵和状态层级。",
      promptInstruction:
        "功能介绍区采用说明区加堆叠能力模块，让模块关系更像能力矩阵。",
      primary: {
        title: "能力说明",
        details: ["结构模板驱动", "样式语义映射", "主题导出适配"]
      },
      secondary: {
        title: "能力模块",
        details: ["布局模板", "主题 token", "AI 提示词", "实时预览"]
      }
    },
    form: {
      type: "form",
      sectionLabel: "表单区",
      variant: "split-explainer",
      layoutLabel: "左流程说明 + 右侧表单",
      summary: "表单和流程说明并排，更像系统配置入口。",
      promptInstruction:
        "表单区使用左右并排结构，一侧解释流程或价值，一侧承载表单输入。",
      primary: {
        title: "配置申请",
        details: ["项目类型", "组件体系", "期望输出"],
        actions: ["生成方案"]
      },
      secondary: {
        title: "处理流程",
        details: ["读取风格维度", "匹配布局模板", "输出工程配置"]
      }
    },
    testimonials: {
      type: "testimonials",
      sectionLabel: "客户案例区",
      variant: "metrics-quotes",
      layoutLabel: "案例卡 + 成果指标",
      summary: "客户声音与结果数据同时出现。",
      promptInstruction:
        "客户案例区同时展示案例结果指标和客户反馈，不要只保留单一引用。",
      primary: {
        title: "SaaS 团队",
        details: ["交付时间缩短 35%", "视觉返工减少 50%"]
      },
      secondary: {
        title: "体验反馈",
        details: ["风格更稳定", "页面更像同一产品"]
      }
    }
  },
  brand: {
    navbar: {
      type: "navbar",
      sectionLabel: "导航栏",
      variant: "slogan-cta",
      layoutLabel: "品牌语 + 重点 CTA",
      summary: "强调品牌主张和更具情绪的顶部节奏。",
      promptInstruction:
        "导航栏应同时承载品牌语和重点 CTA，让顶部第一屏就传达品牌主张。",
      primary: {
        title: "North Studio",
        lead: "Build identity before interface.",
        details: ["故事", "案例", "方案"],
        actions: ["预约演示"]
      }
    },
    hero: {
      type: "hero",
      sectionLabel: "首屏区块",
      variant: "asymmetric-story",
      layoutLabel: "非对称叙事布局",
      summary: "通过不对称结构强化品牌姿态和节奏。",
      promptInstruction:
        "Hero 使用非对称叙事布局，用偏移结构强化品牌姿态和视觉节奏。",
      primary: {
        eyebrow: "品牌化布局系统",
        title: "让页面在第一屏就说出项目的语气。",
        lead: "品牌风更强调叙事、记忆点和情绪层次，而不是单纯规则对齐。",
        details: ["品牌宣言", "视觉主轴", "故事化 CTA"],
        actions: ["探索风格", "查看案例"]
      },
      secondary: {
        title: "品牌亮点",
        details: ["标语模块", "视觉陈列区", "信任信息层"],
        badges: ["品牌语气", "编辑节奏"]
      }
    },
    features: {
      type: "features",
      sectionLabel: "功能介绍区",
      variant: "alternating-story",
      layoutLabel: "交错图文叙事区块",
      summary: "区块交替排列，形成更鲜明的阅读节奏。",
      promptInstruction:
        "功能介绍区采用交错图文区块，让内容形成连续的阅读节奏和故事推进。",
      primary: {
        title: "品牌表达",
        details: ["主张先行", "内容跟随", "视觉辅助强化"]
      },
      secondary: {
        title: "交错模块",
        details: ["故事片段 A", "故事片段 B", "品牌证明"]
      }
    },
    form: {
      type: "form",
      sectionLabel: "表单区",
      variant: "brand-pitch",
      layoutLabel: "品牌导语包裹表单",
      summary: "表单不是孤立模块，而是品牌说服路径的一部分。",
      promptInstruction:
        "表单区应嵌入品牌导语和说服路径，而不是孤立地放一个标准表单。",
      primary: {
        title: "预约品牌诊断",
        lead: "告诉我们你的项目气质和目标受众。",
        details: ["品牌定位", "核心页面", "预期感受"],
        actions: ["提交需求"]
      },
      secondary: {
        title: "为什么现在开始",
        details: ["先统一风格", "再启动生成", "减少返工"]
      }
    },
    testimonials: {
      type: "testimonials",
      sectionLabel: "客户案例区",
      variant: "editorial-quotes",
      layoutLabel: "大引语 + 客户身份信息",
      summary: "更接近品牌访谈或案例故事排版。",
      promptInstruction:
        "客户案例区使用更具编辑感的大引语和客户身份信息，强化叙事感。",
      primary: {
        title: "品牌案例",
        details: ["“页面终于有了自己的语气。”", "市场团队 / 设计负责人"]
      },
      secondary: {
        title: "结果",
        details: ["视觉辨识度更强", "统一度提升", "输出更稳定"]
      }
    }
  }
};

export function getFragmentLayouts(overallStyle: OverallStyle): FragmentLayoutDefinition[] {
  const layouts = fragmentLayoutsByStyle[overallStyle];

  return [
    layouts.navbar,
    layouts.hero,
    layouts.features,
    layouts.form,
    layouts.testimonials
  ];
}
