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

// Import Swiper styles
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import Slider from "@ant-design/react-slick";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { settings } from "./setting";

interface Props {
  children: React.ReactNode;
}

const Testimonial = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: Props) => {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
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
        borderTopColor: useColorModeValue("gray.50", "gray.800"),
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

const TestimonialHeading = ({ children }: Props) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: Props) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.500", "gray.400")}
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
  const t = useTranslations("Buttons");

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
      <Title exSt="pt-10 text-cyan-800" title={t("clientsFeedback")} />
      {/*  @ts-ignore  */}
      <Slider dir={"ltr"} {...settings} ref={slider} key={3} autoplay>
        {feedbacks?.map((feedback) => (
          <Testimonial>
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
          </Testimonial>
        ))}
        {/* </Swiper> */}
      </Slider>
    </Center>
  );
}
