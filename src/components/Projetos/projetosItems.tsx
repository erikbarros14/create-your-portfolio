
import Link from 'next/link'
import {ProjetoContainer} from './styles'
import {AiOutlineRightCircle} from 'react-icons/ai'

export function ProjetosItems () {

  return (
    <ProjetoContainer>

     <section>
       <div className='overlay' />
       <div className='text' >
         <h1>  projeto 01 </h1>

         <h2>
           - website
         </h2>

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
