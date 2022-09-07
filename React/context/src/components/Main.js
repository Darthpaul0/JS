import React from "react";

const Main = ({ theme, texts, auth }) => {
  return (
    <main className={theme}>
      {/* Según el valor de auth */}
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default Main;
