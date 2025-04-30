/** @jsxImportSource @emotion/react */

import { MENU } from "../../constants/Menu";
import { Button, Title, Wrapper, ButtonWrapper } from "./Header.styles";

export default function Header({ menu, handleMenu }) {
  return (
    <Wrapper>
      <Title>⚾ 숫자야구 || 깃허브 검색 🔍</Title>
      <ButtonWrapper>
        <Button
          isActive={menu === MENU.GITHUB}
          onClick={() => handleMenu(MENU.GITHUB)}
        >
          깃허브 검색🔍
        </Button>
        <Button
          isActive={menu === MENU.BASEBALL}
          onClick={() => handleMenu(MENU.BASEBALL)}
        >
          숫자 야구⚾
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
