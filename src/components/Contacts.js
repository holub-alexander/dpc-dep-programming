import React from 'react';
import styled from 'styled-components';
import ContactsList from './ContactsList';
import EnrolleeForm from './EnrolleeForm';

const Contacts = () => {
  return (
    <ContactsBox>
      <h2 className='hidden'>
        Донецкий политехнический колледж, отделение программирования: контакты
      </h2>
      <Container>
        <Title>Контакты</Title>
        <ContactsWrapper>
          <EnrolleeForm />
          <div>
            <ContactsList />
          </div>
        </ContactsWrapper>
      </Container>
    </ContactsBox>
  );
};

const ContactsBox = styled.section`
  margin-bottom: 35px;
  color: var(--dark-xl);
  background-color: var(--bg-light);
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 55px;
  text-align: center;

  @media screen and (max-width: 1180px) {
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 23px;
    margin-bottom: 25px;
  }
`;

const ContactsWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(290px, 480px) minmax(290px, 394px);
  gap: 45px;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(290px, 420px);
    justify-content: center;
  }
`;

export default Contacts;
