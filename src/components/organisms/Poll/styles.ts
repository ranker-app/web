import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 16px;

  /* background-color: #cecece; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 32px;
  border-radius: 8px;
`;

export const PublishedAtLabel = styled.span`
  color: rgba(0, 0, 0, 0.55);
  font-weight: 500;
  font-size: 14px;
`;

export const Title = styled.h2`
  color: #fff;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;

  > span {
    text-transform: uppercase;
    color: var(--primary-color);
    font-size: 12px;
  }
`;

export const DescriptionContainer = styled.p`
  color: rgba(0, 0, 0, 0.75);
`;

export const PollOptionsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  > li {
    background-color: var(--duolingo-green-color);
    padding: 16px;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: 0.1s all ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const HeroImage = styled(Image)`
  position: relative !important;
  margin: 32px 0 0 0;
  border-radius: 8px;
`;
