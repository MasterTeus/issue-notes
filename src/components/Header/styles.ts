import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.baseProfile};
  height: 296px;
  width: 100vw;

  display: flex;
  position: relative;

  justify-content: center;
  padding-top: 64px;

  overflow: hidden;
`;
