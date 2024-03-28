import styled from "styled-components";

const StyledBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledBtn = styled.button`
  padding: 12px;
  background-color: white;
  width: 100%;
  border: 1px solid white;
  color: #0d30ea;
  border-radius: 6px;
  cursor: pointer;
`;

export default function FormConfirmbtn({ btnContent }) {
  return (
    <StyledBtnContainer>
      <StyledBtn>{btnContent}</StyledBtn>
    </StyledBtnContainer>
  );
}
