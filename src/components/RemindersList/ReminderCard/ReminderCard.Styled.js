import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin-bottom: 20px;
`;
export const DateField = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  span {
    margin-left: 20px;
    font-size: 16px;
  }
`;
export const Tag = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  text-transform: capitalize;
  margin-bottom: 20px;
`;
export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 20px;
`;
