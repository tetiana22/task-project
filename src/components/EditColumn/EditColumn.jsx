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
import { editColumn } from '../../redux/cards/cardsReducers';

const EditColumn = ({ text, columnId }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      text: '',
      columnId: '',
    },
    resolver: yupResolver(editColumnSchema),
  });

  const onSubmit = () => {
    dispatch(editColumn(text, columnId));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="text"
        placeholder="Title"
        {...register('text')}
        error={touched.text && errors.text && errors.text.message}
      />
      {errors.text && <Error>{errors.text.message}</Error>}

      <ButtonPlus type="submit" approve="true" text="Add" />
    </Form>
  );
};

export default EditColumn;
