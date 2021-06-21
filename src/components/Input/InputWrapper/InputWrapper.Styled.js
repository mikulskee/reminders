import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 15px 0 15px;
  position: relative;
  width: 100%;

  input,
  select,
  textarea {
    padding: 5px 10px;
  }

  label {
    position: absolute;
    top: -20px;
  }
  fieldset {
    border: none;
  }
  textarea,
  select {
    width: 100%;
  }
  fieldset {
    label {
      position: static;
    }
  }
`;
