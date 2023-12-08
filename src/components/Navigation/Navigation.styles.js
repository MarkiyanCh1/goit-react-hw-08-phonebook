import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 20px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: white;
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const LinkLayout = styled(NavLink)`
  border: 2px solid #d3746e;
  border-radius: 10px;
  box-shadow: 0 20px 30px -10px #26394d;
  padding: 10px 5px;
  width: 80px;
  color: #fff;
  background-color: #1482e3;
  text-align: center;
  &.active {
    color: #e7e24f;
  }
`;
