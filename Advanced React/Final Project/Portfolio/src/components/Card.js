import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      align="start"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
      backgroundColor="white"
    >
      <Image src={imageSrc} alt={title} />
      <VStack spacing={2} align="start">
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text color="CornflowerBlue">{description}</Text>
      </VStack>
      <HStack mt={4} color="black">
        <a href="#">See more <FontAwesomeIcon icon={faArrowRight} /> </a>
      </HStack>
    </VStack>
  );
};

export default Card;
