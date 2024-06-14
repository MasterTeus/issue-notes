import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes.xxsmall}px;
`;
