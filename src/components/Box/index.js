import styled from 'styled-components';


export const Box = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

  background: #FAFAFA;
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #5F1432;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #D2B5BF;
  }
  input {
    width: 100%;
    background-color: #D2B5BF;
    color: #333333;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FAFAFA;
    border-radius: 10000px;
    background-color: #5F1432;
    font-family: 'Montserrat', sans-serif;
  }
`; 
