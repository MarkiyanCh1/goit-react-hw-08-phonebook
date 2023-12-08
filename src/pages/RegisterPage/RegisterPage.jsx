import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { operationUserRegiser } from 'redux/auth/operations';
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
} from './RegisterPage.styles';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(operationUserRegiser(data))
      .unwrap()
      .then(() => {
        toast.success('Hi! Register was successfully fetched!', {
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
      <Title>New user registration</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormEl>
            <label>
              <InputContainer>
                <Input
                  {...register('name', { required: true })}
                  type="text"
                  placeholder=""
                />
                <InputText>Name*</InputText>
                {errors.name && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </InputContainer>
            </label>
          </FormEl>
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
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </InputContainer>
            </label>
          </FormEl>
          <FormEl>
            <label>
              <InputContainer>
                <Input
                  {...register('password', { required: true, minLength: 8 })}
                  type="password"
                  placeholder=""
                />
                <InputText>Password*</InputText>
                {errors.password && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </InputContainer>
            </label>
          </FormEl>
        </FormContainer>

        <FormButton type="submit">Sign Up</FormButton>
        <TextLink to={'/login'}>Already have an account? Sign in</TextLink>
      </form>
    </Container>
  );
};

export default RegisterPage;
