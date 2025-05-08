import {
  HeaderWrapper,
  MenuWrapper,
  Menu,
  UserProfile,
  UserImg,
  UserName,
  MobileMenu,
  MenuIcon,
} from "./Header.styles";
import userImg from "../../assets/user.svg";
import { useNavigate } from "react-router";
import { useNickName } from "../../hook/useNickName/useNickName";

import { useState } from "react";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
export default function Header() {
  const navigate = useNavigate();
  const { nickName } = useNickName();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuVisible(true);
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
      setTimeout(() => setMenuVisible(false), 300); // 애니메이션 시간 후 DOM 제거
    }
  };
  const handleMenuClick = (action: () => void) => {
    setMenuOpen(false);
    setTimeout(() => {
      setMenuVisible(false);
      action(); // 클릭 후 이동
    }, 300);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  const handleMyPageSearch = () => {
    navigate("/mypage/search");
  };
  const handleMyPageInfo = () => {
    navigate("/mypage/info");
  };

  return (
    <HeaderWrapper>
      <MenuIcon onClick={toggleMenu}>
        <img src={menuOpen ? close : menu} alt="menu toggle" />
      </MenuIcon>

      <MenuWrapper>
        <Menu onClick={handleMyPageInfo}>내 정보</Menu>
        <Menu onClick={handleMyPageSearch}>Sopt 회원 조회하기</Menu>
        <Menu onClick={handleLogOut}>로그아웃</Menu>
      </MenuWrapper>

      <UserProfile>
        <UserImg alt="user profile img" src={userImg} />
        <UserName>{nickName}</UserName>
      </UserProfile>

      {menuVisible && (
        <MobileMenu className={menuOpen ? "slide-down" : "slide-up"}>
          <Menu onClick={() => handleMenuClick(handleMyPageInfo)}>내 정보</Menu>
          <Menu onClick={() => handleMenuClick(handleMyPageSearch)}>
            Sopt 회원 조회하기
          </Menu>
          <Menu onClick={() => handleMenuClick(handleLogOut)}>로그아웃</Menu>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
}
