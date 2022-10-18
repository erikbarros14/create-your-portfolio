import { ReactNode } from "react";
import { Sectiontitle } from "../Sectiontitle";
import { ExperienciaItem } from "./experienciaItem";
import {Container} from './styles'

export function Experiencia () {

return (
 <Container>
  <Sectiontitle title="01 Ano " descripition="de experiencia" />
  <section>
    <ExperienciaItem
      yer="2020"
      title="dev-front-end"
      descripition=" lorem ipsum dolor sit amet , concectetur adispscing , elit . Aliquan "
    />
    <ExperienciaItem
      yer="2021"
      title="dev-front-end"
      descripition=" lorem ipsum dolor sit amet , concectetur adispscing , elit . Aliquan "
    />
    <ExperienciaItem
     yer="2021"
     title="dev-front-end"
     descripition=" lorem ipsum dolor sit amet , concectetur adispscing , elit . Aliquan "
    />
    <ExperienciaItem
     yer="2022"
     title="dev-front-end"
     descripition=" lorem ipsum dolor sit amet , concectetur adispscing , elit . Aliquan "
    />
  </section>

 </Container>

)

}
