import { getFragmentLayouts } from "../components/preview/fragment-layouts";
import { buildStyleResult } from "./style-engine";
import type { StyleSelection } from "../types/style";

const overallStyleGoals: Record<StyleSelection["overallStyle"], string> = {
  minimal: "页面应保持克制、清晰、留白充足，优先保证信息可读性和层级稳定。",
  tech: "页面应体现系统感、模块感和高密度但有序的信息组织，重点强化产品能力表达。",
  brand: "页面应强调品牌语气、叙事节奏和识别度，让结构服务于品牌表达。"
};

const pageSkeletons: Record<StyleSelection["overallStyle"], string> = {
  minimal: "导航栏保持低高度和少量操作；Hero 使用居中单栏；功能介绍区使用规则网格；表单区居中收束；客户案例区采用整齐引用卡片。",
  tech: "导航栏包含状态标签和工具操作区；Hero 使用左右双栏和指标面板；功能介绍区采用说明区加模块堆叠；表单区为流程说明和表单并排；客户案例区同时展示案例结果和反馈。",
  brand: "导航栏强调品牌语和重点 CTA；Hero 使用非对称叙事布局；功能介绍区采用交错图文节奏；表单区嵌入品牌导语；客户案例区使用更强叙事感的大引语结构。"
};

const colorTendencyLabels: Record<StyleSelection["colorTendency"], string> = {
  cool: "冷色倾向",
  warm: "暖色倾向",
  "high-contrast": "高对比倾向",
  "low-saturation": "低饱和倾向"
};

const componentCharacterLabels: Record<StyleSelection["componentCharacter"], string> = {
  flat: "扁平表达",
  card: "卡片化表达",
  bordered: "边框感表达"
};

const motionIntensityLabels: Record<StyleSelection["motionIntensity"], string> = {
  none: "无额外动效",
  light: "轻动效",
  strong: "明显动效"
};

const fragmentInstructionByVariant = {
  "compact-actions": "导航栏保持低高度，左侧放置品牌标识和少量导航项，右侧只保留一个主按钮。",
  "utility-status": "导航栏加入状态标签和工具操作区，导航本身更像系统入口而不是纯品牌横幅。",
  "slogan-cta": "导航栏应同时承载品牌语和重点 CTA，让顶部第一屏就传达品牌主张。",
  "centered-focus": "Hero 使用居中单栏，标题、说明和按钮沿同一中轴组织，避免回到复杂分栏。",
  "split-metrics": "Hero 使用左右双栏，左侧标题和按钮，右侧指标面板。",
  "asymmetric-story": "Hero 使用非对称叙事布局，用偏移结构强化品牌姿态和视觉节奏。",
  "balanced-grid": "功能介绍区使用规则网格，卡片宽度和节奏保持一致，弱化不必要的视觉冲突。",
  "stacked-capabilities": "功能介绍区采用说明区加堆叠能力模块，让模块关系更像能力矩阵。",
  "alternating-story": "功能介绍区采用交错图文区块，让内容形成连续的阅读节奏和故事推进。",
  "centered-form": "表单区使用居中窄栏结构，字段收敛，辅助说明保持简短直接。",
  "split-explainer": "表单区使用左右并排结构，一侧解释流程或价值，一侧承载表单输入。",
  "brand-pitch": "表单区应嵌入品牌导语和说服路径，而不是孤立地放一个标准表单。",
  "quote-grid": "客户案例区使用整齐引用卡片网格，重点强调可信度和信息清晰度。",
  "metrics-quotes": "客户案例区同时展示案例结果指标和客户反馈，不要只保留单一引用。",
  "editorial-quotes": "客户案例区使用更具编辑感的大引语和客户身份信息，强化叙事感。"
} as const;

function buildVisualConstraints(selection: StyleSelection): string[] {
  return [
    "使用 React + Ant Design 组件。",
    `颜色方向保持${colorTendencyLabels[selection.colorTendency]}。`,
    `组件表现以${componentCharacterLabels[selection.componentCharacter]}为主。`,
    `动效强度控制在${motionIntensityLabels[selection.motionIntensity]}。`,
    "保持整页风格统一，不要混入与当前整体风格冲突的额外视觉语言。"
  ];
}

export function buildStylePrompt(selection: StyleSelection): string {
  const styleResult = buildStyleResult(selection);
  const fragments = getFragmentLayouts(selection.overallStyle);

  const fragmentInstructions = fragments.map((fragment) => {
    const instruction =
      fragmentInstructionByVariant[
        styleResult.previewLayout[
          `${fragment.type === "features" ? "feature" : fragment.type === "testimonials" ? "testimonial" : fragment.type}Variant` as keyof typeof styleResult.previewLayout
        ] as keyof typeof fragmentInstructionByVariant
      ];

    return `- ${fragment.sectionLabel}：${instruction}`;
  });

  return [
    "## 整体风格目标",
    overallStyleGoals[selection.overallStyle],
    "",
    "## 页面布局骨架",
    pageSkeletons[selection.overallStyle],
    "",
    "## 视觉约束",
    ...buildVisualConstraints(selection).map((line) => `- ${line}`),
    "",
    "## 片段级布局要求",
    ...fragmentInstructions
  ].join("\n");
}
