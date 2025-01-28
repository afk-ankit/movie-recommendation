import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const HorizontalContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel
      className="mx-8"
      opts={{
        slidesToScroll: 5,
      }}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HorizontalContainer;
