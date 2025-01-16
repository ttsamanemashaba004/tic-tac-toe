import { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { SfxContext } from "../../contexts/SfxContex";
import IconX from "../../assets/svg/icon-x-filled.svg?react";
import IconO from "../../assets/svg/icon-o-filled.svg?react";
import XIconOutline from "../../assets/svg/icon-x-outlined.svg?react";
import OIconOutline from "../../assets/svg/icon-o-outlined.svg?react";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const { hoverSfx, clickSfx, winnerSfx, completedSfx } =
    useContext(SfxContext);

  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winnerSfx();
      } else {
        completedSfx();
      }
      handleModal(<RoundOverModal />);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem media" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <XIconOutline className="outlineIcone" />
      ) : (
        <OIconOutline className="OoutlineIcone" />
      )}
    </CellStyle>
  );
};

export default GameCell;
