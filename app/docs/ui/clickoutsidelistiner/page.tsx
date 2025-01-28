"use client";

import { Container, Card, ClickOutsideListener } from "@yakad/ui";

export default function Page() {
    return (
        <Container size="md">
            <h1>Click Outside Listener</h1>
            <h1>Example :</h1>
            <ClickOutsideListener
                onclickoutside={() => alert("You click of the out side card")}
                style={{ width: "100%" }}
            >
                <Card>
                    <h1 style={{ textAlign: "center" }}>
                        if you click on the card nothing happens
                    </h1>
                </Card>
            </ClickOutsideListener>
        </Container>
    );
}
