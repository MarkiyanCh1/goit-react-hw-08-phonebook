import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 444px;
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 25px;
  line-height: 1.334;
`;

export const FormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  margin-left: -16px;
`;

export const FormEl = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-top: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 7px;
`;

export const Input = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: currentcolor;
  border: 1px solid gray;
  border-radius: 10px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  padding: 16.5px 14px;
`;

export const InputText = styled.span`
  position: absolute;
  left: 15px;
  top: 20px;
  color: black;
  font-weight: 500;
  transform-origin: left top;
  transition: transform 0.9s ease;
  background-color: white;
  padding: 0;

  ${Input}:not(:placeholder-shown) + & {
    transform: translateY(-27px) scale(0.75);
    padding: 0 5px;
  }

  ${Input}:hover + &,
  ${Input}:focus + & {
    transform: translateY(-27px) scale(0.75);
    padding: 0 5px;
  }
`;


export const FormButton = styled.button`
  border-radius: 20px;
  margin: 24px 0px 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  padding: 6px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: white;
  background-color: rgb(25, 118, 210);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  width: 100%;

  &:hover {
    background-color: rgb(21, 101, 192);
  }
`;

export const TextLink = styled(NavLink)`
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(59 130 246);
`;
