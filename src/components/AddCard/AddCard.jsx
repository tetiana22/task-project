import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { addCardSchema } from 'components/validation/schema';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
// import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import { useState } from 'react';
// import data from '../../assets/fonts/images/backs-small/backs.json';
import { addCard } from '../../redux/cards/cardsReducers';
import DatePicker from 'react-datepicker';
import {
  Input,
  Form,
  Error,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import { FormTitle } from 'components/AddBoard/AddBoard.styled';
import {
  Wrapper,
  DateTitle,
  LabelItem,
  InputDesc,
  RadioBtnWrapper,
  DefaultRadioBtn,
  FormWrapper,
  Label,
} from './AddCard.styled';

const options = ['Low', 'Medium', 'High', 'Without priority'];
const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const today = new Date();
const month = months[today.getMonth()];
const day = today.getDate();
const formattedDate = `${month} ${day}`;

const AddCard = ({ onClose, boardId, columnId }) => {
  // const [deadline, setDeadline] = useState('');
  const [selectedLabel, setSelectedLabel] = useState(options[3]);
  const [startDate, setStartDate] = useState('');
  const cards = useSelector(state => state.dashboards.cards);
  const currColumnCardsLgth = cards.filter(
    card => card.columnId === columnId
  ).length;

  console.log(boardId);
  console.log(columnId);
  // const [bgdImg, setBgdImg] = useState('');
  // const [icon, setIcon] = useState('');
  const customDate =
    startDate !== '' ? startDate.toLocaleString('en-GB', dateOptions) : null;

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      description: '',
      priority: selectedLabel,
    },
    resolver: yupResolver(addCardSchema),
  });

  let deadline = startDate;

  const onSubmit = values => {
    const index = currColumnCardsLgth;
    const { title, description, priority } = values;

    // if (deadline === '') {
    //   deadline(new Date().toISOString());
    // }

    dispatch(
      addCard({
        boardId,
        title,
        description,
        priority,
        deadline,
        index,
        columnId,
      })
    );

    reset();
    onClose();
  };

  // const handleBgDImg = url => {
  //   setBgdImg(url);
  // };

  // const handleIcon = icon => {
  //   setIcon(icon);
  // };

  // const formattedDate = new Date().toLocaleDateString(); // Оголошуємо formattedDate

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

      <InputDesc
        type="text"
        id="description"
        placeholder="Description"
        {...register('description')}
        error={
          touched.description &&
          errors.description &&
          errors.description.message
        }
      />
      {errors.description && <Error>{errors.description.message}</Error>}

      <FormWrapper>
        <FormTitle>Label item</FormTitle>
        <RadioBtnWrapper>
          {options.map((el, idx) => (
            <Label
              key={idx}
              value={idx}
              className={selectedLabel === el ? 'active' : ''}
              id="labelOut"
            >
              <LabelItem
                onClick={() => setSelectedLabel(el)}
                value={el}
                className={selectedLabel === el ? 'active' : ''}
                id="in"
              />
              <DefaultRadioBtn
                type="radio"
                value={el}
                name="priority"
                {...register('priority')}
              />
            </Label>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>

      <FormWrapper>
        <FormTitle>Deadline</FormTitle>
        <DateTitle onClick={() => document.querySelector('.input-ref').click()}>
          {startDate !== '' ? customDate : `Today, ${formattedDate}`}
        </DateTitle>
        <Wrapper>
          <DatePicker
            className="input-ref"
            minDate={new Date()}
            timeFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
            id="datePicker"
          />
        </Wrapper>
      </FormWrapper>

      <ButtonPlus type="submit" approve={true} text="Create" />
    </Form>
  );
};

export default AddCard;
