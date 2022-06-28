import Modal from "react-modal";
import closeImg from "assets/close.svg";
import { ReactNode } from "react";
import { ButtonWrapper, Container } from "./styles";
import { Button } from "components/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm?: () => void;
  children?: ReactNode;
  title: string;
}

export const DetailsModal = ({
  isOpen,
  onRequestClose,
  children,
  title,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container>
        <h2>{title}</h2>
        <button type="button" className="react-modal-close">
          <img src={closeImg} alt="Fechar modal" onClick={onRequestClose} />
        </button>
      </Container>
      {children}
      <ButtonWrapper>
        <Button onClick={onRequestClose}>Ok, entendi</Button>
      </ButtonWrapper>
    </Modal>
  );
};
