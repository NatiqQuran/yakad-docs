import Link from "next/link";
import { Container, Card, Button, Row } from "@yakad/ui";

export default function Example1() {
  return (
    <Container maxWidth="lg" id="learnmore">
      <Row>
        <Card>
          <h1>Yakad UI</h1>
          <p style={{ fontSize: "12px" }}>
            It is about our components such as buttons, appbar, card and...
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>

        <Card>
          <h1>Yakad X</h1>
          <p style={{ fontSize: "12px" }}>
            It is about ready made structures such as X Panel and...
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>

        <Card>
          <h1>Yakad Symbols</h1>
          <p style={{ fontSize: "12px" }}>
            You can find the desired logo here and use it more easily.
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>

        <Card>
          <h1>Yakad lib</h1>
          <p style={{ fontSize: "12px" }}>
            There are ready made functions that are mostly used by YacadX
          </p>
          <Link href="#">
            <Button size="small" variant="outlined">
              click to continue!
            </Button>
          </Link>
        </Card>
      </Row>
    </Container>
  );
}
