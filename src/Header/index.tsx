import { NavLink } from './NavLink'
import {
  Container,

} from './styles'

export function Header () {
  return (
    <Container>
      <ul  >
      <NavLink  title='Home'   path='/' />
      <NavLink title='Projetos'   path='/Projetos' />



      </ul>
    </Container>
  )
}
