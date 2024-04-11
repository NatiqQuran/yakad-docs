import {
  Container,
  Footer,
  GridContainer,
  GridItem,
  Row,
  Stack,
  SvgIcon,
} from "@yakad/ui";
import NatiqLogo from "./NatiqLogo";

interface ListLink {
  name: string;
  href: string;
}

interface FooterListProps {
  name: string;
  list: ListLink[];
}

function FooterList(props: FooterListProps) {
  return (
    <Stack>
      <h1 style={{ fontSize: "22px" }}>{props.name}</h1>
      {props.list.map((item, index) => (
        <a
          key={index}
          href={item.href}
          style={{
            fontSize: "2rem",
            color: "#808080",
          }}
        >
          {item.name}
        </a>
      ))}
    </Stack>
  );
}

export default function IntroFooter() {
  const links: ListLink[] = [
    { name: "Natiq", href: "https://natiq.net" },
    { name: "Yakad", href: "https://yakad.natiq.net/" },
    { name: "Qamar", href: "https://qamar.natiq.net/" },
    { name: "Blog", href: "https://blog.natiq.net/" },
    { name: "Developers", href: "https://developer.natiq.net/" },
    { name: "Control Panel", href: "https://control.natiq.net/" },
  ];

  const pages: ListLink[] = [
    { name: "About", href: "https://blog.natiq.net/about/" },
    { name: "vision", href: "https://blog.natiq.net/vision/" },
    { name: "Team", href: "https://blog.natiq.net/team/" },
    { name: "Sponsor", href: "https://blog.natiq.net/sponsor/" },
  ];

  const social: ListLink[] = [
    { name: "Telegram", href: "https://t.me/NatiqQuran" },
    { name: "X/twitter", href: "https://twitter.com/NatiqQuran" },
    { name: "Github", href: "https://github.com/NatiqQuran/yakad" },
  ];

  return (
    <Stack style={{ gap: "0" }}>
      <Footer style={{ padding: "8rem 0 5rem " }}>
        <Container maxWidth="lg">
          <GridContainer>
            <GridItem xl={6}>
              <Stack>
                <SvgIcon size={5}>
                  <NatiqLogo />
                </SvgIcon>
                <h2
                  style={{
                    fontSize: "22px",
                    margin: "0",
                  }}
                >
                  Natiq
                </h2>
                <p style={{ fontSize: "22px", margin: "0", color: "#7d7d7d" }}>
                  Natiq Developer Team
                </p>
              </Stack>
            </GridItem>
            <GridItem xl={2}>
              <FooterList name="Links" list={links} />
            </GridItem>
            <GridItem xl={2}>
              <FooterList name="Pages" list={pages} />
            </GridItem>
            <GridItem xl={2}>
              <FooterList name="Social" list={social} />
            </GridItem>
          </GridContainer>
        </Container>
      </Footer>
      <Footer>
        <Container maxWidth="lg">
          <p style={{ fontSize: "22px", color: "#808080" }}>
            Designed by <a href="https://yakad.natiq.net"> Yakad</a>
          </p>
        </Container>
      </Footer>
    </Stack>
  );
}
