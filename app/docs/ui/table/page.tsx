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
import React from "react";
import Example1 from "../card/example1";

export default function Page() {
    const disabledConfirmButton = () => {};

    return (
        <Container maxWidth="md">
            <h1>Table</h1>
            <Hr />
            <p>
                Tables are used to display tabular data using rows and columns.
            </p>
            <Card>
                <Row>
                    <span>
                        <code>{'import { Table } from "@yakad/ui"'}</code>
                        <br />
                        <br />
                        <code>
                            {
                                "<Table> <Thead><Tr><Th></Th></Tr></Thead> <Tbody><Tr><Td></Td></Tr></Tbody> </Table> "
                            }
                        </code>
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
                        <Td>Style</Td>
                        <Td>string</Td>
                    </Tr>
                </Tbody>
            </Table>

            <h3>Styles</h3>
            <p>
                This table has a different and unique style that anyone who sees
                these tables feels the order. On the one hand, the order is
                excellent and on the other hand, the beauty of his styles has
                diversified.
            </p>
            <Table style={{ maxWidth: "60rem" }}>
                <Thead>
                    <Tr>
                        <Th>Style</Th>
                        <Th>Discipline</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Good!</Td>
                        <Td>Good!</Td>
                    </Tr>
                </Tbody>
            </Table>
            <p>
                these are only a part of this table that you can use to
                understand more about its features.
            </p>

            <h2>Examples</h2>
            <h3>Example 1</h3>
            <Table>
                <Thead>
                    <Tr>
                        <Th>For which networks?</Th>
                        <Th>who can use?</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Row>
                                <p>For all networks</p>{" "}
                                <Symbol icon="desktop_windows" />
                            </Row>
                        </Td>
                        <Td>Those who have installed Yakad</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h3>Example 2</h3>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Year</Th>
                        <Th>Month</Th>
                        <Th>Day</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>2024</Td>
                        <Td>July</Td>
                        <Td>3</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h3>Example 3</h3>
            <Example1 />

            <a
                href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar"
                target="_blank"
            >
                <h3>Source code in github</h3>
            </a>
        </Container>
    );
}
