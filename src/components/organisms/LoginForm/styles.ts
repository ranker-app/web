import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 50vh;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow);
  padding: var(--padding-4);
  gap: var(--margin-4);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: var(--margin-2);

  > fieldset {
    display: flex;
    flex-direction: column;
    row-gap: var(--margin-1);
    border: none;
  }

  input {
    min-height: 32px;
    padding: 14px;
  }

  button {
    border: none;
    background-color: var(--duolingo-green-color);
    padding: 16px;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-medium);

    &:hover {
      opacity: 0.75;
    }
  }
`;
