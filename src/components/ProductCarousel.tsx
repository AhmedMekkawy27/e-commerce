// ProductCarousel.tsx
import { Box, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

function SampleNextArrow(props: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Next"
      icon={<ArrowForwardIcon boxSize={6} />}
      boxSize={"50px"}
      onClick={onClick}
      position="absolute"
      right={{
        "2xl": "170px",
        xl: "120px",
        lg: "80px",
        md: "40px",
        base: "30%",
      }}
      top="-20%"
      zIndex="1"
      background="#f5f5f5"
      color="black"
      rounded={"full"}
      _before={{ display: "none" }}
      _focus={{ backgroundColor: "#f5f5f5", color: "black" }}
      _hover={{ backgroundColor: "#e4e2e2", color: "black" }}
      {...props}
    />
  );
}
function SamplePreviousArrow(props: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Prev"
      icon={<ArrowBackIcon boxSize={6} />}
      boxSize={"50px"}
      onClick={onClick}
      position="absolute"
      left={{ base: "30%", md: "80%" }}
      top="-20%"
      zIndex="1"
      background="#f5f5f5"
      color="black"
      rounded={"full"}
      _before={{ display: "none" }}
      _focus={{ backgroundColor: "#f5f5f5", color: "black" }}
      _hover={{ backgroundColor: "#e4e2e2", color: "black" }}
      {...props}
    />
  );
}

const ProductCarousel = ({
  children,
  slidesToShow,
}: {
  children: React.ReactNode;
  slidesToShow: number;
}) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviousArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box py={2} mx="auto">
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};

export default ProductCarousel;
