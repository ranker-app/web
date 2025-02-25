import Anchor from "@/components/atoms/Anchor";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;

  > header {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;

export const PublishedAtLabel = styled.span`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 500;
  font-size: 14px;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const AuthorContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  column-gap: 16px;

  > div {
    display: flex;
    flex-direction: column;

    > span:first-child {
      font-weight: 600;
    }
  }
`;

export const HeroImage = styled(Image)`
  position: relative !important;
  margin: 32px 0 0 0;
  border-radius: 8px;
`;
