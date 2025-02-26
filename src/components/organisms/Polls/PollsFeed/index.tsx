import React from "react";
import Poll from "../Poll";
import { Container } from "./styles";
import { polls } from "@/mocks/polls";
import Loader from "@/components/atoms/Loader";

const PollsFeed: React.FC<any> = (props) => {
  return (
    <Container>
      {polls.map((poll, index) => {
        return <Poll key={index} poll={poll} />;
      })}

      <Loader />
    </Container>
  );
};

export default PollsFeed;
