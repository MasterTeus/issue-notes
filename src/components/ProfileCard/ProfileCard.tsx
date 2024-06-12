import React from "react";

import * as S from "./styles";
import { UserDetails } from "../UserDetails/UserDetail";
import { Link } from "../../assets/Link";

export const ProfileCard: React.FC = () => {
  return (
    <S.Container>
      <S.Avatar src="https://avatars.githubusercontent.com/u/39800209?v=4" />
      <div>
        <S.Row
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <S.Name>Mateus Cazuza</S.Name>
          <S.Link href="http://" target="_blank" rel="noopener noreferrer">
            <b>GITHUB</b>
            <Link />
          </S.Link>
        </S.Row>
        <S.Bio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </S.Bio>
        <S.Row>
          <UserDetails iconName="username" label="masterteus" />
          <UserDetails iconName="organization" label="Gympass" />
          <UserDetails iconName="folloers" label="8 seguidores" />
        </S.Row>
      </div>
    </S.Container>
  );
};
