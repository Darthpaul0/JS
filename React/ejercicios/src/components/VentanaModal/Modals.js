import { useModal } from "../../hooks/useModal";
import ContactForm from "../FormValidation/ContactForm";
import SongSearch from "../Song Search/SongSearch";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);
  const [isOpenModalSongSearch, openModalSongSearch, closeModalSongSearch] =
    useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);
  return (
    <div>
      <h2>Ventanas Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Contenido del modal 1</p>
        <img src="https://placeimg.com/300/300/tech" alt="IMG" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Contenido del modal 2</p>
        <img src="https://placeimg.com/300/300/nature" alt="IMG" />
      </Modal>
      <button onClick={openModalContact}>Modal de Contacto</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSongSearch}>
        Modal del Buscador de canciones
      </button>
      <Modal isOpen={isOpenModalSongSearch} closeModal={closeModalSongSearch}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal en portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>🌌🌌 Portal 🌌🌌</h3>
        <p>Contenido del portal</p>
        <img src="https://placeimg.com/300/300/people" alt="IMG" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
