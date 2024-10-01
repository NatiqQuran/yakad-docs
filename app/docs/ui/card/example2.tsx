import Image from "next/image";
import { Container, Row, Card } from "@yakad/ui";

import imagepctm1 from "./jpg/pctm1.jpg";
import imagepctm2 from "./jpg/pctm2.jpg";

export default function Example2() {
  return (
    <Container maxWidth="sm">
      <Row style={{ marginBottom: "1.5rem" }}>
        <Image
          src={imagepctm1}
          alt="pic"
          width="45"
          height="45"
          style={{ borderRadius: "50%" }}
        />
        <Card
          style={{
            padding: "2rem",
            marginBottom: "1rem",
            maxWidth: "30rem",
            margin: "0",
          }}
        >
          <p style={{ fontSize: "1.8rem", margin: 0 }}>
            Hey! My name is Martis. What is your name?
          </p>
        </Card>
      </Row>
      <Row align="end" style={{ marginBottom: "1.5rem" }}>
        <Card style={{ marginBottom: "1rem", maxWidth: "30rem", margin: "0" }}>
          <Row>
            <p style={{ fontSize: "1.8rem", margin: "0" }}>
              Hi! My name is Leycci.
            </p>
          </Row>
        </Card>
        <Image
          src={imagepctm2}
          alt="pic"
          width="45"
          height="45"
          style={{ borderRadius: "50%" }}
        />
      </Row>
      <Row style={{ marginBottom: "1.5rem" }}>
        <Image
          src={imagepctm1}
          alt="pic"
          width="45"
          height="45"
          style={{ borderRadius: "50%" }}
        />
        <Card style={{ maxWidth: "30rem", margin: "0" }}>
          <p style={{ fontSize: "1.8rem", margin: "0" }}>
            Leycci have you ever used Yakad Cards?
          </p>
        </Card>
      </Row>
      <Row align="end">
        <Card style={{ marginBottom: "1rem", maxWidth: "30rem", margin: "0" }}>
          <p style={{ fontSize: "1.8rem", margin: "0", marginLeft: "2rem" }}>
            Yes. It`s very good! I like it.
          </p>
        </Card>
        <Image
          src={imagepctm2}
          alt="pic"
          width="45"
          height="45"
          style={{ borderRadius: "50%" }}
        />
      </Row>
    </Container>
  );
}
