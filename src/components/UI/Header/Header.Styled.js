import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;

  h1 {
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: 18px;
  }
`;
