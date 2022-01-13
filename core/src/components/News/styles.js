import styled from 'styled-components';

export const NewsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  align-content: center;
  justify-items: center;
  row-gap: 20px;
  padding: 40px 0 0 0 ;

  @media(max-width: 750px){
    flex-direction: column;
 }
`;

export const NewsImageStyles = styled.div`
  img{
    width: 300px;
    height: 100%;
  }
  @media(max-width: 750px){
    img{
      width: 100%;
      height: 200px;
    }
   
`

export const NewsCard = styled.div`
  margin: 50px;
  max-width: 800px;
  display: flex;

  .card{
    background-color: var(--color-3);
    filter: drop-shadow(0 10px 0.3rem #000);
    display: flex;
    flex-direction: ${ props => props.isInverted? 'row-reverse': ''}
  }
  @media(max-width: 750px){
    .card{
      flex-direction: column;
      align-items: center;
    }
    .modal{
      width: 
    }
  }
 
`

export const NewsSearchForm = styled.form`
  position: absolute;
  top: 1em;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin: 10px 50px 50px 0;

`