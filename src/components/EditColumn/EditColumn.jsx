import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import { editColumnSchema } from 'validation/schema';
import {
  Input,
  Error,
  Form,
} from 'pages/Auth/RegistrationPg/RegistrationPg.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { editColumn } from '../../redux/cards/cardsReducers';

const EditColumn = ({ columnId, onClose }) => {
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
    },
    resolver: yupResolver(editColumnSchema),
  });

  const onSubmit = values => {
    const { title } = values;
    dispatch(editColumn({ columnId, title }));
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

      <ButtonPlus type="submit" approve="true" text="Edit" />
    </Form>
  );
};

export default EditColumn;
