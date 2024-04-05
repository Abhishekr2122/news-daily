import styled from "styled-components";

const StyledAnchor = styled.a``;

export default function AnchorElem({ children, href }) {
  return (
    <StyledAnchor href={href} target="noreferrer">
      {children}
    </StyledAnchor>
  );
}
