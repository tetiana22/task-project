import { Button, IconWrapper, Icon, Wrap } from './ButtonPlus.styled';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';

const ButtonPlus = ({ text, approve, onOpen }) => {
  return (
    <Button type="submit" $approve={approve} onClick={onOpen}>
      <Wrap $approve={approve}>
        <IconWrapper $approve={approve}>
          <Icon $approve={approve}>
            <use href={sprite + '#icon-plus'} />
          </Icon>
        </IconWrapper>
        {text}
      </Wrap>
    </Button>
  );
};
export default ButtonPlus;
