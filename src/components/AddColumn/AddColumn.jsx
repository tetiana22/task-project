import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { editColumnSchema } from 'components/validation/schema';
import {
  Input,
  Error,
  Form,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/cards/cardsReducers';

const AddColumn = ({ boardId }) => {
  const dispatch = useDispatch();
  console.log(boardId);
  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(editColumnSchema),
  });

  const onSubmit = values => {
    const { title } = values;
    dispatch(addColumn({ title, boardId }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="title"
        placeholder="To do"
        {...register('title')}
        error={touched.title && errors.title && errors.title.message}
      />
      {errors.title && <Error>{errors.title.message}</Error>}

      <ButtonPlus type="submit" approve="true" text="Add" />
    </Form>
  );
};

export default AddColumn;
