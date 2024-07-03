import { AppBar, Container } from "@yakad/ui";
import { Xpanel } from "@yakad/x";

export default function Page() {
  return (
    <Xpanel
      navigationChildren={<h1>Flame</h1>}
      name="Menu"
      appbarChildren={<h1>Oleg</h1>}
    >
      <Container maxWidth="md">
        <h2>Your content here</h2>
      </Container>
    </Xpanel>
  );
}
