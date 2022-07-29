import styled from 'styled-components';

export default function Header () {
  return (
    <TitleMenu>
      <div>
        <ion-icon name="return-up-back"></ion-icon>
        <h6>Voltar</h6>
      </div>
      <h1>CINEFLEX</h1>
    </TitleMenu>
  );
}

const TitleMenu = styled.header`
  width: 100%;
  height: 67px;
  left: 0px;
  top: 0px;
  background-color: #C3CFD9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5;

  div {
    position: fixed;
    top: 24px;
    left: 20px;
    display: flex;
  }
  ion-icon {
    font-size: 18px;
    line-height: 21px;
  }
`;