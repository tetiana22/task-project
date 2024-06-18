import { useState } from 'react';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
import {
  AccentText,
  Image,
  Wrapper,
  Text,
  ButtonWrapper,
  ButtonText,
  CircleIcon,
} from './NeedHelp.styled';
import NeedHelpModal from '../../Modals/NeedHelpModals/NeedHelpModal';
import plant from '../../../assets/fonts/images/sidebar/plant.png';

const NeedHelpBlock = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <Image src={plant} alt="need help image" />
      <Text>
        If you need help with <AccentText>TaskPro</AccentText>, check out our
        support resources or reach out to our customer support team.
      </Text>
      <ButtonWrapper onClick={handleOpen}>
        <CircleIcon>
          <use href={sprite + '#icon-help-circle'} />
        </CircleIcon>
        <ButtonText>Need help?</ButtonText>
      </ButtonWrapper>
      <NeedHelpModal isOpen={open} onClose={handleClose} />
    </Wrapper>
  );
};

export default NeedHelpBlock;
