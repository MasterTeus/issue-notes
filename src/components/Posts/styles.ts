import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  gap: ${(props) => props.theme.sizes.hurge}px;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  gap: ${(props) => props.theme.sizes.xlarge}px;
  display: flex;
  flex-direction: column;
  line-height: 130%;

  width: 416px;
  overflow: hidden;
  height: 260px;
  background-color: ${(props) => props.theme.colors.basePost};
  padding: ${(props) => props.theme.sizes.hurge}px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.basePost};

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.baseLabel};
  }
`;

export const Title = styled.h1`
  width: 280px;
  color: ${(props) => props.theme.colors.baseTitle};
  font-size: ${(props) => props.theme.sizes.xlarge}px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UpdatedAt = styled.p`
  color: ${(props) => props.theme.colors.baseSpan};
  font-size: ${(props) => props.theme.sizes.small}px;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.baseText};
  font-size: ${(props) => props.theme.sizes.medium}px;
  line-height: 160%;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;
