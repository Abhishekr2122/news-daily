import styled from "styled-components";

const StyledBtn = styled.button``;

export default function Button(props) {
  return <StyledBtn>{props.content}</StyledBtn>;
}
