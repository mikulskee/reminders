import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;
