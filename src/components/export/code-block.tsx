import type { ReactNode } from "react";

interface CodeBlockProps {
  label: string;
  code: string;
  children?: ReactNode;
}

export default function CodeBlock({ label, code, children }: CodeBlockProps) {
  return (
    <section style={{ display: "grid", gap: 12 }}>
      <h3 style={{ margin: 0, fontSize: "1rem" }}>{label}</h3>
      {children}
      <pre
        style={{
          margin: 0,
          padding: 16,
          borderRadius: 16,
          background: "#0f172a",
          color: "#e2e8f0",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word"
        }}
      >
        <code>{code}</code>
      </pre>
    </section>
  );
}
