import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { editColumnSchema } from 'components/validation/schema';
import {
  Input,
  Error,
  Form,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/cards/cardsReducers';
import { selectColumns } from '../../redux/selectors';

const AddColumn = () => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      text: '',
    },
    resolver: yupResolver(editColumnSchema),
  });

  const onSubmit = (data, bordId) => {
    const alreadyExistsIndex = columns.findIndex;

    if (alreadyExistsIndex >= 0) {
      const alreadyExistsColumn = columns[alreadyExistsIndex];
      return `${alreadyExistsColumn.name} is already added to contact list`;
    } else {
      dispatch(addColumn({ bordId, data }));
      // console.log({ text });
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="text"
        placeholder="To do"
        {...register('text')}
        error={touched.text && errors.text && errors.text.message}
      />
      {errors.text && <Error>{errors.text.message}</Error>}

      <ButtonPlus type="submit" approve="true" text="Add" />
    </Form>
  );
};

export default AddColumn;
