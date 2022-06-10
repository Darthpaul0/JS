import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    //console.log("Scrolling");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => {window.removeEventListener("scroll", detectarScroll)};
  }, [scrollY]);

  useEffect(() => {
    //console.log("Montaje");
  }, []);
  useEffect(() => {
    //console.log("Actualización");
  });
  useEffect(() => {
    //console.log("Desmontaje");
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y:{scrollY}px</p>
    </>
  );
}
