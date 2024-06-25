"use client";

import { Container, Card, ClickAwayListener } from "@yakad/ui";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Click Away Listiner</h1>
      <h1>Example :</h1>
      <ClickAwayListener
        onClickAway={() => alert("You click of the out side card")}
        style={{ width: "100%" }}
      >
        <Card>
          <h1 style={{ textAlign: "center" }}>
            if you click on the card nothing happens
          </h1>
        </Card>
      </ClickAwayListener>
    </Container>
  );
}
