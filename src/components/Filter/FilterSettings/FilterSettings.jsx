import React, { useState } from 'react';
import {
  SectionTitle,
  FormWrapper,
  Section,
  DefaultRadioBtn,
  FormTitle,
  RadioBtnWrapper,
  Label,
  LabelItem,
  CustomRadioBtn,
  ShowAllLabel,
  LabelText,
  Wrapper,
  BgcItem,
} from './FilterSettings.styled';
import { Form } from 'components/EditProfile/EditProfile.styled.component';
import { useForm } from 'react-hook-form';
import data from '../../../assets/fonts/images/backs-small/backs.json';
import { useDispatch, useSelector } from 'react-redux';
import { selectPriority } from '../../../redux/cards/cardsSlice';
import { editBoard } from '../../../redux/cards/cardsReducers';

const options = ['Without priority', 'Low', 'Medium', 'High'];

const FilterSettings = () => {
  const dispatch = useDispatch();
  const currentDashboard = useSelector(
    state => state.dashboard.selectCurrentDasboard
  );

  const [selectedLabel, setSelectedLabel] = useState('');

  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: {
      background: '',
      label: selectedLabel,
    },
  });

  const handleLabelSelection = el => {
    setSelectedLabel(el);
  };

  const onSubmit = data => {
    const updatedData = { backgroundURL: data.background };
    dispatch(editBoard({ dashboardId: currentDashboard._id, updatedData }));
    reset();
  };

  const handleBgSelection = el => {
    setSelectedLabel(el);
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle>Filters</SectionTitle>

        <FormWrapper>
          <FormTitle>Backgrounds</FormTitle>
          <RadioBtnWrapper>
            {data.map((background, idx) => (
              <label key={idx}>
                <BgcItem
                  onClick={() => handleBgSelection(background.url)}
                  className={selectedLabel === background.url ? 'active' : ''}
                >
                  {background.url !== '' && (
                    <CustomRadioBtn
                      $url={background.url}
                      onClick={() => handleBgSelection(background.url)}
                      className={
                        selectedLabel === background.url ? 'active' : ''
                      }
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

        <FormWrapper>
          <FormTitle>Label color</FormTitle>
          <ShowAllLabel onClick={() => dispatch(selectPriority('show all'))}>
            Show all
          </ShowAllLabel>

          <RadioBtnWrapper>
            {options.map((el, idx) => (
              <Wrapper
                key={idx}
                onClick={() => {
                  handleLabelSelection(el);
                  dispatch(selectPriority(el));
                }}
              >
                <Label
                  value={el}
                  className={selectedLabel === el ? 'active' : ''}
                >
                  <LabelItem
                    value={el}
                    className={selectedLabel === el ? 'active' : ''}
                  />
                  <DefaultRadioBtn
                    type="radio"
                    value={el}
                    name="label"
                    {...register('label')}
                  />
                </Label>
                <LabelText className={selectedLabel === el ? 'active' : ''}>
                  {el === 'Without priority'
                    ? `${el[0].toUpperCase() + el.slice(1)}`
                    : el[0].toUpperCase() + el.slice(1)}
                </LabelText>
              </Wrapper>
            ))}
          </RadioBtnWrapper>
        </FormWrapper>
      </Form>
    </Section>
  );
};

export default FilterSettings;
