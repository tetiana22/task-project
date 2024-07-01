import React, { useState } from 'react';
import {
  FormWrapper,
  DefaultRadioBtn,
  FormTitle,
  RadioBtnWrapper,
  Label,
  LabelItem,
  ShowAllLabel,
  Form,
  Wrap,
} from './FilterSettings.styled';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { selectPriority } from '../../../redux/cards/cardsSlice';
import { editBoard } from '../../../redux/cards/cardsReducers';

const options = ['Without priority', 'Low', 'Medium', 'High'];

const FilterSettings = () => {
  const dispatch = useDispatch();
  const [selectedLabel, setSelectedLabel] = useState(options[3]);

  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: {
      priority: selectedLabel,
    },
  });

  const onSubmit = data => {
    dispatch(editBoard(data));
    reset();
  };

  const handleLabelClick = el => {
    setSelectedLabel(el);
    dispatch(selectPriority(el));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Wrap>
          <FormTitle>Label color</FormTitle>
          <ShowAllLabel onClick={() => dispatch(selectPriority('show all'))}>
            Show all
          </ShowAllLabel>
        </Wrap>
        <RadioBtnWrapper>
          {options.map((el, idx) => (
            <Label
              key={idx}
              value={el}
              className={selectedLabel === el ? 'active' : ''}
              onClick={() => handleLabelClick(el)}
            >
              <LabelItem
                value={el}
                className={selectedLabel === el ? 'active' : ''}
              />
              <DefaultRadioBtn
                type="radio"
                value={el}
                name="priority"
                {...register('priority')}
              />
              <span>{el}</span>
            </Label>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>
    </Form>
  );
};

export default FilterSettings;
