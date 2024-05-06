import meh from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import bullseye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;
  const EmojiMaps: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image marginTop={1} {...EmojiMaps[rating]} />;
};

export default Emojis;
