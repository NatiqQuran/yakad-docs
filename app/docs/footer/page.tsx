import {
  Button,
  Container,
  Footer,
  Card,
  Row,
  Spacer,
  Hr,
  GridContainer,
  GridItem,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";
import Link from "next/link";
import IntroFooter from "@/app/footer";

export default function DocsAppbar() {
  return (
    <Container maxWidth="lg">
      <h1 style={{ fontSize: "3rem" }}>Footer</h1>
      <h1>
        The footer is used to write closing remarks or support and sponsors
        or...
      </h1>
      <Hr />

      <h1>Example 1:</h1>
      <Footer>
        <h1>this is a Normal Footer!</h1>
      </Footer>

      <h1>Example 2:</h1>
      <Footer align="center">
        <GridContainer>
          <GridItem xl={6}>
            <p style={{ fontSize: "22px", color: "#808080" }}>
              Designed by <a href="https://yakad.natiq.net"> Yakad</a>
            </p>
          </GridItem>
          <GridItem xl={6}>
            <p
              style={{
                fontSize: "20px",
                color: "#7d7d7d",
                textAlign: "justify",
              }}
            >
              Natiq is a system with components, parts, features, and... ! we
              recommend people who want to quickly and beautifully design their
              site and create a very organized site to use our site.
            </p>
          </GridItem>
        </GridContainer>
      </Footer>
      <h1>Example 3:</h1>
      <IntroFooter />
    </Container>
  );
}
