import { ReactNode } from "react";
import { Header } from "../components/Header/Header";

import * as S from "./styles";

export function template(children: ReactNode) {
  return (
    <S.Contianer>
      <Header />
      <S.Body>{children}</S.Body>
    </S.Contianer>
  );
}
