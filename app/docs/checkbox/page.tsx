import { Card, Chekbox, Container } from "@yakad/ui";

export default function DocsCheckBox() {
  return (
    <Container maxWidth="lg">
      <h1 style={{ fontSize: "25px" }}>What is a checkbox?</h1>
      <h2 style={{ fontSize: "20px" }}>
        A check box is a small box that a tick appears on when you click on it.
        Check boxes are used to confirm something.
      </h2>
      <Card style={{ maxWidth: "70rem" }}>
        <h1>Tick ​​whichever one you like.</h1>
        <Chekbox label="I accept the rules of the site." />
        <Chekbox label="" />
        <Chekbox label="" />
        <Chekbox label="" />
      </Card>
    </Container>
  );
}
