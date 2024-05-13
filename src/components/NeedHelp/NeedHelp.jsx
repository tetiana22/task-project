import { needHelpSchema } from 'components/validation/schema';
import {
  Form,
  Button,
  Input,
  Error,
  TextInput,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelp } from '../../redux/authorization/authReducer';

const NeedHelp = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      message: '',
    },
    resolver: yupResolver(needHelpSchema),
  });

  const onSubmit = formData => {
    console.log(formData);
    if (!formData.message) {
      toast.error('Sorry, but you need to describe your problem!');
      return;
    }

    dispatch(needHelp(formData));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        id="email"
        placeholder="Email address"
        {...register('email')}
        error={touched.email && errors.email.message}
      />
      {errors.email && <Error>{errors.email.message}</Error>}

      <TextInput
        type="text"
        id="message"
        placeholder="Comment"
        {...register('message', { required: true })}
        error={touched.message && errors.message.message}
      />
      {errors.message && <Error>{errors.message.message}</Error>}

      <Button type="submit">Send</Button>
    </Form>
  );
};
export default NeedHelp;
