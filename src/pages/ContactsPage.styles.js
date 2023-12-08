import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  padding: 30px;
`;

export const FormContainer = styled.div`
  flex: 1;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  box-shadow: rgb(241 55 55 / 40%) 0px 0px 17px 9px;
`;

export const ListContainer = styled.div`
  flex: 1;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(241 55 55 / 40%) 0px 0px 17px 9px;
`;

export const PageTitle = styled.h1`
  font-weight: 500;
  text-align: center;
  font-size: 45px;
  line-height: 1.334;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 25px;
  line-height: 1.334;
  padding-top: 15px;
`;
