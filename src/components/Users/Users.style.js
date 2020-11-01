import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 1500px;
  overflow-x: auto;
  height: 700px;
  background-color: #fafafa;
  box-shadow: 4px 3px 40px -10px rgba(77, 62, 77, 1);
  margin: 20px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px;
`;

export const DeleteButton = styled.div`
  position: absolute;
  bottom: 70px;
  left: 335px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
