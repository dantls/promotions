import styled from 'styled-components';
import {Link} from 'react-router-dom/index'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #888888;
`;

export const Button = styled(Link)`

`;

export const Search = styled.input`
  display: flex;
  height: 2.7rem;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  padding: 0 0.6rem;
  font-size: 1rem;
`;
