import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;

  label {
    width: 100%;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #cfd9e3;
    color: #3c4144;

    &:hover {
      border-color: #40a9ff;
    }
    &:focus {
      border-color: #40a9ff;
      border-right-width: 1px !important;
      outline: 0;
    }
  }
  p {
    padding-bottom: 20px;
    margin: 0px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #3c4144;
  }
`;

export const Submit = styled.input`
  margin-top: 20px;
  background-color: ${({ isValid }) => (isValid ? '#088eb1' : '#088eb161')};
  color: #ffff !important;
  font-size: 24px;
  letter-spacing: 1px;
  &:hover {
    cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};
    background-color: ${({ isValid }) => (isValid ? '#00a7d2' : '#088eb161')};
  }
`;

export const FormContainer = styled.div`
  max-width: 1000px;
  flex: 1;
  margin: 20px;
  padding: 2rem;
  background-color: #fafafa;
  box-shadow: 4px 3px 40px -10px rgba(77, 62, 77, 1);
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  justify-content: center;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #088eb1;
`;

export const DropDown = styled.div`
  width: 100%;
`;
