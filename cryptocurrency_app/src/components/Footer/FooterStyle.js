import styled from 'styled-components'

export const FooterWrapper = styled.div `
  .socialIcon {
    color: #16D5FF;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: #16D5FF;
      color: #FFFFFF;
    }
  }
  .footerLinkSpan {
    transition: all .3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: #16D5FF;
      letter-spacing: 1px;
    }
  }
`;