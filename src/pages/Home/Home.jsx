import { Container } from "./Home.styled";
import { Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SfxContext } from "../../contexts/SfxContex";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);

  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
