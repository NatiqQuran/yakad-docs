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

export default function Home() {
  return (
    <Page>
      <AppBar>
        <h1>Yakad</h1>
        <Spacer />
        <Button variant="link">Help</Button>
        <Button variant="link">About us</Button>
      </AppBar>
      <Main>
        <Container maxWidth="lg">
          <Row>
            <Link href="./docs">
              <Button variant="filled">documents</Button>
            </Link>
          </Row>
        </Container>
      </Main>
      <Footer>
        <a href="https://github.com/NatiqQuran/yakad">
          <Button variant="link">github</Button>
        </a>
      </Footer>
    </Page>
  );
}
