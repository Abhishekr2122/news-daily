import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  width: 100%;
  border-style: none;
  cursor: pointer;
`;

const StyledHeading = styled.h3`
  color: white;
`;

export default function BacktoLoginbtn() {
  return (
    <StyledBtn>
      <IoMdArrowBack
        style={{ color: "white", height: "20px", width: "20px" }}
      />
      <StyledHeading>Return to the login screen</StyledHeading>
    </StyledBtn>
  );
}
