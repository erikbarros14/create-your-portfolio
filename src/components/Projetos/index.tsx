
import { Sectiontitle } from '../Sectiontitle';
import { ProjetosItems } from './projetosItems';

import { Container } from './styles';





export function Projetos() {
  return (
    <Container>
       <Sectiontitle title='ultimos projetos' />

        <section>
            <ProjetosItems/>
        </section>

    </Container>
  );
}
