import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) =>
    props.isWinningCell
      ? props.theme.colors.yellow
      : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  font-size: 3rem;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  width: 10rem;
  height: 10rem;
  cursor: pointer;

  padding: 2rem;

  .markedItem {
    path {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
    
  }

  .OoutlineIcone {
    circle {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }

  &:hover {
    .OoutlineIcone {
      circle {
        stroke-width: 2;
      }
    }
  }

  &:hover {
    .outlineIcone {
      path {
        stroke: ${(props) => props.theme.colors.primary};
        stroke-width: 3px;
      }
    }
  }

  ${(props) => props.theme.media.mobile} {
    padding: 5px;

    .media svg {
      height: 50;
      width: 50;
    }
  }
`;
