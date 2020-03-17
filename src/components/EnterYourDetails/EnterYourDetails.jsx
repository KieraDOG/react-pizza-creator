import React from 'react';
import styled from 'styled-components';
import { isContact, isEmail, isIdentical, isNotEmpty, isPostcode } from '../../utils/validator/validator';
import Input from '../Input';
import Section from '../Section';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  width: calc(100%/3 - 20px);
  margin-bottom: 20px;
`;

class EnterYourDetails extends React.Component {
  render() {
    const { details, onDetailChange } = this.props;

    const formField = {
      name: { 
        required: true,
        label: "NAME",
        validations: [{
          validator: isNotEmpty,
          message: 'Name is required',
        }]
      },
      email: { 
        required: true,
        label: "EMAIL",
        validations: [{ 
          validator: isNotEmpty,
          message: 'Email is required',
        }, {
          validator: isEmail,
          message: 'Email is invalid',
        }]
      },
      confirmEmail: { 
        required: true,
        label: "CONFIRM EMAIL",
        validations: [{
          validator: isNotEmpty,
          message: 'Confirm email is required',
        }, {
          validator: (value) => isIdentical(value, details.email),
          message: 'Confirm email is not same as Email',
        }]
      },
      address: { 
        required: true,
        label: "ADDRESS",
        validations: [{
          validator: isNotEmpty,
          message: 'Address is required',
        }]
      },
      postcode: { 
        required: true,
        label: "POSTCODE",
        validations: [{
          validator: isNotEmpty,
          message: 'Postcode is required',
        }, {
          validator: isPostcode,
          message: 'Postcode is invalid',
        }]
      },
      contact: { 
        required: true,
        label: "CONTACT",
        validations: [{
          validator: isNotEmpty,
          message: 'Contact is required',
        }, {
          validator: isContact,
          message: 'Contact is invalid',
        }]
      },
    };

    return (
      <Section
        title="Enter your details"
      >
        <Layout>
          {Object.keys(formField).map((key) => {
            const item = formField[key];

            return (
              <Item key={key}>
                <Input 
                  required={item.required}
                  label={item.label} 
                  value={details[key] || ''}
                  onChange={(value) => onDetailChange(value, key)}
                  validations={item.validations}
                />
              </Item>
            );
          })}
        </Layout>
      </Section>
    );
  }
}

export default EnterYourDetails;