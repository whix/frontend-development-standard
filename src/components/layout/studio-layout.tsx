import type { ReactNode } from "react";

interface StudioLayoutProps {
  controls: ReactNode;
  preview: ReactNode;
}

export default function StudioLayout({ controls, preview }: StudioLayoutProps) {
  return (
    <main className="studio-shell">
      <header className="studio-shell__header">
        <p className="studio-shell__eyebrow">Frontend Style System</p>
        <h1>Style Engine</h1>
      </header>

      <section className="studio-grid" aria-label="Studio workspace">
        <div className="studio-panel studio-panel--controls">{controls}</div>
        <div className="studio-panel studio-panel--preview">{preview}</div>
      </section>
    </main>
  );
}
