import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;

  width: 100%;
  height: 212px;
  border-radius: 10px;
  padding: 32px 40px;
  background-color: ${(props) => props.theme.colors.baseProfile};
`;

export const Avatar = styled.img`
  border-radius: ${(props) => props.theme.sizes.xxsmall}px;
  width: 148px;
  height: 148px;
`;

export const Name = styled.h3`
  margin-top: ${(props) => props.theme.sizes.xxsmall}px;
  color: ${(props) => props.theme.colors.baseTitle};
  font-size: ${(props) => props.theme.sizesxxlarge}px;
  font-weight: bold;
  line-height: 130%;
`;

export const Bio = styled.p`
  font-size: ${(props) => props.theme.sizes.medium}px;
  color: ${(props) => props.theme.colors.baseText};
  margin: ${(props) => props.theme.sizes.xxsmall}px 0
    ${(props) => props.theme.sizes.xxlarge}px;
`;

export const Row = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.xxlarge}px;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  gap: ${(props) => props.theme.sizes.xxsmall}px;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
`;
