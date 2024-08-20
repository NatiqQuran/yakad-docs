import { Container, Hr } from "@yakad/ui";
import ExampleProjects from "./example";
import Installation from "./installation";
import Link from "next/link";

export default function Docs() {
  return (
    <>
      <Container maxWidth="md">
        <h1 style={{ fontSize: "3rem" }}>Owerview</h1>
        <p style={{ fontSize: "20px" }}>
          We bulit <b>Yakad</b> to meet the UI/UX needs of the{" "}
          <Link target="_blank" href="https://natiq.net">
            Natiq
          </Link>{" "}
          project. By with the MIT licens, we also provided the open source
          community.
        </p>
        <Hr />
      </Container>
      <Installation />
    </>
  );
}
