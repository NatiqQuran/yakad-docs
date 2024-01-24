import {
  AppBar,
  Button,
  Container,
  Footer,
  Main,
  Page,
  Row,
  Spacer,
  Stack,
} from "@yakad/ui";
import Link from "next/link";

export default function Docs() {
  return (
    <Container maxWidth="lg">
      <Row>
        <Link href="./docs/appbar">
          <Button variant="filled">Appbar</Button>
        </Link>
        <Link href="./docs/button">
          <Button variant="filled">Button</Button>
        </Link>
      </Row>
    </Container>
  );
}
