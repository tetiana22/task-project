// import { createPortal } from 'react-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectModalActiveModal } from '../../redux/modal/selectors';
// import { closeModal } from '../../redux/modal/modalSlice';
// import { ModalBackdrop, ModalContent } from './MainModal.styled';

// const modalRoot = document.createElement('div');
// modalRoot.setAttribute('id', 'modal-root');
// document.body.appendChild(modalRoot);

// export const Modal = ({ modalId, children }) => {
//   const dispatch = useDispatch();
//   const activeModal = useSelector(selectModalActiveModal);
//   const closeModalOnBackdrop = e => {
//     if (e.target === e.currentTarget) {
//       dispatch(closeModal());
//     }
//   };
//   useEffect(() => {
//     const closeModalonEsc = e => {
//       if (e.key === 'Escape') {
//         dispatch(closeModal());
//       }
//     };
//     if (activeModal === modalId) {
//       window.addEventListener('keydown', closeModalonEsc);
//     }

//     return () => {
//       window.removeEventListener('keydown', closeModalonEsc);
//     };
//   }, [dispatch, activeModal, modalId]);
//   return createPortal(
//     activeModal === modalId ? (
//       <ModalBackdrop onClick={closeModalOnBackdrop}>
//         <ModalContent>{children}</ModalContent>
//       </ModalBackdrop>
//     ) : null,
//     modalRoot
//   );
// };
