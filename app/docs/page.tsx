import {
  AppBar,
  Button,
  Card,
  Container,
  Footer,
  Main,
  Page,
  Row,
  Spacer,
  Stack,
  Hr,
} from "@yakad/ui";
import ExampleProjects from "./example";
import Installation from "./installation";

export default function Docs() {
  return (
    <div>
      <Container maxWidth="md">
        <h1 style={{ fontSize: "3rem" }}>Owerview #</h1>
        <p style={{ fontSize: "20px" }}>
          We bulit <b>Yakad</b> to meet the UI/UX needs of the talk project. By
          with the MIT licens, we also provided the open source community.
        </p>
        <Hr />
      </Container>
      <Installation />
      <ExampleProjects />
    </div>
  );
}
