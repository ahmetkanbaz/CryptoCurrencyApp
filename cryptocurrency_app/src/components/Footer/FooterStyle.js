import styled from "styled-components";

export const FooterWrapper = styled.div`
  .footerInput::placeholder {
    color: ${(props) => (props.theme == "light" ? "#000000" : "#FFFFFF")};
  }

  .footerInput {
    color: ${(props) => props.theme == 'light' ? '#000000' : '#FFFFFF'};
  }
  .socialIcon {
    color: #16d5ff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #16d5ff;
      color: #ffffff;
    }
  }
  .footerLinkSpan {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: #16d5ff;
      letter-spacing: 1px;
    }
  }
  .footerBottom {
    a {
      color: ${(props) => props.theme == 'light' ? '#000000' : '#FFFFFF'};
    }
  }
`;
