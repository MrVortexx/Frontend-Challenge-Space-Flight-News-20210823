import styled from 'styled-components';

export const NewsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  align-content: center;
  justify-items: center;
  row-gap: 20px;
  padding: 40px 0 0 0 ;
`;

export const NewsImageStyles = styled.div`
  img{
    width: 300px;
    height: 100%;
  }
`

export const NewsCard = styled.div`
 margin: 50px;
 max-width: 800px;
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