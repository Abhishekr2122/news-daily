import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledBtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 6px;
`;

const StyledBtn = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledGoogleBtn = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 4px;
  width: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const StyledParagraph = styled.p`
  color: white;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid white;
`;

export default function LoginSignupType({
  btnContent1,
  btnContent2,
  paraContent1,
  paraContent2,
}) {
  const [loginType, setLoginType] = useState("");

  function handleLoginType(loginType) {
    setLoginType(loginType);
  }

  return (
    <StyledMainContainer>
      <StyledBtnContainer>
        <StyledBtn
          onClick={function () {
            handleLoginType("user");
          }}
        >
          {btnContent1}
        </StyledBtn>
        <StyledBtn
          onClick={function () {
            handleLoginType("admin");
          }}
        >
          {btnContent2}
        </StyledBtn>
      </StyledBtnContainer>
      <StyledGoogleBtn
        onClick={function () {
          if (loginType === "") {
            toast.error("Kindly select the login type first");
          }
        }}
      >
        <FaGoogle style={{ height: "20px", width: "20px" }} />
        <p style={{ fontSize: "15px" }}>{paraContent1}</p>
        <MdOutlineLogin style={{ height: "20px", width: "20px" }} />
      </StyledGoogleBtn>
      <StyledParagraph>{paraContent2}</StyledParagraph>
    </StyledMainContainer>
  );
}
