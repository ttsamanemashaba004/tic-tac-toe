import React, { useContext } from "react";
import { Subtitle, Title } from "../../../styles/General.styled";
import { ModalBody, ModalFooter, ModalHeader } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SfxContext } from "../../../contexts/SfxContex";

const RoundOverModal = () => {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const { hoverSfx } = useContext(SfxContext);
  return (
    <>
      <ModalHeader>
        <Title $primary={true}>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round`
            : "Round drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle $primary={true}>Choices will be switched now.</Subtitle>
        <Subtitle $primary={true}>
          {game.player1.name} : {game.player1.score}
        </Subtitle>
        <Subtitle $primary={true}>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button color="#8437f9" onMouseEnter={() => hoverSfx()}>
          Restart
        </Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
