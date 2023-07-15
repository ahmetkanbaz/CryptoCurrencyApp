import styled from 'styled-components'

export const DetailCoinWrapper = styled.div `
  .rank {
    background-color: ${(props) => props.theme == 'light' ? '#B2B2B2' : '#000000'};
    transition: all .3s ease-in-out;
  }
`;