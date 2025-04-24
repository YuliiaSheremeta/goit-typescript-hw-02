import css from './ImageModal.module.css'
import Modal from 'react-modal';
import type { ImageItem } from '../App/App';

Modal.setAppElement('#root');

type ImageModalProps = {
    onRequestClose: () => void;
    image: ImageItem | null;
};
export default function ImageModal({ onRequestClose, image }: ImageModalProps) { 
    
    const isOpen = Boolean(image);

    return (
        <Modal
            className={css.modal}
            overlayClassName={`${css.overlay} ${isOpen? css.overlayIsOpen : '' }`}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
           >
            {image && (
                <>
                    <button className={css.closeModalBtn} onClick={onRequestClose}>X</button>
                    <img className={css.modalImage}
                        src={image.urls.regular} alt={image.alt_description} />
                    <p className={css.p}>Likes :{image.likes}</p>
                    <p className={css.p}>Autor : {image.user.name}</p>
                    <p className={css.p}>Description : {image.description}</p>
                </>
            )}
        </Modal>

    );
}