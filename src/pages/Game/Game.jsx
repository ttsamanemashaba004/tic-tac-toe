import { Container } from "../Home/Home.styled";
import { GameBoardStyle } from "./Game.styled";
import GameCell from "../../components/Header/GameCell/GameCell";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";


const Game = () => {
  const { game } = useContext(GameContext)
  return (
    <Container>
      <GameBoardStyle>
        {game.board.map((item, index) =>(
          <GameCell key={index} cellItem={item} index={index}/>
        ))}
      </GameBoardStyle>
    </Container>
  );
};

export default Game;
