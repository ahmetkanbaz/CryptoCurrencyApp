import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  border-radius: 57px;
`;
