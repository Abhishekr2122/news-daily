import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  width: 100%;
  border-style: none;
  cursor: pointer;
  text-decoration: underline;
  color: white;
`;

const StyledHeading = styled.h3`
  color: white;
`;

const StyledLoginContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
`;

export default function BacktoLoginbtn() {
  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function handleButtonClick() {
    setIsButtonClicked(true);
    setTimeout(function () {
      navigate("/login");
      setIsButtonClicked(false);
    }, 1100);
  }

  return (
    <StyledLoginContainer onClick={handleButtonClick}>
      <StyledBtn>
        {isButtonClicked ? (
          <Spinner />
        ) : (
          <IoMdArrowBack
            style={{ color: "white", height: "20px", width: "20px" }}
          />
        )}

        <StyledHeading>Return to the login screen</StyledHeading>
      </StyledBtn>
    </StyledLoginContainer>
  );
}
