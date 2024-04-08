import styled from "styled-components";
import AnchorElem from "./AnchorElem";
import { FaGithub, FaLinkedin, FaPortrait } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { ImProfile } from "react-icons/im";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  padding: 12px;
  align-items: center;
  justify-content: space-evenly;
`;

export default function SignupFooter() {
  return (
    <StyledFooter>
      <AnchorElem href="https://github.com/Abhishekr2122" target="noreferrer">
        <FaGithub style={{ color: "white", height: "23px", width: "23px" }} />
      </AnchorElem>
      <AnchorElem
        href="https://www.linkedin.com/in/abhishek-shinde1/"
        target="noreferrer"
      >
        <FaLinkedin style={{ color: "white", height: "23px", width: "23px" }} />
      </AnchorElem>
      <AnchorElem
        href="https://github.com/Abhishekr2122?tab=repositories"
        target="noreferrer"
      >
        <GoProjectSymlink
          style={{ color: "white", height: "23px", width: "23px" }}
        />
      </AnchorElem>
      <AnchorElem
        href="https://drive.google.com/file/d/1q4onSVqsiyR_1DwU9yF_6LmU-YpRWJOB/view"
        target="noreferrer"
      >
        <ImProfile style={{ color: "white", height: "23px", width: "23px" }} />
      </AnchorElem>
      <AnchorElem
        href="https://abhishek-shinde-portfolio-netlify.netlify.app/"
        target="noreferrer"
      >
        <FaPortrait style={{ color: "white", height: "23px", width: "23px" }} />
      </AnchorElem>
    </StyledFooter>
  );
}
