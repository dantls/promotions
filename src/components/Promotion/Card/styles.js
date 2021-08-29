import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.1);

  display: flex;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem;

`;

export const CardImage = styled.img`
  max-width: 6.25rem;
  color: #2c3e50;
  margin-right: 1.5rem;
`;

export const CardTitle = styled.h1`
  font-size: 1rem;
`;

export const CardPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #3498D8;
  margin-top: 1rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
`;
export const CardInfo = styled.div``;
export const CardDescription = styled.h1``;

export const CardCommentsCount = styled.span`
  margin-left: auto;
  margin-right: 1.5rem;
  color: #3498D8;
`;
export const CardLink = styled.a`
 border: 1px solid #3498D8;
 border-radius: 4px;
 color: #3498D8;
 text-decoration: none;
 padding: 8px 10px;
`;
