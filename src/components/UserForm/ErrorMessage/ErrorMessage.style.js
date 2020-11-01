import styled from 'styled-components';

export const Warning = styled.div`
  display: flex;
  align-items: center;
  color: #f41414;
  font-size: 11px;
  font-weight: 400;
  margin-right: auto;
  padding-top: 5px;
  padding-left: 5px;

  span {
    margin: 0px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #f41414;
  }
`;

export const Alert = styled.svg`
  width: 23px;
  height: 15px;
  padding-right: 5px;
`;
