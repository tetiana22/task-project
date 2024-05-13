import { CloseModalCross } from '../../mainModal/CloseModal';

// import { modalNames } from '../../../constant/constant';
import {
  ModalContainer,
  ModalTitle,
  ModalHeader,
} from '../EditProfileModal/EditProfileModal.styled';
// import { Modal } from '../../mainModal/MainModal';
import NeedHelp from 'components/NeedHelp/NeedHelp';

const NeedHelpModal = () => {
  return (
    // <Modal modalId={modalNames.NEED_HELP}>
    <>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Need help</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <NeedHelp />
      </ModalContainer>
    </>
    // </Modal>
  );
};

export default NeedHelpModal;
