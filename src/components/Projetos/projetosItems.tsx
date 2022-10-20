
import Link from 'next/link'
import {ProjetoContainer} from './styles'
import {AiOutlineRightCircle} from 'react-icons/ai'

export function ProjetosItems () {

  return (
    <ProjetoContainer imgUrl ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnubank.com.br%2Fconta%2F&psig=AOvVaw3rjLNZjEWMvRMSHxK3VtZJ&ust=1666311303485000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCND5z7zD7foCFQAAAAAdAAAAABAE" >

     <section>
       <div className='overlay' />
       <div className='text' >
         <h1> # projeto 01 </h1>
         <h2> - website </h2>
       </div>

     </section>

     <button type='button' >
      <Link href='/projetos' >
        <a>
          Ver mas  <AiOutlineRightCircle/>
        </a>
      </Link>
     </button>

    </ProjetoContainer>
  )
}
