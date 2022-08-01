import React from "react";
import Modal from "./Modal";

const Modals = () => {
  return (
    <div>
      <h2>Ventanas Modales</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Contenido del modal 1</p>
        <img src="https://placeimg.com/300/300/tech" alt="IMG"/>
      </Modal>
      {/* <button>Modal 2</button>
      <Modal>
        <h3>Modal 2</h3>
        <p>Contenido del modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="IMG"/>
      </Modal> */}
    </div>
  );
};

export default Modals;
