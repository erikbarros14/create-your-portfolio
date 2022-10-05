
import Link from 'next/link'
import {ProjetoContainer} from './styles'

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
          Ver mas
        </a>
      </Link>
     </button>

    </ProjetoContainer>
  )
}
