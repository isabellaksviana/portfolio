import { ArrowDown, Send, Cat, Rose } from 'lucide-react';
import { profile } from '../data/content.js';
import { Button, Card, Tag, Badge, IconBox } from 'ds-lab';
import CodeWindow from './CodeWindow.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-split">
        <div>
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
              iconEnd={<ArrowDown aria-hidden="true" />}
              variant="primary"
              href="#projetos"
            />

            <Button
              label="Entrar em contato"
              iconStart={<Send aria-hidden="true" />}
              href="#contato"
            />
          </div>
        </div>

        {/* Peças do ds-lab flutuando. É decoração: inert tira do Tab e do leitor de tela */}
        <div className="hero-scene" aria-hidden="true" inert>
          <div className="piece piece-console">
            <CodeWindow />
          </div>
          <div className="piece piece-card">
            <Card>
              <IconBox icon={<Cat />} />
              <div>
                <b>ds-lab</b>
                <small>tokens · componentes</small>
              </div>
            </Card>
          </div>
          <div className="piece piece-ds">
            <Tag label="design system" />
          </div>
          <div className="piece piece-rose">
            <IconBox icon={<Rose />} />
          </div>
          <div className="piece piece-badge">
            <Badge label="No ar" variant="success" />
          </div>
          <div className="piece piece-button">
            <Button label="Default" />
          </div>
          <div className="piece piece-tag">
            <Tag label="em movimento" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
