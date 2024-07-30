import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkiletonCard = () => {
    return (
        <Card>
            <Skeleton height={"200px"} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
};

export default SkiletonCard;
