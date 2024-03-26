import styled from "styled-components";

const StyledBtn = styled.button`
  cursor: pointer;
`;

export default function Button(props) {
  return <StyledBtn>{props.content}</StyledBtn>;
}
