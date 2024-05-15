import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { editColumnSchema } from 'components/validation/schema';
import {
  Input,
  Error,
  Form,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import {
  DefaultRadioBtn,
  CustomRadioBtn,
  BgcItem,
  FormWrapper,
  RadioBtnWrapper,
  FormTitle,
  Icon,
  IconWrapper,
} from '../AddBoard/AddBoard.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import { useState } from 'react';
import data from '../../assets/fonts/images/backs-small/backs.json';
import { editBoard } from '../../redux/cards/cardsReducers';

const EditBoard = ({ boardId }) => {
  const [bgdImg, setBgdImg] = useState('');

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
  };
  const handleBgDImg = url => {
    setBgdImg(url);
  };
  const handleIcon = el => {
    setIcon(el);
  };
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
        </RadioBtnWrapper>
      </FormWrapper>

      <ButtonPlus type="submit" approve={true} text="Edit" />
    </Form>
  );
};

export default EditBoard;
