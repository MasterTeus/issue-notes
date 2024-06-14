import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 32px;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  width: 416px;
  height: 260px;
  background-color: ${(props) => props.theme.colors.basePost};
  padding: 32px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.basePost};

  :hover {
    cursor: pointer;
    /* border: 2px solid ${(props) => props.theme.colors.baseLabel}; */
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.baseTitle};
  font-size: ${(props) => props.theme.sizes.xlarge}px;
`;
