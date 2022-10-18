import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
 gap: 5rem;
  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

`;
export const ProjetoContainer = styled.div`
 width: 100%;
 display: flex;
 height: 25rem;
 align-items: flex-end;
  position: relative;

  >section {
    width: 50rem;
    height: 100%;
    background: red;
    position: relative;
  }
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

      h1{
        color: ${({theme}) => theme.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }
      h2{
        color: ${({theme}) => theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b;
      }

   }
`
