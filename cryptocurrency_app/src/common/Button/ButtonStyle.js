import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderradius};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
