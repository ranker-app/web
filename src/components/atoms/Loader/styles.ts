import { StyleParam } from "@/@types/General";
import Link from "next/link";
import styled from "styled-components";

interface ContainerProps {
  styles: StyleParam;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  ${(props) => props.styles}
`;
