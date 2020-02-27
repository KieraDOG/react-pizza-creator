import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Input from '../Input';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  width: calc(100%/3 - 20px);
  margin-bottom: 20px;
`;

const EnterYourDetails = () => (
  <Section
    title="Enter your details"
  >
    <Layout>
      <Item>
        <Input required label="NAME" />
      </Item>
      <Item>
        <Input required label="EMAIL" />
      </Item>
      <Item>
        <Input required label="CONFIRM EMAIL" />
      </Item>
      <Item>
        <Input required label="ADDRESS" />
      </Item>
      <Item>
        <Input required label="POSTCODE" />
      </Item>
      <Item>
        <Input required label="CONTACT" />
      </Item>
    </Layout>
  </Section>
);

export default EnterYourDetails;