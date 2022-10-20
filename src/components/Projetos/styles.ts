import styled from 'styled-components';

interface projetoProps {
  imgUrl : string;
}

export const Container = styled.section`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 5rem;

   section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

`;
export const ProjetoContainer = styled.div<projetoProps>`
 width: 100%;
 display: flex;
 height: 25rem;
 align-items: flex-end;
  position: relative;

   button {
    height:  4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;
    font-weight: 300 ;
   }

      a {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 300;
        display: flex;
        align-items: center;
        gap: .8rem;
        transition: .5rem;
      }

  >section {
    width: 50rem;
    height: 100%;
    background: url(${ props => props.imgUrl }) no-repeat center ;
    background-size: cover;
    position: relative;

   > div.overley {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.gradient};
    opacity: 0.75;
    transition: 0.5s;

   }

   > div.text {
    position: absolute;
    top: 3rem;
    height: -10rem;
    transition: 0.5s;
     width: fit-content;

     > h1{
         position: relative;
         margin-left: 30rem;
        color: ${({theme}) => theme.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }
     > h2{
      position: relative;
         margin-left: 30rem;
        color: ${({theme}) => theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b;
      }

    }

  }

`
