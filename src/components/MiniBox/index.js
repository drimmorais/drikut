import styled from 'styled-components';


export const MiniBox = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

  background: none;
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
  .card{
    background: #D2B5BF;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 16px;
  }
  li {
    position: relative;
    overflow: auto;
    padding-bottom: 30px;
    img{
        width: 100px;
        padding-left: 5px;
    }
    span {
      color: #5F1432;
      font-size: 16px;
      position: absolute;
      bottom: 10px;
      padding: 0 120px;
      padding-bottom: 55px;
      width: 100%;
    }
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #D2B5BF;
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
