import ReactDOM from "react-dom";
import "./Modals.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
  /**
   * con esta función evitamos que se cierre la ventana modal
   * al clicar en ella
   */

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};

export default ModalPortal;
