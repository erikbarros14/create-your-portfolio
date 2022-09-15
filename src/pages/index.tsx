import { HomeHero } from "../components/HomeHero";
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
         </main>

      </HomeContainer>
  );
}
