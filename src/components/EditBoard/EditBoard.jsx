import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { editColumnSchema } from 'validation/schema';
import { Input, Error, Form } from '../AddBoard/AddBoard.styled';
import {
  DefaultRadioBtn,
  CustomRadioBtn,
  BgcItem,
  FormWrapper,
  RadioBtnWrapper,
  FormTitle,
  Icon,
  IconWrapper,
  DefaultImage,
} from '../AddBoard/AddBoard.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/icons-sprite.svg';
import { useState } from 'react';
import data from '../../images/backs.json';
import { editBoard } from '../../redux/cards/cardsReducers';

const dark =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1720275344/xkosk1k9mub6qfc5peic.jpg';
const light =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/v1720275361/xx6y5faroqzgq3vxxuwk.jpg';
const violet =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/v1720275212/fpw7ed7f3hpymsxw0vhf.jpg';

const EditBoard = ({ boardId, onClose }) => {
  const [bgdImg, setBgdImg] = useState('');
  const theme = useSelector(state => state.auth.userData.theme);
  const [icons, setIcon] = useState('');
  const dispatch = useDispatch();
  const options = [
    '#icon-Project',
    '#icon-star',
    '#icon-loading',
    '#icon-puzzle-piece',
    '#icon-container',
    '#icon-lightning',
    '#icon-colors',
    '#icon-hexagon',
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      icon: icons,
      background: bgdImg,
    },
    resolver: yupResolver(editColumnSchema),
  });

  const onSubmit = values => {
    const { title, icon, background } = values;
    const updatedData = { title, icon, background };
    dispatch(editBoard({ _id: boardId, updatedData }));
    console.log({ _id: boardId });
    reset();
    onClose();
  };
  const handleBgDImg = url => {
    setBgdImg(url);
  };
  const handleIcon = el => {
    setIcon(el);
  };
  let defaultImage = dark;

  switch (theme) {
    case 'dark':
      defaultImage = dark;
      break;
    case 'light':
      defaultImage = light;
      break;
    case 'violet':
      defaultImage = violet;
      break;
    default:
      defaultImage = dark;
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="title"
        name="title"
        placeholder="Project office"
        {...register('title')}
        error={touched.title && errors.title && errors.title.message}
      />
      {errors.title && <Error>{errors.title.message}</Error>}
      <FormWrapper>
        <FormTitle>Icons</FormTitle>
        <RadioBtnWrapper>
          {options.map((icon, idx) => (
            <IconWrapper key={idx}>
              <Icon
                className={icons === icon ? 'active' : ''}
                onClick={() => handleIcon(icon)}
                width={18}
                height={18}
              >
                <use href={sprite + icon} width={18} height={18} />
              </Icon>
              <DefaultRadioBtn
                type="radio"
                value={icon}
                {...register('icon')}
              />
            </IconWrapper>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>

      <FormWrapper>
        <FormTitle>Backgrounds</FormTitle>
        <RadioBtnWrapper>
          {data.map((background, idx) => (
            <label key={idx}>
              <BgcItem
                onClick={() => handleBgDImg(background.url)}
                className={bgdImg === background.url ? 'active' : ''}
              >
                {background.url !== '' && (
                  <CustomRadioBtn
                    $url={background.url}
                    onClick={() => handleBgDImg(background.url)}
                    className={bgdImg === background.url ? 'active' : ''}
                  />
                )}
              </BgcItem>
              <DefaultRadioBtn
                type="radio"
                value={background.url}
                {...register('background')}
              />
            </label>
          ))}
          {theme && (
            <DefaultImage
              src={defaultImage}
              alt="Default Background"
              className={bgdImg === defaultImage ? 'active' : ''}
              onClick={() => handleBgDImg(defaultImage)}
            />
          )}
        </RadioBtnWrapper>
      </FormWrapper>

      <ButtonPlus type="submit" text="Edit" />
    </Form>
  );
};

export default EditBoard;
