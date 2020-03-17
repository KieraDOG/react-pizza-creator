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
  constructor(props) {
    super(props);

    this.state = {};

    this.formField = {
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
          validator: (value) => isIdentical(value, this.state.email),
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
  } 
  
  handleValueChange(value, key) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <Section
        title="Enter your details"
      >
        <Layout>
          {Object.keys(this.formField).map((key) => {
            const formField = this.formField[key];

            return (
              <Item key={key}>
                <Input 
                  required={formField.required}
                  label={formField.label} 
                  value={this.state[key] || ''}
                  onChange={(value) => this.handleValueChange(value, key)}
                  validations={formField.validations}
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