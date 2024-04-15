import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCustomImage from "../services/image-url";

interface Prop {
  game: Game;
}
const GameCards = ({ game }: Prop) => {
  return (
    <Card width="300px">
      <Image src={getCustomImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
