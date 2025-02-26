import Anchor from "@/components/atoms/Anchor";
import { formatDate } from "@/utils/dates";
import React from "react";
import {
  AuthorContainer,
  Container,
  HeroImage,
  PublishedAtLabel,
  Title,
} from "./styles";
import Image from "next/image";

interface FullPollProps {
  poll: PollEntity;
}

const FullPoll: React.FC<FullPollProps> = (props) => {
  return (
    <Container>
      {/* <header>
        <Title>{props.post.title}</Title>
        <PublishedAtLabel>
          {formatDate(props.post.publishedAt)}
        </PublishedAtLabel>
        <AuthorContainer>
          <Image
            src={props.post.author.profileImage}
            width={50}
            height={50}
            alt=""
          />
          <div>
            <span>{props.post.author.name}</span>
            <Anchor href={props.post.author.twitterProfile}>@Twitter</Anchor>
          </div>
        </AuthorContainer>
      </header>

      <HeroImage src={props.post.heroImage} fill alt="" /> */}
    </Container>
  );
};

export default FullPoll;
