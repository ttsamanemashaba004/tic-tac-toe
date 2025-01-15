import { Text } from "../../styles/General.styled";
import { AvatarWrapper, PlayerWrapper } from "./Player.styled";
import Avatar, { genConfig } from "react-nice-avatar";

const Player = ({ player, isPlayerActive }) => {
 
  return (
    <PlayerWrapper >
      <AvatarWrapper $isPlayerActive={isPlayerActive ?? false}>
        <Avatar  {...player.avatarConfig} />
      </AvatarWrapper>
      <Text>
        {player.name} ( {player.choice.toUpperCase()} )
      </Text>
      <Text>{player.score}</Text>
    </PlayerWrapper>
  );
};

export default Player;
