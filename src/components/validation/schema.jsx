import * as yup from 'yup';
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const logInSchema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters')
    .required('Name is required'),
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export const needHelpSchema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  message: yup.string().min(7).max(230).required('Comment is required'),
});

export const editColumnSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Title must be at least 3 characters long')
    .required('Title is required'),
});
