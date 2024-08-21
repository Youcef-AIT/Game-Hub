import {dataShape} from "../services/api-client";

import {GameTrailerType} from "../interfaces/GameTrailerType";

interface Props {
    gameTrailer: dataShape<GameTrailerType>;
}

const GameTrailer = ({gameTrailer}: Props) => {
    const randomNumber = Math.floor(Math.random() * gameTrailer?.results.length!);
    const trailer = gameTrailer?.results[randomNumber];

    return <video poster={trailer?.preview} src={trailer?.data.max} controls />;
};

export default GameTrailer;
