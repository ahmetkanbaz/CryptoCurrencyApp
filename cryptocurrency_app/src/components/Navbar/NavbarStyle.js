import styled from 'styled-components'

export const NavbarStyle = styled.nav `
  background-color: ${(props) => props.theme == 'light' ? '#E5E5E5' : '#333333'};
  .nav-link {
    color: ${(props) => props.theme == 'light' ? '#000000': '#FFFFFF'};
  }
`;