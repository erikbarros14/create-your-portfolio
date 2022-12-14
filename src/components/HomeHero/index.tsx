import {
  Container,
  TextContainer,
  InfosContainer,
  CodeItem,
} from './styles'
import  Foto  from '../../assest/azul.webp'


export function HomeHero (){
  return (
    <Container>
     <img src={Foto} alt='MINHA FOTO' />
      <div>
      <TextContainer>
         <h1>olá</h1>
         <h2>Me chamo   erik</h2>
      </TextContainer>
      <InfosContainer>
        <CodeItem>
          <span className='comment' >//minha apresentação</span>
          <span className='purple' >infos</span> {'\u007B'}
          <div>nome :<span className='blue' >Erik,</span> </div>
          <div>sobre nome :<span className='azul' >Barros,</span> </div> {'\u007D'}
        </CodeItem>
        <CodeItem>
          <span className='purple' >cargo</span> {'\u007B'}
          <div>função :<span className='blue' >Dev: front-end,</span> </div>
          <div>empresa :<span className='azul' >GOWDOCK</span> </div> {'\u007D'}
        </CodeItem>
      </InfosContainer>
      </div>

    </Container>
  )
}
