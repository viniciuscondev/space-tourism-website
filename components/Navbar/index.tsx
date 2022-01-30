import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface Props {
  currentPage: string;
}

interface ActiveProps {
  active: boolean;
}

const NavMenu = styled.nav<ActiveProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding-left: 55px;
  height: 96px;

  @media (max-width: 820px) {
    margin-top: 0;
    justify-content: space-between;
    padding-left: 24px;
  }
  div {
    border-top: 1px solid #979797;
    position: absolute;
    left: 167px;
    right: 800px;
    z-index: 1;

    @media (max-width: 820px) {
      display: none;
    }
  }
  ul {
    position: absolute;
    right: 0;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1rem);
    width: 830px;
    height: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 820px) {
      background-color: rgba(255, 255, 255, 0.05);
      position: static;
      width: auto;
    }
    @media (max-width: 520px) {
      position: fixed;
      display: ${(props) => (props.active ? "" : "none")};
      width: 65%;
      top: 0;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  span {
    font-weight: bold;
    margin-right: 1rem;

    @media (max-width: 820px) {
      display: none;
    }
    @media (max-width: 520px) {
      display: inline-block;
    }
  }
`;

const NavItem = styled.li<ActiveProps>`
  display: flex;
  align-items: center;
  font-family: "Barlow Condensed", sans-serif;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 2.7px;
  margin: 0 1.5em;
  padding: 10px 0;
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 14px;
  }
  @media (max-width: 520px) {
    font-size: 16px;
    border-bottom: none;
  }

  border-bottom: ${(props) =>
    props.active ? "3px solid white" : "3px solid transparent"};

  :hover {
    border-bottom: ${(props) => (props.active ? "" : "3px solid #979797")};
  }
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  margin-right: 24px;

  @media (min-width: 520px) {
    display: none;
  }
`;

const CloseButton = styled.button<ActiveProps>`
  display: ${(props) => (props.active ? "" : "none")};
  background: none;
  border: none;
  margin: 24px 0;
  margin-right: 24px;
  width: 24px;
  align-self: flex-end;
`;

export default function Navbar({ currentPage }: Props) {
  const [menuStatus, setMenuStatus] = useState(false);

  function handleMenu() {
    setMenuStatus(!menuStatus);
  }

  return (
    <NavMenu active={menuStatus}>
      <Image
        src="/assets/shared/logo.svg"
        width="48px"
        height="48px"
        layout="fixed"
      />
      <div></div>
      <Hamburger onClick={handleMenu}>
        <Image
          src="/assets/shared/icon-hamburger.svg"
          layout="fixed"
          width="24px"
          height="24px"
        />
      </Hamburger>
      <ul>
        <CloseButton active={menuStatus} onClick={handleMenu}>
          <Image
            src="/assets/shared/icon-close.svg"
            layout="fixed"
            width="24px"
            height="24px"
          />
        </CloseButton>
        <Link href="/">
          <NavItem active={currentPage == "Home"}>
            <span>00</span>Home
          </NavItem>
        </Link>
        <Link href="/destination">
          <NavItem active={currentPage == "Destination"}>
            <span>01</span>Destination
          </NavItem>
        </Link>
        <Link href="/crew">
          <NavItem active={currentPage == "Crew"}>
            <span>02</span>Crew
          </NavItem>
        </Link>
        <Link href="/technology">
          <NavItem active={currentPage == "Technology"}>
            <span>03</span>Technology
          </NavItem>
        </Link>
      </ul>
    </NavMenu>
  );
}
