import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: ReactNode;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-titulo`}>
      <div className="container">
        <h2 id={`${id}-titulo`} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
