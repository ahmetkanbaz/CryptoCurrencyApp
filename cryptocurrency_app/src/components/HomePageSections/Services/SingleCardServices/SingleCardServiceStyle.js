import styled from "styled-components";

export const SingleService = styled.div`
  .singleServiceCard {
    background-color: ${(props) => props.theme == 'light' ? '#FFFFFF' : '#333333'};
    .servicesAbsolute {
      background-color: ${(props) =>
        props.theme == "light" ? "#EAF5FB" : "#000000"};
      width: 180px;
      height: 180px;
      top: -100px;
      right: -100px;
      transform: rotate(45deg);
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      .servicesAbsolute {
        opacity: 0;
      }
    }
  }
`;
