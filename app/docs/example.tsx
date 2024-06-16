import Image from "next/image";
import {
  Button,
  Card,
  Container,
  Row,
  Spacer,
  GridContainer,
  GridItem,
} from "@yakad/ui";
import image1 from "../assets/png/sc1.png";
import image2 from "../assets/png/sc2.png";
import image3 from "../assets/png/sc3.png";

interface Example {
  name: string;
  link: string;
  image: any;
}

const examples: Array<Example> = [
  { name: "Natiq", link: "https://natiq.net/", image: image1 },
  { name: "Yakad", link: "https://yakad.natiq.net/", image: image2 },
  { name: "Quran Natiq", link: "https://quran.natiq.net/", image: image3 },
  { name: "Natiq", link: "https://natiq.net/", image: image1 },
];

export default function ExampleProjects() {
  return (
    <Container maxWidth="md">
      <h1 style={{ fontSize: "3rem" }}>Example Projects</h1>
      <p style={{ fontSize: "20px" }}>
        Dignissimos impedit excepturi adipisci eaque.
      </p>
      <GridContainer gap={3}>
        {examples.map((item, index) => (
          <GridItem xl={6} key={index}>
            <Card style={{ padding: 0 }}>
              <Image
                alt="Example 1"
                src={item.image}
                style={{ width: "100%", height: "unset" }}
              />
              <Row style={{ padding: "1rem 2.5rem" }}>
                <h2 style={{ fontSize: "2.4rem" }}>{item.name}</h2>
                <Spacer />
                <a href={item.link} target="_blank">
                  <Button variant="outlined">Visit</Button>
                </a>
              </Row>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
}
