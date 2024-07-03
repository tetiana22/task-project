import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUser } from '../../redux/authorization/authReducer';
import userLight from '../../assets/fonts/images/userLogo/userLight.jpg';
import userDark from '../../assets/fonts/images/userLogo/userDark.jpg';
import { updateUserSchema } from 'validation/schema';
import {
  Wrapper,
  UserButton,
  Icon,
  HiddenInput,
  Avatar,
  Form,
  Button,
  Input,
  Error,
  Wrap,
} from './EditProfile.styled.component';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import { Container } from 'pages/Auth/RegistrationPg/RegistrationPg.styled';
import { Eye } from 'assets/fonts/images/icons/Eye';
import { EyeSlash } from 'assets/fonts/images/icons/EyeCrossed';
import { useState } from 'react';

const EditProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.userData);
  const avatarURL = userData?.avatarURL;
  const theme = userData?.theme;
  const [showPassword, setShowPassword] = useState(false);
  const [localAvatarUrl, setlocalAvatarUrl] = useState(avatarURL);
  const [avatarFile, setavatarFile] = useState(null);
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
      name: userData?.name || '',
      email: userData?.email || '',
      password: '',
      avatarURL: localAvatarUrl,
    },
    resolver: yupResolver(updateUserSchema),
  });
  const handleChange = e => {
    setlocalAvatarUrl(URL.createObjectURL(e.currentTarget.files[0]));
    setavatarFile(e.currentTarget.files[0]);
  };
  // const handleChange = event => {
  //   const file = event.target.files[0];
  //   if (!file) return;
  //   if (file.size > 5 * 1024 * 1024) {
  //     toast.error('The file size must not exceed 5 MB');
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setlocalAvatarUrl(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const onSubmit = data => {
  //   data.avatarURL = localAvatarUrl;

  //   console.log('Selected avatar URL:', localAvatarUrl);
  //   console.log('Form data before dispatch:', data);

  //   dispatch(updateUser(data));

  //   reset();
  //   onClose();
  // };
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    if (avatarFile) {
      formData.append('avatarURL', avatarFile);
    }

    dispatch(updateUser(formData));

    reset();
    onClose();
  };

  return (
    <Container>
      <Wrapper>
        <Avatar
          src={
            localAvatarUrl ||
            avatarURL ||
            (theme === 'dark' ? userLight : userDark)
          }
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
            id="avatarURL"
            name="avatarURL"
            type="file"
            accept="image/*"
            onChange={handleChange}
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
