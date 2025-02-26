import React from "react";
import {
  Container,
  DescriptionContainer,
  PollOptionsContainer,
  PublishedAtLabel,
  CategoriesContainer,
  Title,
  HeroImage,
  LinkContainer,
} from "./styles";
import { formatDate } from "@/utils/dates";
import Anchor from "@/components/atoms/Anchor";

interface PostItemsProps {
  poll: PollEntity;
}

const FullPoll: React.FC<PostItemsProps> = (props) => {
  return (
    <Container>
      <LinkContainer href={`/poll/${props.poll.slug}`}>
        <HeroImage src={props.poll.image} fill alt="" />

        <PublishedAtLabel>{formatDate(props.poll.createDt)}</PublishedAtLabel>
        <CategoriesContainer>
          {props.poll.categories.map((c) => (
            <span key={c.guid}>{c.name}</span>
          ))}
        </CategoriesContainer>
        <DescriptionContainer>{props.poll.content}</DescriptionContainer>
      </LinkContainer>

      <PollOptionsContainer>
        {props.poll.options.map((option) => (
          <li key={option.guid}>{option.label}</li>
        ))}
      </PollOptionsContainer>
    </Container>
  );
};

export default FullPoll;
