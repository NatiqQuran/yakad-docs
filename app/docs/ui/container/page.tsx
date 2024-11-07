import Symbol from "@yakad/symbols";
import {
    Button,
    Card,
    Container,
    Hr,
    Row,
    Spacer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@yakad/ui";
import Link from "next/link";

import Example1 from "./example1";

export default function Page() {
    return (
        <Container>
            <Container maxWidth="md">
                <h1>Container</h1>
                <Hr />
                <p>
                    The container centers your content horizontally. It's the
                    most basic layout element.
                </p>
                <Card>
                    <Row>
                        <span>
                            <code>
                                {'import { Container } from "@yakad/ui"'}
                            </code>
                            <br />
                            <br />
                            <code>{"<Container>Container</Container>"}</code>
                        </span>
                        <Spacer />
                        <Button icon={<Symbol icon="content_copy" />}></Button>
                    </Row>
                </Card>
                <h2>Properties</h2>
                <p>Properties that are accepted as attributes:</p>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Property</Th>
                            <Th>Value</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>align</Td>
                            <Td>start | center | end</Td>
                        </Tr>
                        <Tr>
                            <Td>maxWidth</Td>
                            <Td>{'"xs" | "sm" | "md" | "lg" | "xl"'}</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <h3>align</h3>
                <p>
                    With this property, you can easily move all the things you
                    put in the Container, that is, you can fold it in the middle
                    and simply fold it left or right.
                </p>
                <Container align="start" style={{ padding: "1rem" }}>
                    <Card>Start</Card>
                </Container>
                <Container align="center" style={{ padding: "1rem" }}>
                    <Card>center</Card>
                </Container>
                <Container align="end" style={{ padding: "1rem" }}>
                    <Card>end</Card>
                </Container>
            </Container>
            <Container maxWidth="md">
                <h3>maxWidth</h3>
                <p>
                    If you want to increase or decrease the size of your
                    container so that there is no problem in its responsiveness,
                    I suggest you this option.
                    <br />
                    (The difference in these sizes can be seen only on pages
                    with dimensions greater than 760 px.)
                </p>
            </Container>
            <Container>
                <Container
                    maxWidth="xl"
                    style={{ backgroundColor: "#585858" }}
                    align="center"
                >
                    <h3>Extera Large Container</h3>
                </Container>
                <br />
                <Container
                    maxWidth="lg"
                    style={{ backgroundColor: "#585858" }}
                    align="center"
                >
                    <h3>Large Container</h3>
                </Container>
                <br />
                <Container
                    maxWidth="md"
                    style={{ backgroundColor: "#585858" }}
                    align="center"
                >
                    <h3>medium</h3>
                </Container>
                <br />
                <Container
                    maxWidth="sm"
                    style={{ backgroundColor: "#585858" }}
                    align="center"
                >
                    <h3>Small</h3>
                </Container>
                <br />
                <Container
                    maxWidth="xs"
                    style={{ backgroundColor: "#585858" }}
                    align="center"
                >
                    <h3>Extera Small</h3>
                </Container>
            </Container>
            <Container maxWidth="lg">
                <Container maxWidth="md">
                    <h2>Examples</h2>
                    <h3>Example 1</h3>
                    <Example1 />
                </Container>

                <Container maxWidth="md">
                    <h2>Links</h2>
                    <a
                        target="_blank"
                        href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/theme"
                    >
                        Source code in github
                    </a>
                    <br />
                    <a
                        target="_blank"
                        href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/theme"
                    >
                        Source code in github
                    </a>
                </Container>
            </Container>
        </Container>
    );
}
