import { Button, Card, Tag, Typography } from "antd";

export default function ComponentPreview() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%" }}>
      <Card
        title="Primary Button"
        extra={<Tag color="blue">Interactive</Tag>}
        styles={{ body: { display: "grid", gap: 16 } }}
      >
        <Typography.Paragraph style={{ marginBottom: 0 }}>
          A concise, high-contrast button treatment for key actions.
        </Typography.Paragraph>
        <Button type="primary">Continue</Button>
      </Card>

      <Card title="Support Card" styles={{ body: { display: "grid", gap: 12 } }}>
        <Typography.Text type="secondary">
          Cards, tags, and buttons should share the same visual tone.
        </Typography.Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Tag color="geekblue">Ant Design</Tag>
          <Tag color="cyan">Responsive</Tag>
          <Tag color="volcano">Composable</Tag>
        </div>
      </Card>
    </div>
  );
}
