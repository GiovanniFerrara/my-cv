import styled from "styled-components";
import Image from "../../components/ImageWithLabel.jsx";
import bgSrc from "../../assets/bg.png";
import HeaderBottom from "./header-bottom.jsx";
import { Flex } from "../styles.js";
import data from "../../data.json";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.theme.scaleFactor * 230}px;
  background-image: url("${bgSrc}");
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${(props) => 40 * props.theme.scaleFactor}px;
  padding-bottom: ${(props) => 15 * props.theme.scaleFactor}px;
`;
const SubHeader = styled.p`
  font-size: ${(props) => 17 * props.theme.scaleFactor}px;
  font-family: "Quicksand", sans-serif;
`;

const Presentation = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  padding-top: ${(props) => 30 * props.theme.scaleFactor}px;
`;
const ImgWrapper = styled.div`
  margin: ${(props) => 10 * props.theme.scaleFactor}px 0;
`;

const personalInfo =data["personal-info"][0] 

const CvHeader = () => {
  return (
    <Header>
      <ImgWrapper>
        <Image imageSize={120} image={personalInfo.image} alt="profile" />
      </ImgWrapper>
      <Flex jc="space-between" ai="center">
        <Presentation>
          <Title>{personalInfo.name}</Title>
          <SubHeader>{personalInfo.subheader}</SubHeader>
        </Presentation>
      </Flex>
      <HeaderBottom />
    </Header>
  );
};

export default CvHeader;
