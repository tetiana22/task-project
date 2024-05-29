import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { addCardSchema } from 'components/validation/schema';
import { addCard } from '../../redux/cards/cardsReducers';
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
import 'react-datepicker/dist/react-datepicker.css'; // Ensure this is imported

const options = ['Low', 'Medium', 'High', 'Without priority'];
const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

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
  const [selectedLabel, setSelectedLabel] = useState(options[3]);
  const [startDate, setStartDate] = useState('');
  const cards = useSelector(state => state.dashboards.cards);
  const currColumnCardsLgth = cards.filter(
    card => card.columnId === columnId
  ).length;

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

  const onSubmit = values => {
    const index = currColumnCardsLgth;
    const { title, description, priority } = values;
    const deadline = startDate;

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
              value={el}
              className={selectedLabel === el ? 'active' : ''}
            >
              <LabelItem
                onClick={() => setSelectedLabel(el)}
                value={el}
                className={selectedLabel === el ? 'active' : ''}
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
            dateFormat="dd/MM/yyyy"
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
