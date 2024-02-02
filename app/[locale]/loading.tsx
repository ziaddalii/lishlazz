import CardsSection from "@/components/common/loading-skeleton/cards-section";
import { Skeleton, Container } from "@mui/material";

const Loading = () => {
    return (
        <Container maxWidth="xl">
            <Skeleton height={200} />
            <Skeleton width={100} />
            <CardsSection/>
            <CardsSection/>
            <CardsSection/>
            <CardsSection/>
            <Skeleton height={200} />
        </Container>
    );
};

export default Loading;
