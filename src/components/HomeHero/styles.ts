import styled from 'styled-components';

export const Container = styled.section`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
gap: 2rem;
margin-top: 5rem;
> img {
  width: 30rem;
  /* flex: 1; */
  }
 > div {
  flex: 4;
 }

 @media(max-width:1450px ){
   > img{
    width: 30rem;

   }

   > div{
    flex: 1;
   }
 }

 @media(max-width:1000px ){
   > img{
    width: 22rem;

   }
 @media(max-width:1000px ){
     flex-direction: column;
   > div{
   width: 100%;

   }

 }

  }


`
export const TextContainer = styled.section`

margin-bottom: 2rem;
width: 100%;

h1{
  font-size: 7rem;
  color: ${({theme}) => theme.primary } ;
}
h2{
  font-size: 3rem;
  font-weight: 400;
  color: ${({theme}) => theme.secondary } ;
}

@media(max-width:1450px ){
   > h1{
    font-size: 5rem;

   }

   > h2{
    font-size: 2rem;
   }
 }
  @media(max-width: 1000px) {
     >h1{
      font-size: 3rem;
     }
    > h2{
      font-size: 1.5rem;
    }
  }

`

export const InfosContainer = styled.section`
 width: 100%;
 display: flex;
 flex-direction: column;
 flex: 1;
`
export const CodeItem = styled.pre`

background: ${({theme})  => theme.gradient};
padding: 2rem;
font-family: 'JetBrains mono', monospace ;
font-weight: 300;
color: white;
width: 24rem;
align-self: flex-start;
transition: 1s;

&:hover {
  filter: brightness(1.2);
}

`
