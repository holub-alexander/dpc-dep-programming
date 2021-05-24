import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  background-color: var(
    ${({ primary }) => (primary ? '--accent' : '--light-xl')}
  );
  font-size: 15px;
  font-weight: 400;
  padding: 11px 36px;
  color: var(${({ primary }) => (primary ? '--light-xl' : '--dark-x')});
  border: 1px solid var(${({ primary }) => (primary ? '--accent' : '--border')});
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  transition: background-color 0.2s ease-in;
  user-select: none;

  :hover,
  :focus {
    background-color: ${({ primary }) => (primary ? '#00309f' : '#f0f4fe')};
  }
`;

export default Button;
