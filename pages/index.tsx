import styled from "styled-components";

import Navbar from "../components/Navbar";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  background-image: url("/assets/home/background-home-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 820px) {
    background-image: url("/assets/home/background-home-tablet.jpg");
  }
  @media (max-width: 520px) {
    background-image: url("/assets/home/background-home-mobile.jpg");
  }
`;

const Content = styled.section`
  position: absolute;
  bottom: 0;
  padding: 5em 10em;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 820px) {
    position: static;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }
  @media (max-width: 520px) {
    padding: 2em;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  @media (max-width: 820px) {
    align-items: center;
  }
  @media (max-width: 520px) {
    width: auto;
  }
  h5 {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4.75px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 520px) {
      font-size: 16px;
    }
  }
  h1 {
    font-weight: 400;
    font-size: 150px;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: 520px) {
      font-size: 80px;
    }
  }
  p {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 820px) {
      text-align: center;
      line-height: 28px;
    }
    @media (max-width: 520px) {
      font-size: 15px;
    }
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

    @media (max-width: 820px) {
      width: 242px;
      height: 242px;
    }
    @media (max-width: 520px) {
      width: 150px;
      height: 150px;
    }
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
    color: #0b0d17;
    letter-spacing: 2px;

    @media (max-width: 520px) {
      font-size: 20px;
    }
  }
`;

export default function Home() {
  return (
    <Main>
      <Navbar currentPage="Home" />
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
