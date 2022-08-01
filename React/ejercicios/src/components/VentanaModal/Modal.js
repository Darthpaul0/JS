import "./Modals.css";

const Modal = ({ children, isOpen, closeModal }) => {
  /**
   * con esta función evitamos que se cierre la ventana modal
   * al clicar en ella
   */

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
