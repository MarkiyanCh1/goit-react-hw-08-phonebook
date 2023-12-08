import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { operationUserLogin } from 'redux/auth/operations';
import {
  Container,
  Title,
  FormContainer,
  FormEl,
  InputContainer,
  Input,
  InputText,
  FormButton,
  TextLink,
} from 'pages/RegisterPage/RegisterPage.styles';
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(operationUserLogin(data))
      .unwrap()
      .then(() => {
        toast.success('Hi! Login was successfully fetched!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });

    reset();
  };

  return (
    <Container>
      <Title>Login to personal account</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormEl>
            <label>
              <InputContainer>
                <Input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder=""
                />
                <InputText>Email*</InputText>
                {errors.email && (
                  <span style={{ color: 'red' }}>This field is required</span>
                )}
              </InputContainer>
            </label>
          </FormEl>
          <FormEl>
            <label>
              <InputContainer>
                <Input
                  {...register('password', { required: true, minLength: 7 })}
                  type="password"
                  placeholder=""
                />
                <InputText>Password*</InputText>
                {errors.password && (
                  <span style={{ color: 'red' }}>This field is required</span>
                )}
              </InputContainer>
            </label>
          </FormEl>
        </FormContainer>
        <FormButton type="submit">Sign In</FormButton>
        <TextLink to={'/register'}>Don't have an account? Sign Up</TextLink>
      </form>
    </Container>
  );
};

export default LoginPage;
