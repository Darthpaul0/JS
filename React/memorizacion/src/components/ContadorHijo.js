import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  //   let superNumero = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     superNumero++;
  //   }

  // useMemo se encarga de memorizar un valor resultado de un proceso
  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }
    // esta variable numero sería lo que estaríamos memorizando
    return numero;
  }, []);
  console.log("¡Hijo renderizado!");
  return (
    <div
      style={{ border: "thin solid black", margin: "1rem", padding: "1rem" }}
    >
      <h2>Contador Hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

/* 
aplicando esta función de React evitamos que este componente
se renderice si no cambia su estado o props
*/
export default memo(ContadorHijo);
