import { needHelpSchema } from 'validation/schema';
import { Form, Button, Input, Error, TextInput } from './NeedHelp.styled';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelp } from '../../redux/authorization/authReducer';

const NeedHelp = ({ onClose }) => {
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
      comment: '',
    },
    resolver: yupResolver(needHelpSchema),
  });

  const onSubmit = formData => {
    console.log(formData);
    if (!formData.comment) {
      toast.error('Sorry, but you need to describe your problem!');
      return;
    }

    dispatch(needHelp(formData));
    reset();
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        id="email"
        placeholder="email"
        {...register('email')}
        error={touched.email && errors.email.message}
      />
      {errors.email && <Error>{errors.email.message}</Error>}

      <TextInput
        type="text"
        id="comment"
        placeholder="Comment"
        {...register('comment', { required: true })}
        error={touched.comment && errors.comment.message}
      />
      {errors.comment && <Error>{errors.comment.message}</Error>}

      <Button type="submit">Send</Button>
    </Form>
  );
};
export default NeedHelp;
