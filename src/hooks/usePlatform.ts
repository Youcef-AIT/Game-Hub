import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
    const { data: platforms } = usePlatforms();

    const selectedPlatform = platforms?.results.find((Platform) => Platform.id === platformId);
    return selectedPlatform ? selectedPlatform.name : "";
};

export default usePlatform;
