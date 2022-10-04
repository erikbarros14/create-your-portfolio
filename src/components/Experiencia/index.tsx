import { ReactNode } from "react";
import { Sectiontitle } from "../Sectiontitle";
import { ExperienciaItem } from "./experienciaItem";
import {Container} from './styles'

export function Experiencia () {

return (
 <Container>
  <Sectiontitle title="05 Anos" descripition="de experiencia" />
  <section>
    <ExperienciaItem/>
  </section>

 </Container>

)

}
