import type { StyleResult } from "../../lib/style-engine";
import type { StyleSelection } from "../../types/style";
import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Input,
  Row,
  Space,
  Tag,
  Typography
} from "antd";
import { getFragmentLayouts } from "./fragment-layouts";

interface PageFragmentPreviewProps {
  selection: StyleSelection;
  styleResult: StyleResult;
}

function sectionSurface(styleResult: StyleResult) {
  return {
    borderRadius: styleResult.semantic.radiusBase,
    boxShadow: styleResult.semantic.shadowCard
  };
}

function renderHeader(label: string, layoutLabel: string, summary: string) {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <Space size={8} wrap>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {label}
        </Typography.Title>
        <Tag color="blue">{layoutLabel}</Tag>
      </Space>
      <Typography.Text type="secondary">{summary}</Typography.Text>
    </div>
  );
}

export default function PageFragmentPreview({
  selection,
  styleResult
}: PageFragmentPreviewProps) {
  const layouts = getFragmentLayouts(selection.overallStyle);
  const previewLayout = styleResult.previewLayout;

  const navbar = layouts.find(
    (layout) => layout.type === "navbar" && layout.variant === previewLayout.navVariant
  );
  const hero = layouts.find(
    (layout) => layout.type === "hero" && layout.variant === previewLayout.heroVariant
  );
  const features = layouts.find(
    (layout) =>
      layout.type === "features" && layout.variant === previewLayout.featureVariant
  );
  const form = layouts.find(
    (layout) => layout.type === "form" && layout.variant === previewLayout.formVariant
  );
  const testimonials = layouts.find(
    (layout) =>
      layout.type === "testimonials" &&
      layout.variant === previewLayout.testimonialVariant
  );

  if (!navbar || !hero || !features || !form || !testimonials) {
    return (
      <Alert
        type="error"
        message="页面片段预览未找到匹配的布局模板。"
        showIcon
      />
    );
  }

  return (
    <div style={{ display: "grid", gap: 20, width: "100%" }}>
      <Card style={sectionSurface(styleResult)}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16
          }}
        >
          <div style={{ display: "grid", gap: 8 }}>
            {renderHeader(navbar.sectionLabel, navbar.layoutLabel, navbar.summary)}
            <Space size={8} wrap>
              <Typography.Text strong>{navbar.primary.title}</Typography.Text>
              {navbar.primary.badges?.map((badge) => (
                <Tag key={badge} color="cyan">
                  {badge}
                </Tag>
              ))}
            </Space>
            <Space size={8} wrap>
              {navbar.primary.details.map((item) => (
                <Typography.Text key={item} type="secondary">
                  {item}
                </Typography.Text>
              ))}
            </Space>
            {navbar.primary.lead ? (
              <Typography.Text type="secondary">{navbar.primary.lead}</Typography.Text>
            ) : null}
          </div>
          <Space size={8} wrap>
            {navbar.primary.actions?.map((action, index) => (
              <Button
                key={action}
                type={index === 0 ? "primary" : "default"}
                style={index === 0 ? { background: styleResult.semantic.colorPrimary } : {}}
              >
                {action}
              </Button>
            ))}
          </Space>
        </div>
      </Card>

      <Card style={sectionSurface(styleResult)}>
        <div style={{ display: "grid", gap: 16 }}>
          {renderHeader(hero.sectionLabel, hero.layoutLabel, hero.summary)}
          {hero.variant === "centered-focus" ? (
            <div style={{ display: "grid", gap: 12, textAlign: "center" }}>
              <Typography.Text type="secondary">{hero.primary.eyebrow}</Typography.Text>
              <Typography.Title level={2} style={{ margin: 0 }}>
                {hero.primary.title}
              </Typography.Title>
              <Typography.Paragraph style={{ marginBottom: 0 }}>
                {hero.primary.lead}
              </Typography.Paragraph>
              <Space size={8} wrap style={{ justifyContent: "center" }}>
                {hero.primary.actions?.map((action, index) => (
                  <Button
                    key={action}
                    type={index === 0 ? "primary" : "default"}
                    style={
                      index === 0 ? { background: styleResult.semantic.colorPrimary } : {}
                    }
                  >
                    {action}
                  </Button>
                ))}
              </Space>
              <Space size={8} wrap style={{ justifyContent: "center" }}>
                {hero.secondary?.details.map((item) => <Tag key={item}>{item}</Tag>)}
              </Space>
            </div>
          ) : null}
          {hero.variant === "split-metrics" ? (
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={13}>
                <div style={{ display: "grid", gap: 12 }}>
                  <Typography.Text type="secondary">{hero.primary.eyebrow}</Typography.Text>
                  <Typography.Title level={2} style={{ margin: 0 }}>
                    {hero.primary.title}
                  </Typography.Title>
                  <Typography.Paragraph style={{ marginBottom: 0 }}>
                    {hero.primary.lead}
                  </Typography.Paragraph>
                  <Space size={8} wrap>
                    {hero.primary.actions?.map((action, index) => (
                      <Button
                        key={action}
                        type={index === 0 ? "primary" : "default"}
                        style={
                          index === 0 ? { background: styleResult.semantic.colorPrimary } : {}
                        }
                      >
                        {action}
                      </Button>
                    ))}
                  </Space>
                </div>
              </Col>
              <Col xs={24} md={11}>
                <Card
                  size="small"
                  style={sectionSurface(styleResult)}
                  styles={{ body: { display: "grid", gap: 10 } }}
                >
                  <Space size={8} wrap>
                    {hero.secondary?.badges?.map((badge) => (
                      <Tag key={badge} color="blue">
                        {badge}
                      </Tag>
                    ))}
                  </Space>
                  <Typography.Text strong>{hero.secondary?.title}</Typography.Text>
                  {hero.secondary?.details.map((item) => (
                    <Typography.Text key={item}>{item}</Typography.Text>
                  ))}
                </Card>
              </Col>
            </Row>
          ) : null}
          {hero.variant === "asymmetric-story" ? (
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={14}>
                <div style={{ display: "grid", gap: 12 }}>
                  <Typography.Text type="secondary">{hero.primary.eyebrow}</Typography.Text>
                  <Typography.Title level={1} style={{ margin: 0 }}>
                    {hero.primary.title}
                  </Typography.Title>
                  <Typography.Paragraph style={{ marginBottom: 0 }}>
                    {hero.primary.lead}
                  </Typography.Paragraph>
                  <Space size={8} wrap>
                    {hero.primary.actions?.map((action, index) => (
                      <Button
                        key={action}
                        type={index === 0 ? "primary" : "default"}
                        style={
                          index === 0 ? { background: styleResult.semantic.colorPrimary } : {}
                        }
                      >
                        {action}
                      </Button>
                    ))}
                  </Space>
                </div>
              </Col>
              <Col xs={24} md={10}>
                <Card
                  size="small"
                  style={{
                    ...sectionSurface(styleResult),
                    background: "rgba(15, 23, 42, 0.04)"
                  }}
                  styles={{ body: { display: "grid", gap: 10 } }}
                >
                  <Typography.Text strong>{hero.secondary?.title}</Typography.Text>
                  <Space size={8} wrap>
                    {hero.secondary?.badges?.map((badge) => <Tag key={badge}>{badge}</Tag>)}
                  </Space>
                  {hero.secondary?.details.map((item) => (
                    <Typography.Text key={item}>{item}</Typography.Text>
                  ))}
                </Card>
              </Col>
            </Row>
          ) : null}
        </div>
      </Card>

      <Card style={sectionSurface(styleResult)}>
        <div style={{ display: "grid", gap: 16 }}>
          {renderHeader(features.sectionLabel, features.layoutLabel, features.summary)}
          {features.variant === "balanced-grid" ? (
            <Row gutter={[16, 16]}>
              {[features.primary, features.secondary, features.tertiary].map((section) =>
                section ? (
                  <Col key={section.title} xs={24} md={8}>
                    <Card size="small" style={sectionSurface(styleResult)}>
                      <Space orientation="vertical" size={8}>
                        <Typography.Text strong>{section.title}</Typography.Text>
                        {section.details.map((item) => (
                          <Typography.Text key={item}>{item}</Typography.Text>
                        ))}
                      </Space>
                    </Card>
                  </Col>
                ) : null
              )}
            </Row>
          ) : null}
          {features.variant === "stacked-capabilities" ? (
            <Row gutter={[16, 16]}>
              <Col xs={24} md={10}>
                <Card size="small" style={sectionSurface(styleResult)}>
                  <Space orientation="vertical" size={8}>
                    <Typography.Text strong>{features.primary.title}</Typography.Text>
                    {features.primary.details.map((item) => (
                      <Typography.Text key={item}>{item}</Typography.Text>
                    ))}
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={14}>
                <Space orientation="vertical" size={12} style={{ width: "100%" }}>
                  {features.secondary?.details.map((item) => (
                    <Card key={item} size="small" style={sectionSurface(styleResult)}>
                      <Typography.Text>{item}</Typography.Text>
                    </Card>
                  ))}
                </Space>
              </Col>
            </Row>
          ) : null}
          {features.variant === "alternating-story" ? (
            <Space orientation="vertical" size={12} style={{ width: "100%" }}>
              {[features.primary, features.secondary].map((section, index) =>
                section ? (
                  <Card
                    key={section.title}
                    size="small"
                    style={{
                      ...sectionSurface(styleResult),
                      marginLeft: index === 0 ? 0 : "10%",
                      marginRight: index === 0 ? "10%" : 0
                    }}
                  >
                    <Space orientation="vertical" size={8}>
                      <Typography.Text strong>{section.title}</Typography.Text>
                      {section.details.map((item) => (
                        <Typography.Text key={item}>{item}</Typography.Text>
                      ))}
                    </Space>
                  </Card>
                ) : null
              )}
            </Space>
          ) : null}
        </div>
      </Card>

      <Card style={sectionSurface(styleResult)}>
        <div style={{ display: "grid", gap: 16 }}>
          {renderHeader(form.sectionLabel, form.layoutLabel, form.summary)}
          {form.variant === "centered-form" ? (
            <div
              style={{
                maxWidth: 420,
                margin: "0 auto",
                display: "grid",
                gap: 12,
                width: "100%"
              }}
            >
              <Typography.Title level={4} style={{ margin: 0 }}>
                {form.primary.title}
              </Typography.Title>
              <Typography.Text type="secondary">{form.primary.lead}</Typography.Text>
              {form.primary.details.map((item) => (
                <Input key={item} placeholder={item} />
              ))}
              <Button type="primary" style={{ background: styleResult.semantic.colorPrimary }}>
                {form.primary.actions?.[0]}
              </Button>
            </div>
          ) : null}
          {form.variant === "split-explainer" ? (
            <Row gutter={[16, 16]}>
              <Col xs={24} md={11}>
                <Card size="small" style={sectionSurface(styleResult)}>
                  <Space orientation="vertical" size={8}>
                    <Typography.Text strong>{form.secondary?.title}</Typography.Text>
                    {form.secondary?.details.map((item) => (
                      <Typography.Text key={item}>{item}</Typography.Text>
                    ))}
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={13}>
                <Card size="small" style={sectionSurface(styleResult)}>
                  <Space orientation="vertical" size={12} style={{ width: "100%" }}>
                    <Typography.Text strong>{form.primary.title}</Typography.Text>
                    {form.primary.details.map((item) => (
                      <Input key={item} placeholder={item} />
                    ))}
                    <Button
                      type="primary"
                      style={{ background: styleResult.semantic.colorPrimary }}
                    >
                      {form.primary.actions?.[0]}
                    </Button>
                  </Space>
                </Card>
              </Col>
            </Row>
          ) : null}
          {form.variant === "brand-pitch" ? (
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={13}>
                <Space orientation="vertical" size={10}>
                  <Typography.Title level={3} style={{ margin: 0 }}>
                    {form.primary.title}
                  </Typography.Title>
                  <Typography.Text>{form.primary.lead}</Typography.Text>
                  {form.secondary?.details.map((item) => (
                    <Typography.Text key={item} type="secondary">
                      {item}
                    </Typography.Text>
                  ))}
                </Space>
              </Col>
              <Col xs={24} md={11}>
                <Card size="small" style={sectionSurface(styleResult)}>
                  <Space orientation="vertical" size={12} style={{ width: "100%" }}>
                    {form.primary.details.map((item) => (
                      <Input key={item} placeholder={item} />
                    ))}
                    <Button
                      type="primary"
                      style={{ background: styleResult.semantic.colorPrimary }}
                    >
                      {form.primary.actions?.[0]}
                    </Button>
                  </Space>
                </Card>
              </Col>
            </Row>
          ) : null}
        </div>
      </Card>

      <Card style={sectionSurface(styleResult)}>
        <div style={{ display: "grid", gap: 16 }}>
          {renderHeader(
            testimonials.sectionLabel,
            testimonials.layoutLabel,
            testimonials.summary
          )}
          {testimonials.variant === "quote-grid" ? (
            <Row gutter={[16, 16]}>
              {[testimonials.primary, testimonials.secondary].map((section) =>
                section ? (
                  <Col key={section.title} xs={24} md={12}>
                    <Card size="small" style={sectionSurface(styleResult)}>
                      <Space orientation="vertical" size={8}>
                        <Typography.Text strong>{section.title}</Typography.Text>
                        {section.details.map((item) => (
                          <Typography.Text key={item}>{item}</Typography.Text>
                        ))}
                      </Space>
                    </Card>
                  </Col>
                ) : null
              )}
            </Row>
          ) : null}
          {testimonials.variant === "metrics-quotes" ? (
            <Row gutter={[16, 16]}>
              <Col xs={24} md={10}>
                <Card size="small" style={sectionSurface(styleResult)}>
                  <Space orientation="vertical" size={8}>
                    <Typography.Text strong>{testimonials.primary.title}</Typography.Text>
                    {testimonials.primary.details.map((item) => (
                      <Typography.Text key={item}>{item}</Typography.Text>
                    ))}
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={14}>
                <Card size="small" style={sectionSurface(styleResult)}>
                  <Space orientation="vertical" size={8}>
                    <Typography.Text strong>{testimonials.secondary?.title}</Typography.Text>
                    {testimonials.secondary?.details.map((item) => (
                      <Typography.Text key={item}>{item}</Typography.Text>
                    ))}
                  </Space>
                </Card>
              </Col>
            </Row>
          ) : null}
          {testimonials.variant === "editorial-quotes" ? (
            <div style={{ display: "grid", gap: 16 }}>
              <Card
                size="small"
                style={{
                  ...sectionSurface(styleResult),
                  background: "rgba(15, 23, 42, 0.04)"
                }}
              >
                <Typography.Title level={4} style={{ margin: 0 }}>
                  {testimonials.primary.title}
                </Typography.Title>
                <Divider style={{ margin: "12px 0" }} />
                <Space orientation="vertical" size={8}>
                  {testimonials.primary.details.map((item) => (
                    <Typography.Text key={item}>{item}</Typography.Text>
                  ))}
                </Space>
              </Card>
              <Card size="small" style={sectionSurface(styleResult)}>
                <Space orientation="vertical" size={8}>
                  <Typography.Text strong>{testimonials.secondary?.title}</Typography.Text>
                  {testimonials.secondary?.details.map((item) => (
                    <Typography.Text key={item}>{item}</Typography.Text>
                  ))}
                </Space>
              </Card>
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
