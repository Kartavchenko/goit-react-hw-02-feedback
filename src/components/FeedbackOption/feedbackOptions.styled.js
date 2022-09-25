import styled from '@emotion/styled';

export const Box = styled.li`
list-style: none;
display: inline;
margin-right: 10px;

&:last-child {
  margin-right: 0;
}
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 8px;
  cursor: pointer;

  &:active {
    background-color: aqua;
  }
`;
