import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 32px;

  > section {
    width: 100%;
    min-height: 60vh;
    padding: 32px 0;
  }

  > * {
    /* max-width: 1024px; */
    max-width: 796px;
  }
`;
