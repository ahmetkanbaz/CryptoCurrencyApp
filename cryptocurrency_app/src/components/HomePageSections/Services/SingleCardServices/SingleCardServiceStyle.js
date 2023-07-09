import styled from 'styled-components'

export const SingleService = styled.div `
  .servicesAbsolute {
    background: #EAF5FB;
    width: 180px;
    height: 180px;
    top: -100px;
    right: -100px;
    transform: rotate(45deg);
    opacity: 1;
    transition: all .5s ease-in-out;
  }
  &:hover {
    .servicesAbsolute {
      opacity: 0;
    }
  }
`;