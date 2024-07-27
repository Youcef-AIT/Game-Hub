export const getCropedUrl = (url: string) => {
    const index = url.indexOf("media/") + "media/".length;

    return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
};

getCropedUrl("https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg");
