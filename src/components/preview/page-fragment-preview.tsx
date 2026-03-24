import type { StyleResult } from "../../lib/style-engine";
import type { StyleSelection } from "../../types/style";
import { Card, Col, Row, Typography } from "antd";
import {
  getColorTendencyLabel,
  getComponentCharacterLabel,
  getOverallStyleLabel
} from "../../data/style-options";

interface PageFragmentPreviewProps {
  selection: StyleSelection;
  styleResult: StyleResult;
}

export default function PageFragmentPreview({
  selection,
  styleResult
}: PageFragmentPreviewProps) {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Card
        title="首屏区块"
        style={{
          borderRadius: styleResult.semantic.radiusBase,
          boxShadow: styleResult.semantic.shadowCard
        }}
      >
        <div style={{ display: "grid", gap: 12 }}>
          <Typography.Title level={3} style={{ marginBottom: 0 }}>
            在生成页面之前，先建立更清晰的风格系统。
          </Typography.Title>
          <Typography.Text>
            片段气质：{getOverallStyleLabel(selection.overallStyle)}
          </Typography.Text>
          <Typography.Text type="secondary">
            这个片段展示了产品首屏如何保持克制、易读且一致。
          </Typography.Text>
        </div>
      </Card>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Card
            title="功能区块"
            style={{
              borderRadius: styleResult.semantic.radiusBase,
              boxShadow: styleResult.semantic.shadowCard
            }}
          >
            <Typography.Text>
              为{getColorTendencyLabel(selection.colorTendency)}内容区块复用统一间距与层级。
            </Typography.Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title="数据区块"
            style={{
              borderRadius: styleResult.semantic.radiusBase,
              boxShadow: styleResult.semantic.shadowCard
            }}
          >
            <Typography.Text>
              高密度数据卡片也可以复用同一套
              {getComponentCharacterLabel(selection.componentCharacter)}
              token。
            </Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
