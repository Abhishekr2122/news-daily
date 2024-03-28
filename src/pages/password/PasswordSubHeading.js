import styled from "styled-components";

const StyledSubHeading = styled.h3`
  color: white;
  text-align: start;
  width: 50%;
  margin-top: 0px;
  font-weight: 200;
`;

export default function PasswordSubHeading({ headingContent }) {
  return <StyledSubHeading>{headingContent}</StyledSubHeading>;
}
