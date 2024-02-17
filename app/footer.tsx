import { Container, Footer, GridContainer, GridItem, Stack } from "@yakad/ui";

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
    <Stack style={{ gap: "3rem" }}>
      <h1 style={{ fontSize: "35px" }}>{props.name}</h1>
      {props.list.map((item, index) => (
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
  );
}

export default function IntroFooter() {
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
            <FooterList name="Links" list={links} />
          </GridItem>
          <GridItem xl={3}>
            <FooterList name="Pages" list={pages} />
          </GridItem>
          <GridItem xl={3}>
            <FooterList name="Social" list={social} />
          </GridItem>
        </GridContainer>
      </Container>
    </Footer>
  );
}
