import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from '../../../redux/authorization/authReducer';
import { toast } from 'react-toastify';
import { registrationSchema } from '../../validation/schema';
import {
  Input,
  Button,
  Form,
  Error,
  Container,
  Wrap,
} from './RegistrationPg.styled';
import { yupResolver } from '@hookform/resolvers/yup';

function Registration() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, touched = {}, isValid },
    reset,
  } = useForm({
    mode: 'onBlur', // Validate on blur
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = data => {
    console.log(data);
    dispatch(registration(data))
      .unwrap()
      .then(() => {
        toast.success('Registration successful!');
      })
      .catch(() => {
        toast.error('Please write a correct email or password!');
      });
    reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Wrap>
          <Input
            type="text"
            placeholder="Enter your name"
            id="name"
            {...register('name')}
            error={touched.name && errors.name}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Wrap>
        <Wrap>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register('email')}
            error={touched.email && errors.email}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Wrap>
        <Wrap>
          <Input
            type="password"
            id="password"
            placeholder="Create a password"
            {...register('password')}
            error={touched.password && errors.password}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Wrap>
        <Button type="submit" disabled={!isValid}>
          Register Now
        </Button>
      </Form>
    </Container>
  );
}

export default Registration;
