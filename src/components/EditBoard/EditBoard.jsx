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

const EditBoard = ({ _id }) => {
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
      text: '',
      icon: icons,
      backgroundURL: bgdImg,
    },
    resolver: yupResolver(editColumnSchema),
  });
  const onSubmit = values => {
    const { text, icon, backgroundURL } = values;

    const updatedData = { name: text, icon, backgroundURL };
    console.log(values);
    dispatch(editBoard({ boardId: _id, updatedData }));
    reset();
  };
  const handleBgDImg = url => {
    setBgdImg(url);
  };
  const handleIcon = el => {
    setIcon(el);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="text"
        placeholder="Project office"
        {...register('text')}
        error={touched.text && errors.text && errors.text.message}
      />
      {errors.text && <Error>{errors.text.message}</Error>}
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
                {...register('backgroundURL')}
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
