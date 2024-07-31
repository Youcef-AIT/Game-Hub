import Noimage from "../assets/no-image-placeholder-6f3882e0.webp";

export const getCropedUrl = (url: string) => {
    if (url === null) return Noimage;

    const index = url.indexOf("media/") + "media/".length;

    return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
};

getCropedUrl("https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg");
