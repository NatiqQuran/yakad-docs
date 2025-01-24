import { Container } from "@yakad/ui";
import { Xbackground } from "@yakad/x";

export default function Example1() {
    return (
        <>
            <Container
                size="md"
                align="center"
                style={{ backgroundColor: "#404040" }}
            >
                <h2>Container 1</h2>
            </Container>
            <Container
                size="md"
                align="center"
                style={{ backgroundColor: "#585858" }}
            >
                <h2>Container 2</h2>
            </Container>
            <Container
                size="md"
                align="center"
                style={{ backgroundColor: "#696969" }}
            >
                <h2>Container 3</h2>
            </Container>
        </>
    );
}
