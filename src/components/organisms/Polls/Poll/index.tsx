import React from "react";
import {
  Container,
  DescriptionContainer,
  PollOptionsContainer,
  PublishedAtLabel,
  CategoriesContainer,
  Title,
  HeroImage,
} from "./styles";
import { formatDate } from "@/utils/dates";
import Anchor from "@/components/atoms/Anchor";

interface PostItemsProps {
  poll: PollEntity;
}

const Poll: React.FC<PostItemsProps> = (props) => {
  return (
    <Container>
      {/* <Anchor href={`/polls/${props.poll.slug}`}></Anchor> */}

      <HeroImage src={props.poll.image} fill alt="" />

      <PublishedAtLabel>{formatDate(props.poll.createDt)}</PublishedAtLabel>
      <CategoriesContainer>
        {props.poll.categories.map((c) => (
          <span key={c.guid}>{c.name}</span>
        ))}
      </CategoriesContainer>
      <DescriptionContainer>{props.poll.content}</DescriptionContainer>

      <PollOptionsContainer>
        {props.poll.options.map((option) => (
          <li key={option.guid}>{option.label}</li>
        ))}
      </PollOptionsContainer>
    </Container>
  );
};

export default Poll;
