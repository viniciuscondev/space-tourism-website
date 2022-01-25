import styled from "styled-components";
import Image from "next/image";

interface Props {
  currentPage: string;
}

interface ActiveProps {
  active: boolean;
}

const NavMenu = styled.nav`
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
  }
  span {
    font-weight: bold;
    margin-right: 1rem;

    @media (max-width: 820px) {
      display: none;
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

  border-bottom: ${(props) =>
    props.active ? "3px solid white" : "3px solid transparent"};

  :hover {
    border-bottom: ${(props) => (props.active ? "" : "3px solid #979797")};
  }
`;

export default function Navbar({ currentPage }: Props) {
  return (
    <NavMenu>
      <Image
        src="/assets/shared/logo.svg"
        width="48px"
        height="48px"
        layout="fixed"
      />
      <div></div>
      <ul>
        <NavItem active={currentPage == "Home"}>
          <span>00</span>Home
        </NavItem>
        <NavItem active={currentPage == "Destination"}>
          <span>01</span>Destination
        </NavItem>
        <NavItem active={currentPage == "Crew"}>
          <span>02</span>Crew
        </NavItem>
        <NavItem active={currentPage == "Technology"}>
          <span>03</span>Technology
        </NavItem>
      </ul>
    </NavMenu>
  );
}
