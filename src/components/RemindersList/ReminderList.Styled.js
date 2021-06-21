import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 20px;
`;
export const EmptyArrayInfo = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  h3 {
    text-align: center;
  }
`;
