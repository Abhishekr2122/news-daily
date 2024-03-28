import styled from "styled-components";

const StyledLogoContainer = styled.div`
  border: 1px solid white;
  padding: 30px;
  border-radius: 50px;
`;

export default function PasswordLogo({ logoElement }) {
  return <StyledLogoContainer>{logoElement}</StyledLogoContainer>;
}
