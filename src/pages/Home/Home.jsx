import { Container } from "./Home.styled";
import { Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Header/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
