import {
  AppBar,
  Button,
  Card,
  Container,
  Footer,
  GridContainer,
  GridItem,
  Hr,
  Main,
  Page as Pg,
  Row,
  Spacer,
  Stack,
  SvgIcon,
} from "@yakad/ui";
import Link from "next/link";
import LogoIcon from "./logoicon";
import Natiq from "./Natiq";
import { Getstart, Cards } from "./content";

export default function Home() {
  return (
    <Pg>
      <IntroHeader />
      <Main>
        <Getstart />
        <Cards />
        <IntroFooter />
      </Main>
    </Pg>
  );
}

function IntroHeader() {
  return (
    <AppBar style={{ padding: "3rem" }}>
      <SvgIcon size={5}>
        <LogoIcon />
      </SvgIcon>
      <h1>Yakad</h1>
      <Spacer />
      <Link href="./docs">
        <Button variant="text">documents</Button>
      </Link>
      <a href="https://github.com/NatiqQuran/yakad">
        <Button variant="text">github</Button>
      </a>
    </AppBar>
  );
}

function IntroFooter() {
  const links = [
    { name: "Natiq", href: "https://natiq.net" },
    { name: "Control Panel", href: "https://natiq.net" },
    { name: "Blog", href: "https://blog.natiq.net/" },
    { name: "Qamar", href: "https://qamar.natiq.net/" },
  ];

  const pages = [
    { name: "About", href: "https://natiq.net" },
    { name: "Sponsor", href: "https://natiq.net" },
    { name: "Team", href: "https://blog.natiq.net/" },
    { name: "vision", href: "https://qamar.natiq.net/" },
  ];

  const social = [
    { name: "Github", href: "https://natiq.net" },
    { name: "twitter", href: "https://natiq.net" },
    { name: "Telegram", href: "https://blog.natiq.net/" },
  ];

  return (
    <Footer>
      <Container maxWidth="lg">
        <GridContainer>
          <GridItem xl={3}>
            <Stack style={{ gap: "3rem" }}>
              <h1 style={{ fontSize: "35px" }}>Links</h1>
              {links.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  style={{
                    fontSize: "2rem",
                    color: "#fff",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </Stack>
          </GridItem>
          <GridItem xl={3}>
            <Stack style={{ gap: "3rem" }}>
              <h1 style={{ fontSize: "35px" }}>Pages</h1>
              {pages.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  style={{
                    fontSize: "2rem",
                    color: "#fff",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </Stack>
          </GridItem>
          <GridItem xl={3}>
            <Stack>
              <h1 style={{ fontSize: "35px" }}>Social</h1>
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  style={{
                    fontSize: "2rem",
                    color: "#fff",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </Stack>
          </GridItem>
          <GridItem xl={3}>
            <Stack style={{ alignItems: "center" }}>
              <SvgIcon size={25}>
                <Natiq />
              </SvgIcon>
              <Row>
                <h1 style={{ fontSize: "30px", margin: "0" }}>Made by</h1>
                <a
                  href="https://natiq.net"
                  style={{
                    fontSize: "30px",
                    color: "white",
                    margin: "0",
                  }}
                >
                  <b>Natiq</b>
                </a>
              </Row>
            </Stack>
          </GridItem>
        </GridContainer>
      </Container>
    </Footer>
  );
}
