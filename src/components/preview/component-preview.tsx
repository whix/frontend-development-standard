import type { StyleResult } from "../../lib/style-engine";
import type { StyleSelection } from "../../types/style";
import { Button, Card, Tag, Typography } from "antd";
import {
  getColorTendencyLabel,
  getComponentCharacterLabel,
  getOverallStyleLabel,
  getMotionIntensityLabel
} from "../../data/style-options";

interface ComponentPreviewProps {
  selection: StyleSelection;
  styleResult: StyleResult;
}

export default function ComponentPreview({
  selection,
  styleResult
}: ComponentPreviewProps) {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Card
        title="主按钮"
        extra={
          <Tag color="blue">
            {selection.componentCharacter === "card" ? "分层感" : "交互感"}
          </Tag>
        }
        style={{
          borderRadius: styleResult.semantic.radiusBase,
          boxShadow: styleResult.semantic.shadowCard
        }}
        styles={{ body: { display: "grid", gap: 16 } }}
      >
        <Typography.Text>
          整体风格预览：{getOverallStyleLabel(selection.overallStyle)}
        </Typography.Text>
        <Typography.Paragraph style={{ marginBottom: 0 }}>
          关键动作使用简洁且对比清晰的按钮表达。
        </Typography.Paragraph>
        <Button type="primary" style={{ background: styleResult.semantic.colorPrimary }}>
          继续
        </Button>
      </Card>

      <Card
        title="辅助卡片"
        style={{
          borderRadius: styleResult.semantic.radiusBase,
          boxShadow: styleResult.semantic.shadowCard
        }}
        styles={{ body: { display: "grid", gap: 12 } }}
      >
        <Typography.Text type="secondary">
          卡片、标签和按钮应共享同一视觉语气。
        </Typography.Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Tag color="geekblue">{getColorTendencyLabel(selection.colorTendency)}</Tag>
          <Tag color="cyan">{getMotionIntensityLabel(selection.motionIntensity)}</Tag>
          <Tag color="volcano">
            {getComponentCharacterLabel(selection.componentCharacter)}
          </Tag>
        </div>
      </Card>
    </div>
  );
}
