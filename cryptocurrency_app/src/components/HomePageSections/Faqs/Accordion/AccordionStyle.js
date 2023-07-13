import styled from "styled-components";

export const AccordionWrapper = styled.div`
  .accordion-button {
    background-color: ${(props) => props.theme == 'light' ? '#f2f8fe' : '#000000'};
    color: ${(props) => props.theme == 'light' ? '#000000' : '#FFFFFF'};
    &:not(.collapsed) {
      background-color: ${(props) => props.theme == 'light' ? '#92AEC9' : '#000000'};
      box-shadow: none;
    }
  }
  .accordion-body {
    background-color: ${(props) => props.theme == 'light' ? '#FFFFFF' : '#333333'};
    color: ${(props) => props.theme == 'light' ? '#000000' : '#FFFFFF'}
  }
`;
