import { logInSchema } from '../../validation/schema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Eye } from 'assets/fonts/images/icons/Eye';
import { EyeSlash } from 'assets/fonts/images/icons/EyeCrossed';

import { signin } from '../../../redux/authorization/authReducer';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { Wrap, Input, Button, Form, Error } from './LoginPg.styled';

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const swapPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    handleSubmit,
    formState: { errors, touched = {}, isValid },
    register,
    reset,
  } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupResolver(logInSchema),
  });

  const onSubmit = data => {
    console.log(data);
    dispatch(signin(data))
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
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Wrap>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register('email')}
            error={touched.email && errors.email}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Wrap>
        <Wrap>
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Create a password"
            autoComplete="off"
            {...register('password')}
            error={touched.password && errors.password}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
          <button type="button" onClick={swapPassword}>
            {showPassword ? <Eye /> : <EyeSlash />}
          </button>
        </Wrap>

        <Button type="submit" disabled={!isValid}>
          Log In
        </Button>
      </Form>
    </>
  );
}

export default LogIn;
