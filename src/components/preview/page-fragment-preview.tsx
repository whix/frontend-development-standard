import type { StyleResult } from "../../lib/style-engine";
import type { StyleSelection } from "../../types/style";
import { Card, Col, Row, Typography } from "antd";

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
        title="Hero Section"
        style={{
          borderRadius: styleResult.semantic.radiusBase,
          boxShadow: styleResult.semantic.shadowCard
        }}
      >
        <div style={{ display: "grid", gap: 12 }}>
          <Typography.Title level={3} style={{ marginBottom: 0 }}>
            Build a cleaner style system before you generate the page.
          </Typography.Title>
          <Typography.Text>
            Fragment tone: {selection.overallStyle}
          </Typography.Text>
          <Typography.Text type="secondary">
            This fragment shows how a product hero can stay calm, readable, and consistent.
          </Typography.Text>
        </div>
      </Card>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Card
            title="Feature Block"
            style={{
              borderRadius: styleResult.semantic.radiusBase,
              boxShadow: styleResult.semantic.shadowCard
            }}
          >
            <Typography.Text>
              Shared spacing and hierarchy for {selection.colorTendency} content sections.
            </Typography.Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title="Stats Block"
            style={{
              borderRadius: styleResult.semantic.radiusBase,
              boxShadow: styleResult.semantic.shadowCard
            }}
          >
            <Typography.Text>
              Dense data cards can reuse the same {selection.componentCharacter} tokens.
            </Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
