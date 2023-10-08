import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, everyone!";
const name = "random";
const bio1 = "Who am I?";
const bio2 = "Specialized in nothing";
const avatarUrl = "https://i.pravatar.cc/150";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center">
      <Avatar size="2xl" src={avatarUrl} name={name} />
      <Heading size="md">
        {greeting}
      </Heading>
      <div style={{ margin: '10px 0' }}></div>
      <Heading size="lg">
        {bio1}
      </Heading>
      <Heading size="lg">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
