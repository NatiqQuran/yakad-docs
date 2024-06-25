import { Card, Container, Hr } from "@yakad/ui";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Hr:</h1>
      <p style={{ fontSize: "1.5rem" }}>
        HR is a smooth line that by calling it you can see a beautiful line with
        various styles on your screen and you can also see it in different
        sizes. That is, you can create small, normal and large lines. You can
        browse the types of these lines below.
      </p>
      <Hr />

      <h1>Variant:</h1>
      <p style={{ fontSize: "1.5rem" }}>
        Here we have listed all kinds of HR features for you and given an
        example.
      </p>
      <Card>
        : <h1 style={{ fontSize: "1.5rem" }}>Normal Hr:</h1>
        <Hr marginTopBottom={3} />
        <h1 style={{ fontSize: "1.5rem" }}>Dashed Hr:</h1>
        <Hr marginTopBottom={3} variant="dashed" />
        <h1 style={{ fontSize: "1.5rem" }}>Dotted Hr:</h1>
        <Hr marginTopBottom={3} variant="dotted" />
        <h1 style={{ fontSize: "1.5rem" }}>ShortLine Hr:</h1>
        <Hr marginTopBottom={3} variant="shortLine" />
      </Card>
      <h1>Another Things:</h1>
      <p style={{ fontSize: "1.5rem" }}>
        Another feature of HR is that you can give HR a height and you can also
        give it a margin.
      </p>
      <h1>Example:</h1>
      <Card>
        <h1 style={{ fontSize: "1.5rem" }}>Hr Height:</h1>
        <Hr height={0.5} />
        <Hr height={1} />
        <Hr height={1.5} />
        <Hr height={2} />
      </Card>
    </Container>
  );
}
