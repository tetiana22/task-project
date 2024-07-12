import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { createBoard } from '../../redux/cards/cardsReducers';
import { Input, Error, Form } from '../AddBoard/AddBoard.styled';
import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import {
  DefaultRadioBtn,
  CustomRadioBtn,
  BgcItem,
  Icon,
  IconWrapper,
  DefaultImage,
  RadioBtnWrapper,
  FormWrapper,
  FormTitle,
} from './AddBoard.styled';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import data from '../../assets/fonts/images/backs-small/backs.json';
import { editColumnSchema } from 'validation/schema';

const dark =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1720275344/xkosk1k9mub6qfc5peic.jpg';
const light =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/v1720275361/xx6y5faroqzgq3vxxuwk.jpg';
const violet =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/v1720275212/fpw7ed7f3hpymsxw0vhf.jpg';

const AddBoard = ({ onClose }) => {
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

  const [bgdImg, setBgdImg] = useState('');
  const [icons, setIcon] = useState(options[0]);
  const dispatch = useDispatch();
  const theme = useSelector(state => state.auth.userData.theme);

  const {
    register,
    handleSubmit,
    setValue, // Include setValue from useForm
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      background: '', // Ensure to set default value of background to ''
      icon: icons,
    },
    resolver: yupResolver(editColumnSchema),
  });

  useEffect(() => {
    // Set default background image when theme changes or initial load
    switch (theme) {
      case 'dark':
        setBgdImg(dark);
        break;
      case 'light':
        setBgdImg(light);
        break;
      case 'violet':
        setBgdImg(violet);
        break;
      default:
        setBgdImg(dark); // Default to dark theme if theme is not set
    }
  }, [theme]); // Watch for changes in theme

  const onSubmit = data => {
    const { title, icon, background } = data;
    console.log(data);

    dispatch(createBoard({ title, icon, background })); // Не включайте theme у відправлену інформацію
    reset();
    onClose();
  };

  const handleBgDImg = url => {
    setBgdImg(url);
    setValue('background', url); // Set the value of 'background' in the form
  };

  const handleIcon = icon => {
    setIcon(icon);
  };

  let defaultImage = dark; // Define defaultImage here

  // Determine defaultImage based on theme
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
      defaultImage = dark; // Default to dark theme if theme is not set
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="title"
        placeholder="Title"
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

      <ButtonPlus type="submit" text="Create" />
    </Form>
  );
};

export default AddBoard;
