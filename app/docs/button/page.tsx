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
  Hr,
  Card,
} from "@yakad/ui";
import Link from "next/link";

export default function DocsButton() {
  return (
    <Container maxWidth="lg">
      <h1>Yakad Buttons</h1>

      <Main>
        <Container maxWidth="md">
          <h2>Size:</h2>
          <Stack>
            <Card
              style={{
                maxWidth: "60rem",
                margin: "auto",
              }}
            >
              <Row
                style={{
                  justifyContent: "center",
                }}
              >
                <Button variant="filledtonal" size="small">
                  SMALL
                </Button>
                <Button variant="filledtonal" size="medium">
                  MEDIUM
                </Button>
                <Button variant="filledtonal" size="large">
                  LARGE
                </Button>
              </Row>
            </Card>
            <Hr variant="dashed" />
            <h2>Variant:</h2>
            <Card
              style={{ maxWidth: "60rem", margin: "auto", padding: "50px" }}
            >
              <Row
                style={{
                  justifyContent: "center",
                }}
              >
                <Button variant="elevated">ELEVATED</Button>
                <Button variant="fab">FAB</Button>
                <Button variant="filled">FILLED</Button>
                <Button variant="filledtonal">FILLEDTONAL</Button>
              </Row>
              <Row
                style={{
                  justifyContent: "center",
                }}
              >
                <Button variant="link">LINK</Button>
                <Button variant="outlined">OUTLINEDE</Button>
                <Button variant="text">TEXT</Button>
                <Button variant="tonal">TONAL</Button>
              </Row>
            </Card>
            <Hr variant="dashed" />
            <h2>Borderstyle:</h2>

            <Card
              style={{ maxWidth: "60rem", margin: "auto", padding: "50px" }}
            >
              <Row
                style={{
                  justifyContent: "center",
                }}
              >
                <Button variant="filled" borderStyle="none">
                  NONE
                </Button>
                <Button variant="filled" borderStyle="rounded">
                  ROUNDED
                </Button>
                <Button variant="filled" borderStyle="semi">
                  SEMI
                </Button>
              </Row>
            </Card>
          </Stack>
        </Container>
      </Main>
    </Container>
  );
}
