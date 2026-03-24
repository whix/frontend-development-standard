import { Card, Col, Row, Typography } from "antd";

export default function PageFragmentPreview() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Card title="Hero Section">
        <div style={{ display: "grid", gap: 12 }}>
          <Typography.Title level={3} style={{ marginBottom: 0 }}>
            Build a cleaner style system before you generate the page.
          </Typography.Title>
          <Typography.Text type="secondary">
            This fragment shows how a product hero can stay calm, readable, and consistent.
          </Typography.Text>
        </div>
      </Card>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Feature Block">
            <Typography.Text>Shared spacing and hierarchy for content sections.</Typography.Text>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Stats Block">
            <Typography.Text>Dense data cards can reuse the same style tokens.</Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
