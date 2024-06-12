import React from "react";

import * as S from "./styles";

import { UserName } from "../../assets/UserName";
import { Followers } from "../../assets/Followers";
import { Organization } from "../../assets/Organization";

export const UserDetails: React.FC<{
  iconName: "username" | "organization" | "folloers";
  label: string;
}> = ({ label, iconName }) => {
  const getIcon = {
    username: <UserName />,
    folloers: <Followers />,
    organization: <Organization />,
  };

  return (
    <S.Container>
      {getIcon[iconName]}
      <span>{label}</span>
    </S.Container>
  );
};
