import React from 'react';
import styled from 'styled-components';

const EnrolleeForm = () => {
  const [clientName, setClientName] = React.useState('');
  const [clientEmail, setClientEmail] = React.useState('');
  const [clientPhone, setClientPhone] = React.useState('');

  const changeInput = event => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'clientName') {
      setClientName(value);
    }

    if (name === 'clientEmail') {
      setClientEmail(value);
    }

    if (name === 'clientPhone') {
      setClientPhone(value);
    }
  };

  return (
    <EnrolleeFormBox>
      <Title>Станьте нашим студентом</Title>
      <Descr>отправьте сообщение и мы вам перезвоним или напишем</Descr>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <FormInput
          type='text'
          placeholder='Ваше имя'
          value={clientName}
          onChange={changeInput}
          name='clientName'
        />
        <FormInput
          type='email'
          placeholder='Ваш email'
          value={clientEmail}
          onChange={changeInput}
          name='clientEmail'
        />
        <FormInput
          type='phone'
          placeholder='Ваш телефон'
          value={clientPhone}
          onChange={changeInput}
          name='clientPhone'
        />
        <FormButton type='submit'>Отправить</FormButton>
      </form>
    </EnrolleeFormBox>
  );
};

const EnrolleeFormBox = styled.div``;

const Title = styled.p`
  margin: 0 0 7px;
  font-size: 21px;
  font-weight: 500;
`;

const Descr = styled.p`
  margin: 0 0 25px;
  font-size: 15px;
  color: #424242;
`;

const FormInput = styled.input`
  height: 42px;
  font-size: 14px;
  padding: 0 15px;
  border: 1px solid #b9b5b5;
  margin-bottom: 15px;
  border-radius: 4px;
  font-size: 14px;

  ::placeholder {
    font-size: 14px;
    font-weight: 300;
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

  :hover,
  :focus {
    background-color: #00309f;
  }
`;

export default EnrolleeForm;
