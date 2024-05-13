import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'; // Import useForm
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import { updateUser } from '../../redux/authorization/authReducer'; // Import updateUser action
import userLight from '../../assets/fonts/images/userLogo/userLight.jpg';
import userDark from '../../assets/fonts/images/userLogo/userDark.jpg';
import { registrationSchema } from 'components/validation/schema';
import {
  Wrapper,
  UserButton,
  Icon,
  HiddenInput,
  Avatar,
} from './EditProfile.styled.component';
import {
  Form,
  Button,
  Input,
  Error,
  Wrap,
} from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import { toast } from 'react-toastify';
import { Container } from 'components/Auth/RegistrationPg/RegistrationPg.styled';
import { Eye } from 'assets/fonts/images/icons/Eye';
import { EyeSlash } from 'assets/fonts/images/icons/EyeCrossed';
const EditProfile = () => {
  const dispatch = useDispatch();
  const avatarURL = useSelector(state => state.auth.avatarURL);
  const theme = useSelector(state => state.auth.theme);
  const [selectedAvatar, setSelectedAvatar] = useState(avatarURL);
  const [showPassword, setShowPassword] = useState(false);
  const swapPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, touched = {} },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      avatarURL: '',
    },
    resolver: yupResolver(registrationSchema),
  });
  const handleFileSelect = event => {
    const file = event.target.files[0];
    if (!file) {
      return; // Перевірити, чи файл існує
    }
    if (file.size > 50 * 1024) {
      toast.error('The file size must not exceed 50 KB');
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = data => {
    // Додати avatarURL до об'єкту data
    data.avatarURL = selectedAvatar;
    dispatch(updateUser(data));
    console.log(data);
    reset();
  };
  return (
    <Container>
      <Wrapper>
        <Avatar
          src={selectedAvatar || (theme === 'dark' ? userLight : userDark)}
          alt="Avatar"
        />
        <UserButton
          onClick={() => document.querySelector('.input-field').click()}
        >
          <Icon>
            <use href={sprite + '#icon-plus'} />
          </Icon>
          <HiddenInput
            className="input-field"
            type="file"
            accept="image/*"
            name="imageURL"
            onChange={handleFileSelect}
          />
        </UserButton>
      </Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Wrap>
          <Input
            type="text"
            placeholder="Enter your name"
            id="name"
            {...register('name')}
            error={touched.name && errors.name?.message}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Wrap>
        <Wrap>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register('email')}
            error={touched.email && errors.email?.message}
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
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};
export default EditProfile;
