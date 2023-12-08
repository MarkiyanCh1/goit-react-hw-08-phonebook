import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  justify-content: space-between;
`;

export const ButtonClose = styled.button`
  width: 100px;
  padding: 8px 16px;
  border-radius: 70px;
  color: #fff;
  background-color: #0b7373;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all 0.3s;
  &:hover {
    color: #459e9e;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 485px;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

export const Phone = styled.p`
  font-size: 20px;
  letter-spacing: -0.3px;
`;
