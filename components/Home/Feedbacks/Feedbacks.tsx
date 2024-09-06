"use client";

import StarRating from "@/components/Global/Ui/StarRating";
import { axiosInstance } from "@/util/axiosConfig";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FeedbacksType } from "./types";

// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("gray.100", "gray.800")}
      boxShadow={"lg"}
          p={8}
          m={3}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title?: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Feedbacks() {
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<FeedbacksType>();
  const slider = useRef<any>();

  const getOrderDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/feedback/get");
      setLoading(false);
      setFeedbacks(data?.feedbacks);
      console.log({ data });
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);
  console.log({ feedbacks });
  return (
    <Center>
      <Title title="Clients Speak" />

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
      >
        {feedbacks?.map((feedback) => (
          <SwiperSlide>
            {" "}
            <Testimonial key={feedback?._id}>
              <TestimonialContent>
                <TestimonialHeading>{feedback?.comment}</TestimonialHeading>
                <TestimonialText>
                  <StarRating rating={feedback?.rating} />
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={"https://images.unsplash.com/broken"}
                name={feedback.userID.userName}
              />
            </Testimonial>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </Center>
  );
}
