import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  background-color: var(--accent);
  font-size: 16px;
  font-weight: 500;
  padding: 11px 36px;
  color: var(--light-xl);
  border-radius: 5px;
  transition: background-color 0.2s ease-in;
  user-select: none;

  :hover,
  :focus {
    background-color: #00309f;
  }
`;

export default Button;
