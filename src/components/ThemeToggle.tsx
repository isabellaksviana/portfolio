import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

// Começa pelo tema que já está aplicado no <html>
// (o script no index.html decide isso antes do React carregar).
function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Toda vez que "theme" muda, aplica no <html> e guarda a escolha.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // navegador bloqueou o armazenamento: o tema só não fica salvo
    }
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';
  // O ícone mostra o tema pra onde o botão leva: no escuro aparece o sol.
  const Icon = next === 'light' ? Sun : Moon;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={next === 'light' ? 'Ativar tema claro' : 'Ativar tema escuro'}
    >
      <Icon size={16} aria-hidden="true" />
    </button>
  );
}
