import React from 'react';
import styled from 'styled-components';
import { isContact, isEmail, isIdentical, isNotEmpty, isPostcode } from '../../utils/validator/validator';
import Input from '../Input';
import Section from '../Section';
import { VALIDATION } from '../../utils/validator/validateDetails/validateDetails';

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
    const { details, onDetailChange, formDirty } = this.props;

    const formField = {
      name: { 
        required: true,
        label: "NAME",
        validations: VALIDATION.name,
      },
      email: { 
        required: true,
        label: "EMAIL",
        validations: VALIDATION.email,
      },
      confirmEmail: { 
        required: true,
        label: "CONFIRM EMAIL",
        validations: VALIDATION.confirmEmail(details.email),
      },
      address: { 
        required: true,
        label: "ADDRESS",
        validations: VALIDATION.address,
      },
      postcode: { 
        required: true,
        label: "POSTCODE",
        validations: VALIDATION.postcode,
      },
      contact: { 
        required: true,
        label: "CONTACT",
        validations: VALIDATION.contact,
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
                  formDirty={formDirty}
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