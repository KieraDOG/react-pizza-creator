import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: rgba(0,0,0,0.6);
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 18px;
  padding: 10px 15px;
  outline: none;
  color: rgba(0,0,0,0.8);
  width: 100%;
`;

const Required = styled.span`
  color: #E01D3B;
  font-weight: 700;
  display: inline-block;
  margin-left: 0.25rem;
`;

const Input = ({
  label,
  required
}) => (
  <Layout>
    <Label>
      {label}
      {required && (<Required>*</Required>)}
    </Label>
    <StyledInput />
  </Layout>
);

Input.defaultProps = {
  required: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Input;