import  {ItemContainer} from './styles'

interface ExperienciaProps{
  yer: string;
  title: string;
  descripition: string;
}

export function ExperienciaItem ( {yer, title , descripition}:ExperienciaProps ) {

return (
  <ItemContainer>
    <div>
      <h1>{yer}</h1>
      <h2>{title}</h2>
      <p> {descripition}  </p>
    </div>
  </ItemContainer>
)

}
