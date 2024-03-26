import styled from "styled-components";
import githubSrc from "../../assets/github.png";
import linkedinSrc from "../../assets/linkedin.png";
import { Flex } from "../styles";

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

export default function HeaderBottom() {
  return (
    <SubHeader>
      <Flex mx={32}>
        <Column>
          <Flex>+48 796 798 591</Flex>
          <Flex my={4}>gianmarco.ferrara@gmail.com</Flex>
          <Flex>Lisbon, Portugal</Flex>
        </Column>
      </Flex>
      <Column>
        <Flex mx={32} jc="flex-end">
          <Link href="https://www.github.com/GiovanniFerrara/" target="blank">
            <Image src={githubSrc} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/giovanni-marco-ferrara/"
            target="blank"
          >
            <Image src={linkedinSrc} />
          </Link>
        </Flex>
      </Column>
    </SubHeader>
  );
}
