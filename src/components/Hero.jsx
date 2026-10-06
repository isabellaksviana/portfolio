import { ArrowDown, Send } from 'lucide-react';
import { profile } from '../data/content.js';
import { Button } from 'ds-lab';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="label">
          <b>{profile.name}</b> {profile.role}
        </p>
        <h1 className="hero-title">
          {profile.headline.map((line) => (
            <span key={line} className="line">
              {line}{' '}
            </span>
          ))}
        </h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <Button
            label="Ver projetos"
            iconEnd={<ArrowDown size={18} aria-hidden="true" />}
            variant="primary"
            href="#projetos"
          />

          <Button
            label="Entrar em contato"
            iconStart={<Send size={18} aria-hidden="true" />}
            href="#contato"
          />
        </div>
      </div>
    </section>
  );
}
