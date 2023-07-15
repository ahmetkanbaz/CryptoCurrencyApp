import styled from "styled-components";

export const AllCoinsListWrapper = styled.div`
  .tableAllCoins {
    tr {
      th,
      td {
        padding: 1.2rem 0.5rem;
      }
    }
    thead {
      tr {
        background-color: ${(props) =>
          props.theme == "light" ? "#333333" : "#F0F0F0"};
        color: ${(props) => (props.theme == "light" ? "#F9F9F9" : "#333333")};
        th {
          cursor: pointer;
          transition: all .3s ease-in-out;
          &:hover {
            color: #16d5ff;
          }
        }
      }
    }
    tbody {
      tr {
        background-color: ${(props) =>
          props.theme == "light" ? "#F9F9F9" : "#333333"};
        cursor: pointer;
        &:nth-child(2n-1) {
          background-color: ${(props) =>
            props.theme == "light" ? "#F0F0F0" : "#000000"};
        }
      }
    }
  }
`;
