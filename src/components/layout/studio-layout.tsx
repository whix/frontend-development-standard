import type { ReactNode } from "react";

interface StudioLayoutProps {
  controls: ReactNode;
  preview: ReactNode;
}

export default function StudioLayout({ controls, preview }: StudioLayoutProps) {
  return (
    <main style={{ minHeight: "100vh", padding: 32 }}>
      <header style={{ marginBottom: 24 }}>
        <p
          style={{
            margin: "0 0 8px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: "0.72rem",
            color: "#64748b"
          }}
        >
          前端样式系统
        </p>
        <h1>样式规范引擎</h1>
      </header>

      <section
        aria-label="样式工作区"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap: 20
        }}
      >
        <div
          style={{
            minHeight: 520,
            padding: 24,
            border: "1px solid rgba(148, 163, 184, 0.28)",
            borderRadius: 24,
            background: "rgba(255, 255, 255, 0.82)",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)"
          }}
        >
          {controls}
        </div>
        <div
          style={{
            minHeight: 520,
            padding: 24,
            border: "1px solid rgba(148, 163, 184, 0.28)",
            borderRadius: 24,
            background: "rgba(255, 255, 255, 0.82)",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)"
          }}
        >
          {preview}
        </div>
      </section>
    </main>
  );
}
