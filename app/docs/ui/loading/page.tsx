import Symbol from "@yakad/symbols";
import {
    Button,
    Card,
    Container,
    GridContainer,
    GridItem,
    Stack,
    Hr,
    Loading,
    Row,
    Spacer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@yakad/ui";
import React from "react";

export default function Page() {
    return (
        <Container size="md">
            <h1>Loading</h1>
            <Hr />
            <p>This is a Loading from Yakad you can use to easy</p>
            <Card>
                <Row>
                    <span>
                        <code>{'import { Loading } from "@yakad/ui"'}</code>
                        <br />
                        <br />
                        <code>{"<Loading>Loading</Loading>"}</code>
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
                        <Td>size</Td>
                        <Td>
                            {
                                '"extraSmall" | "small" | "medium" | "large" | "extraLarge"'
                            }
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>variant</Td>
                        <Td>{'"scaleOut" | "dots" | "spinner"'}</Td>
                    </Tr>
                </Tbody>
            </Table>

            <h3>Variant</h3>
            <p>
                Loaders express an unspecified wait time or display the length
                of a process.
            </p>
            <GridContainer style={{ gridTemplateRows: "13rem" }}>
                <GridItem sm={12} xl={4}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading variant="dots" size="extraLarge" />
                        <Stack align="center">
                            <div>dots</div>
                        </Stack>
                    </Card>
                </GridItem>
                <GridItem sm={12} xl={4}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading variant="scaleOut" />
                        <Stack align="center">
                            <div>scaleOut</div>
                        </Stack>
                    </Card>
                </GridItem>
                <GridItem sm={12} xl={4}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading variant="spinner" />
                        <Stack align="center">
                            <div>spinner</div>
                        </Stack>
                    </Card>
                </GridItem>
            </GridContainer>

            <h3>Sizes</h3>
            <GridContainer columns={10} style={{ gridTemplateRows: "13rem" }}>
                <GridItem sm={12} md={5} xl={2}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading size="extraSmall" />
                        <div>extraSmall</div>
                    </Card>
                </GridItem>

                <GridItem sm={12} md={5} xl={2}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading size="small" />
                        <div>small</div>
                    </Card>
                </GridItem>
                <GridItem sm={12} md={5} xl={2}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading size="medium" />
                        <div>medium</div>
                    </Card>
                </GridItem>
                <GridItem sm={12} md={5} xl={2}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading size="large" />
                        <div>large</div>
                    </Card>
                </GridItem>
                <GridItem sm={12} md={5} xl={2}>
                    <Card
                        align="center"
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Loading size="extraLarge" />
                        <div>extraLarge</div>
                    </Card>
                </GridItem>
            </GridContainer>

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
    );
}
