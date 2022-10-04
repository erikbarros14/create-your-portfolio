import { ReactNode } from 'react';

import { Container } from './styles';

interface SectiontitleProps {
  title: string;
  descripition ?: string | ReactNode;
}

export function Sectiontitle({ title , descripition}: SectiontitleProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {descripition && <h2>{descripition}</h2> }
    </Container>
  );
}
