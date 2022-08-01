import styled from 'styled-components';

export default function Header () {
  return (
    <TitleMenu>
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
`;