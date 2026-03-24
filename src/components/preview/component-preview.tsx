import type { StyleResult } from "../../lib/style-engine";
import type { StyleSelection } from "../../types/style";
import { Button, Card, Tag, Typography } from "antd";

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
        title="Primary Button"
        extra={
          <Tag color="blue">
            {selection.componentCharacter === "card" ? "Layered" : "Interactive"}
          </Tag>
        }
        style={{
          borderRadius: styleResult.semantic.radiusBase,
          boxShadow: styleResult.semantic.shadowCard
        }}
        styles={{ body: { display: "grid", gap: 16 } }}
      >
        <Typography.Text>
          Overall style preview: {selection.overallStyle}
        </Typography.Text>
        <Typography.Paragraph style={{ marginBottom: 0 }}>
          A concise, high-contrast button treatment for key actions.
        </Typography.Paragraph>
        <Button type="primary" style={{ background: styleResult.semantic.colorPrimary }}>
          Continue
        </Button>
      </Card>

      <Card
        title="Support Card"
        style={{
          borderRadius: styleResult.semantic.radiusBase,
          boxShadow: styleResult.semantic.shadowCard
        }}
        styles={{ body: { display: "grid", gap: 12 } }}
      >
        <Typography.Text type="secondary">
          Cards, tags, and buttons should share the same visual tone.
        </Typography.Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Tag color="geekblue">{selection.colorTendency}</Tag>
          <Tag color="cyan">{selection.motionIntensity}</Tag>
          <Tag color="volcano">{selection.componentCharacter}</Tag>
        </div>
      </Card>
    </div>
  );
}
