import styled from "styled-components";

const StyledHeading = styled.h1`
  color: white;
  text-align: center;
  width: 50%;
  text-decoration: underline;
`;

export default function PasswordHeading({ headingContent }) {
  return <StyledHeading>{headingContent}</StyledHeading>;
}
