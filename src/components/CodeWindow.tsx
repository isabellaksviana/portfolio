import { useState, useEffect } from 'react';

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

type CodePiece = {
  text: string;
  className?: string;
};

const code: CodePiece[] = [
  { text: 'import', className: 'code-keyword' },
  { text: ' ' },
  { text: '{', className: 'code-punct' },
  { text: ' Button ', className: 'code-component' },
  { text: '}', className: 'code-punct' },
  { text: ' ' },
  { text: 'from', className: 'code-keyword' },
  { text: ' ' },
  { text: "'ds-lab'", className: 'code-string' },
  { text: '\n\n' },
  { text: '<', className: 'code-punct' },
  { text: 'Button', className: 'code-component' },
  { text: '\n  label' },
  { text: '=', className: 'code-punct' },
  { text: '"Ver projetos"', className: 'code-string' },
  { text: '\n  variant' },
  { text: '=', className: 'code-punct' },
  { text: '"primary"', className: 'code-string' },
  { text: '\n' },
  { text: '/>', className: 'code-punct' },
];

const totalLength = code.map((piece) => piece.text).join('').length;

export default function CodeWindow() {
  const [letterCount, setLetterCount] = useState(
    prefersReducedMotion ? totalLength : 0,
  );

  useEffect(() => {
    if (letterCount >= totalLength) {
      return;
    }
    const timeout = setTimeout(() => {
      setLetterCount((count) => count + 1);
    }, 60);
    return () => clearTimeout(timeout);
  }, [letterCount]);

  let remaining = letterCount;

  return (
    <div className="code-window">
      <div className="code-window-bar">
        <i></i>
        <i></i>
        <i></i>
        <span>Hero.tsx</span>
      </div>
      <pre>
        <code>
          {code.map((piece, index) => {
            const visibleText = piece.text.slice(0, remaining);
            remaining -= visibleText.length;
            return (
              <span key={index} className={piece.className}>
                {visibleText}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
