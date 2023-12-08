import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background-color: beige;
  height: 89vh;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const MainText = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

export const TextLink = styled(NavLink)`
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(59 130 246);
`;
