import { Posts } from "components/Posts/Posts";
import { ProfileCard } from "components/ProfileCard/ProfileCard";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <ProfileCard />
      <Posts />
    </S.Container>
  );
}
