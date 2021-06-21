import styled from "styled-components";
import Button from "../../UI/Button";

export const Wrapper = styled.div`
  position: relative;
  padding: 40px 20px 30px;
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

export const DeleteButton = styled(Button)`
  position: absolute;
  top: 30px;
  right: 30px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  width: 20px;
  height: 20px;
  &::after,
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    content: "";
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    transform-origin: center;
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
