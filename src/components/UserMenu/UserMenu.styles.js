import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  top: 10px;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000480;
  border-radius: 10px;
  box-shadow: 0 20px 30px -10px #26394d;
  color: #93a71b;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  gap: 8px;
  padding: 5px 8px;
`;

export const LogoutButton = styled.button`
  border: 2px solid #d3746e;
  border-radius: 10px;
  box-shadow: 0 20px 30px -10px #26394d;
  padding: 5px 0;
  width: 60px;
  color: #fff;
  background-color: #1482e3;
  text-align: center;
`;
