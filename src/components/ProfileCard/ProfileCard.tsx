import React from "react";

import * as S from "./styles";
import { UserDetails } from "../UserDetails/UserDetail";
import { Link } from "assets/Link";

import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "services";

export const ProfileCard: React.FC = () => {
  const { data: user } = useQuery({
    queryKey: ["getUser"],
    queryFn: fetchUser,
  });

  return (
    <S.Container>
      <S.Avatar src={user?.avatar_url} />
      <div style={{ width: "100%" }}>
        <S.Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <S.Name>{user?.name}</S.Name>
          <S.Link href={user?.html_url} target="_blank">
            <b>GITHUB</b>
            <Link />
          </S.Link>
        </S.Row>
        <S.Bio>{user?.bio}</S.Bio>
        <S.Row>
          {user?.login && (
            <UserDetails iconName="username" label={user?.login} />
          )}
          {user?.company && (
            <UserDetails iconName="organization" label={user?.company} />
          )}
          {user?.followers && (
            <UserDetails
              iconName="folloers"
              label={`${user?.followers} seguidores`}
            />
          )}
        </S.Row>
      </div>
    </S.Container>
  );
};
