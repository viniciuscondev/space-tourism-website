import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import Navbar from "../components/Navbar";
import data from "../data.json";

interface ActiveProps {
  active: boolean;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  background-image: url("/assets/destination/background-destination-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 820px) {
    background-image: url("/assets/destination/background-destination-tablet.jpg");
  }
  @media (max-width: 520px) {
    background-image: url("/assets/destination/background-destination-mobile.jpg");
  }
`;

const Title = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.75px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  text-transform: uppercase;
  align-self: flex-start;
  margin-left: 10%;
  margin-top: 3rem;
  margin-bottom: 5rem;

  span {
    color: rgb(80 82 89);
    font-weight: 700;
    margin-right: 1rem;
  }
`;

const Content = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;

  h2 {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 32px;
    border-bottom: 1px solid #383b4b;
    padding-bottom: 3em;
  }
`;

const Menu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-bottom: 2em;
  }
`;

const MenuItem = styled.li<ActiveProps>`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-right: 3em;
  border-bottom: ${(props) =>
    props.active ? "3px solid white" : "3px solid transparent"};
  padding-bottom: 0.5em;

  :hover {
    border-bottom: 3px solid #979797;
  }
`;

const UnitsContainer = styled.div`
  display: flex;
  margin-top: 2em;

  div {
    margin-right: 4em;
  }

  h3 {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 14px;
    letter-spacing: 2.35px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    margin-bottom: 1em;
  }

  h4 {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export default function Destination() {
  const [displayData, setDisplayData] = useState(data.destinations[0]);
  const [currentContent, setCurrentContent] = useState(
    data.destinations[0].name
  );

  return (
    <Main>
      <Navbar currentPage="Destination" />
      <Title>
        <span>01</span>
        Pick your destination
      </Title>
      <Content>
        <Image
          src={displayData.images.png.substring(1)}
          layout="fixed"
          width="445px"
          height="445px"
        />
        <Info>
          <Menu>
            <ul>
              <MenuItem
                active={currentContent == "Moon"}
                onClick={() => {
                  setDisplayData(data.destinations[0]);
                  setCurrentContent(data.destinations[0].name);
                }}
              >
                MOON
              </MenuItem>
              <MenuItem
                active={currentContent == "Mars"}
                onClick={() => {
                  setDisplayData(data.destinations[1]);
                  setCurrentContent(data.destinations[1].name);
                }}
              >
                MARS
              </MenuItem>
              <MenuItem
                active={currentContent == "Europa"}
                onClick={() => {
                  setDisplayData(data.destinations[2]);
                  setCurrentContent(data.destinations[2].name);
                }}
              >
                EUROPA
              </MenuItem>
              <MenuItem
                active={currentContent == "Titan"}
                onClick={() => {
                  setDisplayData(data.destinations[3]);
                  setCurrentContent(data.destinations[3].name);
                }}
              >
                TITAN
              </MenuItem>
            </ul>
          </Menu>
          <h2>{displayData.name}</h2>
          <p>{displayData.description}</p>
          <UnitsContainer>
            <div>
              <h3>AVG. DISTANCE</h3>
              <h4>{displayData.distance}</h4>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <h4>{displayData.travel}</h4>
            </div>
          </UnitsContainer>
        </Info>
      </Content>
    </Main>
  );
}
