import { Experiencia } from "../components/Experiencia";
import { HomeHero } from "../components/HomeHero";
import { Projetos } from "../components/Projetos";
import { Header } from "../Header/";
import {
  HomeContainer,
} from '../styles/Homestyles'


export default function Home() {
  return (
      <HomeContainer>
        <Header/>
         <main  className="container" >
          <HomeHero/>
          <Experiencia/>
          <Projetos/>
         </main>

      </HomeContainer>
  );
}
