import {
    Button,
    Card,
    Container,
    Row,
    Hr,
    Spacer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from "@yakad/ui";

import Symbol from "@yakad/symbols";

export default function Page() {
    return (
        <Container maxWidth="md">
            <h1>Row</h1>
            <Hr />
            <p>To put aside an object or several rows.</p>
            <Card>
                <Row>
                    <span>
                        <code>{'import { Row } from "@yakad/ui"'}</code>
                        <br />
                        <br />
                        <code>{"<Row>Row</Row>"}</code>
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
                </Tbody>
            </Table>
            <h3>align</h3>
            <p>
                With this property, you can easily move all the things you put
                in the card, that is, you can fold it in the middle and simply
                fold it left or right.
            </p>
            <Card>
                <Row>
                    <Row>
                        <p>Start</p>
                    </Row>
                    <Row align="center">
                        <p>Center</p>
                    </Row>
                    <Row align="end">
                        <p>End</p>
                    </Row>
                </Row>
            </Card>
            <h2>Example</h2>
            <h3>Example 1</h3>
            <Row>
                <Card></Card>
                <Card></Card>
            </Row>
            <p>Here are two cards in the row.</p>
            <h3>Example 2</h3>

            <Row>
                <Table style={{ maxWidth: "50rem" }}>
                    <Thead>
                        <Tr>
                            <Th>name</Th>
                            <Th>number</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>yakad</Td>
                            <Td>1</Td>
                        </Tr>
                        <Tr>
                            <Td>Owerviow</Td>
                            <Td>2</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <p>
                    One of our most prominent works is the table, which has a
                    special beauty and continuity, and it is much easier to work
                    with it, and you can do many things with this table.Among
                    the tasks, you can easily place the list of pages you have
                    created in the table so that you don&apos;t forget how many
                    pages you have and what their names are. And secondly, if
                    you follow the form that we have given in the table, your
                    work will be much easier and more beautiful.
                </p>
            </Row>
            <p>
                Here you can see that the table and explanation are written in
                the side, which causes this row.
            </p>
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
