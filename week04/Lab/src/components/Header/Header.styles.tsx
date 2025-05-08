import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 2rem;
  background-color: #007bff;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 6rem;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &.open {
      display: flex;
    }
  }
`;

export const Menu = styled.div`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: white;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-size: 0.95rem;
  color: black;
  font-weight: 500;
`;
export const MenuIcon = styled.div`
  display: none;
  z-index: 1000;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
export const MobileMenu = styled.div`
  position: fixed;
  top: 6rem;
  right: 0;
  width: 100%;
  padding: 2rem;
  background-color: #007bff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;

  &.slide-down {
    animation: slideDown 0.3s ease-out forwards;
  }

  &.slide-up {
    animation: slideUp 0.3s ease-in forwards;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-30%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30%);
      opacity: 0;
    }
  }
`;
