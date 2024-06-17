import React from "react";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { getPosts } from "services";

import * as S from "./styles";
import { formatData } from "utils/date";

export const Posts: React.FC = () => {
  const { me } = useParams();

  const { data: posts } = useQuery({
    queryKey: ["getPosts"],
    queryFn: () => getPosts(me!, "issue-notes"),
  });

  if (!posts) return null;

  return (
    <S.Container>
      {posts.map((post) => (
        <S.Post>
          <S.Row>
            <S.Title>{post.title}</S.Title>
            <S.UpdatedAt>{formatData(post.updated_at)}</S.UpdatedAt>
          </S.Row>

          <S.Description>{post.body}</S.Description>
        </S.Post>
      ))}
    </S.Container>
  );
};
