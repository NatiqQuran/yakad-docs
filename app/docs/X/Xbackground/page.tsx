import Link from "next/link";
import {
    Container,
    Hr,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    GridContainer,
    GridItem,
    CodeBox,
    Button,
    Row,
} from "@yakad/ui";
import { Xbackground } from "@yakad/x";
import Symbol from "@yakad/symbols";

import backgroundImage from "./sky.webp";

export default function Page() {
    return (
        <Container size="md">
            <h1>Xbackground</h1>
            <Hr />
            <p>A simple fast intro Xbackground</p>
            <CodeBox>
                <code>{'import { Xbackground } from "@yakad/x";'}</code>
                <br />
                <br />
                <code>{"<Xbackground>Contenet</Xbackground>"}</code>
            </CodeBox>
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
                        <Td>variant</Td>
                        <Td>dotted | strips</Td>
                    </Tr>
                    <Tr>
                        <Td>separator</Td>
                        <Td>shadowinside | shadowoutside</Td>
                    </Tr>
                    <Tr>
                        <Td>backgroundimage</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>backgroundfixed</Td>
                        <Td>boolean</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h2>Properties</h2>
            <h3>variant</h3>
            <GridContainer>
                <GridItem sm={12} xl={6}>
                    <Xbackground
                        variant="dotted"
                        style={{ minHeight: "20rem" }}
                    >
                        <Container>Dotted</Container>
                    </Xbackground>
                </GridItem>
                <GridItem sm={12} xl={6}>
                    <Xbackground
                        variant="strips"
                        style={{ minHeight: "20rem" }}
                    >
                        <Container>Strips</Container>
                    </Xbackground>
                </GridItem>
            </GridContainer>
            <h3>separator</h3>
            <GridContainer>
                <GridItem sm={12} xl={6}>
                    <Xbackground
                        separator="shadowinside"
                        variant="dotted"
                        style={{ minHeight: "20rem" }}
                    >
                        <Container>shadowinside</Container>
                    </Xbackground>
                </GridItem>
                <GridItem sm={12} xl={6}>
                    <Xbackground
                        separator="shadowoutside"
                        variant="dotted"
                        style={{ minHeight: "20rem" }}
                    >
                        <Container>shadowoutside</Container>
                    </Xbackground>
                </GridItem>
            </GridContainer>
            <h3>backgroundImage</h3>
            <Xbackground
                image={backgroundImage}
                style={{ minHeight: "20rem", color: "#000" }}
            >
                <Container>image in background</Container>
            </Xbackground>
            <h3>backgroundFixed</h3>
            <GridContainer>
                <GridItem sm={12} xl={6}>
                    <Xbackground
                        image={backgroundImage}
                        fixed={true}
                        style={{ minHeight: "20rem", color: "#000" }}
                    >
                        <Container>true</Container>
                    </Xbackground>
                </GridItem>
                <GridItem sm={12} xl={6}>
                    <Xbackground
                        image={backgroundImage}
                        fixed={false}
                        style={{ minHeight: "20rem", color: "#000" }}
                    >
                        <Container>false</Container>
                    </Xbackground>
                </GridItem>
            </GridContainer>
            <h2>Useaful Links</h2>
            <Row>
                <Link
                    href="https://github.com/NatiqQuran/yakad/tree/main/packages/x/Xbackground"
                    target="_blank"
                >
                    <Button
                        size="large"
                        variant="link"
                        icon={<Symbol icon="link" />}
                    >
                        Xbackground Source code
                    </Button>
                </Link>
                <Link
                    href="https://github.com/NatiqQuran/yakad-docs/tree/main/app/docs/X/Xbackground"
                    target="_blank"
                >
                    <Button
                        size="large"
                        variant="link"
                        icon={<Symbol icon="link" />}
                    >
                        This Page Source code
                    </Button>
                </Link>
            </Row>
        </Container>
    );
}
