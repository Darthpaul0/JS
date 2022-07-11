import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({ color }) => color};
    color: ${({ color }) => color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 2s ease-out;

    /*${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}*/

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const light = {
    color: "black",
    bgColor: "white",
  };
  const dark = {
    color: "white",
    bgColor: "black",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`

  h2{ 
    padding: 2rem; 
    background-color: white; 
    color: navy; 
    text-transform: uppercase;
  }

  `;

  return (
    <>
    <GlobalStyle></GlobalStyle>
      <h2>Styled-Components</h2>
      <MyH3>Hola, soy un h3 estilizado</MyH3>
      <MyH3 color="navy">Hola, soy un h3 estilizado</MyH3>
      <MyH3 isButton>Soy un H3 estilizado como botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Una caja light</Box>
        <BoxRounded>Caja redondeada light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Una caja dark</Box>
        <BoxRounded>Caja redondeada dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
