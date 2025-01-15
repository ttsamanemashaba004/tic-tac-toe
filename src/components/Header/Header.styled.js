import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;

  height: 10vh;

  padding: 2rem;

  .logo {
    height: 5rem;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;

    ${(props) => props.theme.media.mobile} {
      width: 4rem;
  }
  }

  ${(props) => props.theme.media.mobile} {
      align-items: center;
  }

  
  
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;

  
  
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

export { HeaderWrapper };
