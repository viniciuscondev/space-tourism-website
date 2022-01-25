import styled from "styled-components";
import Image from "next/image";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url("/assets/home/background-home-desktop.jpg");
  width: "100%";
  background-repeat: no-repeat;
  background-size: cover;
`;

const NavMenu = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding-left: 55px;
  height: 96px;
  div {
    border-top: 1px solid #979797;
    position: absolute;
    left: 167px;
    right: 800px;
    z-index: 1;
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
  }
  li {
    display: flex;
    align-items: center;
    font-family: "Barlow Condensed", sans-serif;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 2.7px;
    margin: 0 1.5em;
    padding: 10px 0;
    cursor: pointer;
    border-bottom: 3px solid transparent;
  }
  li:hover {
    border-bottom: 3px solid #979797;
  }
  span {
    font-weight: bold;
    margin-right: 1rem;
  }
`;

const Content = styled.section`
  position: absolute;
  bottom: 0;
  padding: 5em 10em;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  h5 {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4.75px;
    color: ${({ theme }) => theme.colors.primary};
  }
  h1 {
    font-weight: 400;
    font-size: 150px;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.div`  
  div {
    background-color: ${({ theme }) => theme.colors.white};
    width: 274px;
    height: 274px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  span {
    font-size: 32px;
    color: #0B0D17;
    letter-spacing: 2px;
  }
`;

export default function Home() {
  return (
    <Main>
      <NavMenu>
        <Image
          src="/assets/shared/logo.svg"
          width="48px"
          height="48px"
          layout="fixed"
        />
        <div></div>
        <ul>
          <li>
            <span>00</span>Home
          </li>
          <li>
            <span>01</span>Destination
          </li>
          <li>
            <span>02</span>Crew
          </li>
          <li>
            <span>03</span>Technology
          </li>
        </ul>
      </NavMenu>
      <Content>
        <Text>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </Text>
        <Button>
          <a href="#">
            <div>
              <span>EXPLORE</span>
            </div>
          </a>
        </Button>
      </Content>
    </Main>
  );
}
