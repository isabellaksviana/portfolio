import { Box, Component, FileText, UserCheck } from 'lucide-react';
import Section from './Section';
import { principles } from '../data/content';
import { IconBox } from 'ds-lab';

// Traduz o nome escrito no content.js para o componente do ícone.
const icons = {
  file: FileText,
  component: Component,
  box: Box,
  check: UserCheck,
};

export default function Principles() {
  const [first, second] = principles.title;
  const title = (
    <>
      <span className="line">{first} </span>
      <em className="line">{second}</em>
    </>
  );

  return (
    <Section id="como-trabalho" title={title}>
      <ul className="principles">
        {principles.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title} className="principle">
              <IconBox icon={<Icon aria-hidden="true" />} />
              <div>
                <h3 className="principle-title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
