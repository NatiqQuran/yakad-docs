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
  const links = [
    { name: "Natiq", href: "https://natiq.net" },
    { name: "Control Panel", href: "https://panel.natiq.net/" },
    { name: "Blog", href: "https://blog.natiq.net/" },
    { name: "Qamar", href: "https://qamar.natiq.net/" },
  ];

  const pages = [
    { name: "About", href: "https://blog.natiq.net/about/" },
    { name: "Sponsor", href: "https://blog.natiq.net/sponsor/" },
    { name: "Team", href: "https://blog.natiq.net/team/" },
    { name: "vision", href: "https://blog.natiq.net/vision/" },
  ];

  const social = [
    { name: "Github", href: "https://github.com/NatiqQuran/yakad" },
    { name: "twitter", href: "https://twitter.com/NatiqQuran" },
    { name: "Telegram", href: "https://t.me/NatiqQuran" },
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
                <a
                  href="https://natiq.net"
                  style={{
                    fontSize: "22px",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Natiq
                </a>
                <p style={{ fontSize: "22px", margin: "0", color: "#808080" }}>
                  Natiq Quran dev team
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
            Designed by Yakad
          </p>
        </Container>
      </Footer>
    </Stack>
  );
}
