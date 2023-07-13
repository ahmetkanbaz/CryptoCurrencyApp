import styled from 'styled-components'

export const BackgroundStyle = styled.div `
  background-color: ${(props) => props.theme == 'light' ? '#EAF5FB' : '#000000'};
  transition: all .3s ease-in-out;
`;