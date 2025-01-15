import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import Logo from "../../assets/svg/tic-tac-toe.svg?react";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContex";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate()
  const {hoverSfx} = useContext(SfxContext)
  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")} onMouseEnter={()=> hoverSfx()}/>
      <span onClick={toggleTheme} onMouseEnter={()=> hoverSfx()}>{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon  />}</span>
    </HeaderWrapper>
  );
};

export default Header;
