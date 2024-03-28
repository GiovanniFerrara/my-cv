import styled from "styled-components";
import githubSrc from "../../assets/github.png";
import linkedinSrc from "../../assets/linkedin.png";
import { Flex } from "../styles";
import data from "../../../compiled-data.json";

const SubHeader = styled.div`
  display: flex;
  z-index: 20;
  font-size: ${(props) => props.theme.scaleFactor * 12}px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  height: ${(props) => props.theme.scaleFactor * 60}px;
  font-weight: 500;
`;

const Column = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  width: ${(props) => props.theme.scaleFactor * 24}px;
  height: ${(props) => props.theme.scaleFactor * 24}px;
`;

const Link = styled.a`
  margin-left: ${(props) => props.theme.scaleFactor * 8}px;
`;

const personalInfo = data["personal-info"][0];

export default function HeaderBottom() {
  return (
    <SubHeader>
      <Flex mx={32}>
        <Column>
          <Flex>{personalInfo.phone}</Flex>
          <Flex my={4}>{personalInfo.email}</Flex>
          <Flex>{personalInfo.address}</Flex>
        </Column>
      </Flex>
      <Column>
        <Flex mx={32} jc="flex-end">
          <Link href={personalInfo.github} target="blank">
            <Image src={githubSrc} />
          </Link>
          <Link href={personalInfo.linkedin} target="blank">
            <Image src={linkedinSrc} />
          </Link>
        </Flex>
      </Column>
    </SubHeader>
  );
}
