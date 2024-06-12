import React from "react";
import * as S from "./styles";

import { RowsCodeLeft } from "assets/RowsCodeLeft";
import { Logo } from "assets/Logo";
import { RowsCodeRight } from "assets/RowsCodeRight";
import { LineBlur } from "assets/LineBlur";

export const Header: React.FC = () => {
  return (
    <S.Container>
      <RowsCodeLeft />
      <Logo />
      <RowsCodeRight />
      <LineBlur />
    </S.Container>
  );
};
