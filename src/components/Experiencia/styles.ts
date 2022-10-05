import styled from 'styled-components';


export const Container = styled.div `
width: 100%;


section{

  width: 100%;
  margin-top: 7rem;
  display: flex;
  gap: 1.5rem;
  padding-bottom:8rem ;
   border-bottom: 3px solid  ${({theme}) => theme.primary} ;
}

`
export const ItemContainer = styled.div`
 div{
  background-color: ${({theme}) => theme.gradient};
  padding: 1rem;
  padding-top: 2.5rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  transition: 0.5s;

  h1{
    color: ${({theme}) => theme.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;

 }
  h2{
    color: ${({theme}) => theme.secondary};
    font-size: 2rem;
    font-weight:300;
    margin-bottom: 1.5rem;
 }
  p{
    color: ${({theme}) => theme.textLight};
    font-size: 1rem;
    font-weight:300;

 }
  }

  &:hover > div{
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div{
    margin-top: 4rem ;
  }
`
