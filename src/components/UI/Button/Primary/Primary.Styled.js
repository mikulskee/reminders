import styled from "styled-components";

export const Wrapper = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;
