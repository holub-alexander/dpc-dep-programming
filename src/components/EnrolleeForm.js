import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import { isValideForm, isValideName } from '../utils/validate';
import InputMask from 'react-input-mask';

const EnrolleeForm = () => {
  const [clientName, setClientName] = React.useState('');
  const [clientEmail, setClientEmail] = React.useState('');
  const [clientPhone, setClientPhone] = React.useState('');
  const [errors, setErrors] = React.useState([]);
  const [isFormError, setFormError] = React.useState(false);
  const [isSubmit, setSubmitForm] = React.useState(false);
  const message = React.useRef();
  const [state, handleSubmit] = useForm('xzbyrvzb');

  const changeInput = event => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'client-name' && isValideName(value)) {
      setClientName(value);
    }

    if (name === 'client-email') {
      setClientEmail(value);
    }

    if (name === 'client-phone') {
      setClientPhone(value);
    }
  };

  const formSubmit = event => {
    const formData = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
    };
    const validateForm = isValideForm(formData);

    if (validateForm.isError) {
      setErrors(validateForm.messages);
      setFormError(true);
    } else {
      handleSubmit(formData);
      setFormError(false);
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setSubmitForm(true);

      const time = setTimeout(() => {
        message.current.classList.remove('active');
        setSubmitForm(false);
        clearTimeout(time);
      }, 4000);
    }

    event.preventDefault();
  };

  return (
    <EnrolleeFormBox>
      <Title>Станьте нашим студентом</Title>
      <Descr>отправьте сообщение и мы вам перезвоним или напишем</Descr>

      <DispatchMessage ref={message}>
        <p>Сообщение отправлено. Спасибо за заявку!</p>
      </DispatchMessage>

      {isSubmit ? message.current.classList.add('active') : null}

      <Form onSubmit={formSubmit}>
        {isFormError ? (
          <InputError field='client-name' errors={errors} />
        ) : null}
        <FormInput
          type='text'
          placeholder='Ваше имя'
          name='client-name'
          onChange={changeInput}
          value={clientName}
          required={true}
        />

        {isFormError ? (
          <InputError field='client-email' errors={errors} />
        ) : null}
        <FormInput
          type='email'
          placeholder='Ваш email'
          name='client-email'
          onChange={changeInput}
          value={clientEmail}
          required={true}
        />

        {isFormError ? (
          <InputError field='client-phone' errors={errors} />
        ) : null}
        <InputMask
          mask='+38\0 99 999 99 99'
          maskChar='_'
          value={clientPhone}
          onChange={changeInput}
        >
          {inputProps => (
            <FormInput
              {...inputProps}
              type='phone'
              placeholder='Ваш телефон'
              name='client-phone'
              required={true}
            />
          )}
        </InputMask>

        <FormButton type='submit' disabled={state.submitting}>
          Отправить
        </FormButton>
      </Form>
    </EnrolleeFormBox>
  );
};

const EnrolleeFormBox = styled.div`
  position: relative;
`;

const Title = styled.p`
  margin: 0 0 7px;
  font-size: 21px;
  font-weight: 500;

  @media screen and (max-width: 1180px) {
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

const Descr = styled.p`
  margin: 0 0 25px;
  font-size: 15px;
  color: #424242;

  @media screen and (max-width: 1180px) {
    font-size: 14px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  height: 42px;
  font-size: 16px;
  padding: 0 15px;
  border: 1px solid #b9b5b5;
  margin-bottom: 15px;
  border-radius: 4px;
  appearance: none;

  ::placeholder {
    font-size: 14px;
    font-weight: 300;
    user-select: none;
  }
`;

const FormButton = styled.button`
  display: inline-block;
  background-color: var(--accent);
  height: 42px;
  border: none;
  cursor: pointer;
  color: var(--light-xl);
  font-size: 15px;
  transition: background-color 0.2s ease-in;
  border-radius: 5px;
  align-self: start;
  padding: 8px 20px;
  user-select: none;

  :hover,
  :focus {
    background-color: #00309f;
  }
`;

const InputError = styled(ValidationError)`
  color: var(--warning);
  font-size: 12px;
  margin-bottom: 3px;
`;

const DispatchMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(216, 215, 215, 0.4);
  transition: opacity 0.2s ease-in;
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    max-width: 300px;
    text-align: center;
    color: var(--accent);
    line-height: 1.6;
  }
`;

export default EnrolleeForm;
