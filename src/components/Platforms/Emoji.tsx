import meh from "../../assets/meh.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import bullsEye from "../../assets/bulls-eye.webp";

import {Image, ImageProps} from "@chakra-ui/react";

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
    const RatingIconsMap: {[key: number]: ImageProps} = {
        3: {src: meh, alt: "meh", boxSize: "25px"},
        4: {src: thumbsUp, alt: "thumbsUp", boxSize: "25px"},
        5: {src: bullsEye, alt: "bullsEye", boxSize: "35px"},
    };

    if (rating < 3) return null;

    return <Image {...RatingIconsMap[rating]} />;
};

export default Emoji;
