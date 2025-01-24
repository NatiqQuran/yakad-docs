import {
    Button,
    Card,
    Container,
    GridContainer,
    GridItem,
    Hr,
    Row,
    Spacer,
    Stack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

import { IconCode } from "@yakad/symbols";

interface iconCardsProps {
    symbol: IconCode;
}

const iconCardsList: iconCardsProps[] = [
    { symbol: "sip" },
    { symbol: "mic" },
    { symbol: "self_improvement" },
    { symbol: "newspaper" },
    { symbol: "light_mode" },
    { symbol: "dark_mode" },
];

export default function Page() {
    return (
        <Container size="md">
            <h1>Grid</h1>
            <Hr />
            <p>
                The layout Grid adapts to screen size and orientation, ensuring
                consistency across layouts.
            </p>
            <Card>
                <Row>
                    <span>
                        <code>
                            {
                                'import { GridContainer, GridItem } from "@yakad/ui"'
                            }
                        </code>
                        <br />
                        <br />
                        <code>
                            {
                                "<GridContainer><GridItem></GridItem></GridContainer>"
                            }
                        </code>
                    </span>
                    <Spacer />
                    <Button icon={<Symbol icon="content_copy" />}></Button>
                </Row>
            </Card>

            <h2>Properties</h2>
            <p>Properties that are accepted as attributes:(Grid Item)</p>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>xs</Td>
                        <Td>
                            1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>sm</Td>
                        <Td>
                            1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>md</Td>
                        <Td>
                            1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>lg</Td>
                        <Td>
                            1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>xl</Td>
                        <Td>
                            1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <p>Properties that are accepted as attributes:(Grid Container)</p>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>columns</Td>
                        <Td>10 | 12</Td>
                    </Tr>
                    <Tr>
                        <Td>gap (rem)</Td>
                        <Td>number</Td>
                    </Tr>
                </Tbody>
            </Table>

            <h3>columns</h3>
            <p>
                With this property, you decide that the page you want is divided
                into several columns.
            </p>
            <GridContainer columns={10}>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
            </GridContainer>
            <Hr />
            <GridContainer columns={12}>
                <GridItem xs={2} sm={1} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={1} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
                <GridItem xs={2} sm={2} xl={1}>
                    <Card></Card>
                </GridItem>
            </GridContainer>

            <h3>gap</h3>
            <p>The use of the gap is to create a gap between the grid items.</p>
            <GridContainer gap={20} columns={12}>
                <GridItem>
                    <Card></Card>
                </GridItem>
                <GridItem>
                    <Card></Card>
                </GridItem>
            </GridContainer>

            <h3>xs</h3>
            <p>
                These properties are for the responsive page that xs sets the
                x-small mode.xs works from size 0 to 444px.That is, you enter a
                number from 1 to 10 or 12 and your page is divided by that
                number.
            </p>

            <h3>sm</h3>
            <p>
                sm sets the small mode.sm works from size 444px to 600px.That
                is, you enter a number from 1 to 10 or 12 and your page is
                divided by that number.
            </p>

            <h3>md</h3>
            <p>
                md sets the medium mode.md works from size 600px to 900px.That
                is, you enter a number from 1 to 10 or 12 and your page is
                divided by that number.
            </p>

            <h3>lg</h3>
            <p>
                lg sets the large mode.lg works from size 900px to 1200px.That
                is, you enter a number from 1 to 10 or 12 and your page is
                divided by that number.
            </p>

            <h3>xl</h3>
            <p>
                xl sets the x-large mode.xl works from size 1200px To
                infinity.That is, you enter a number from 1 to 10 or 12 and your
                page is divided by that number.
            </p>

            <h2>Examples</h2>
            <h3>Example 1:</h3>
            <Stack style={{ width: "100%" }}>
                <GridContainer columns={12}>
                    <GridItem xl={6}>
                        <Card></Card>
                    </GridItem>
                    <GridItem xl={6}>
                        <Card></Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xl={4}>
                        <Card></Card>
                    </GridItem>
                    <GridItem xl={4}>
                        <Card></Card>
                    </GridItem>
                    <GridItem xl={4}>
                        <Card></Card>
                    </GridItem>
                </GridContainer>
                <GridContainer columns={10}>
                    <GridItem xl={2}>
                        <Card></Card>
                    </GridItem>
                    <GridItem xl={2}>
                        <Card></Card>
                    </GridItem>
                    <GridItem xl={2}>
                        <Card></Card>
                    </GridItem>
                    <GridItem xl={2}>
                        <Card></Card>
                    </GridItem>
                    <GridItem xl={2}>
                        <Card></Card>
                    </GridItem>
                </GridContainer>
            </Stack>

            <h3>Example 2:</h3>

            <GridContainer>
                <GridItem xs={6} xl={3}>
                    <Card align="center">
                        <Symbol icon="handshake" />
                    </Card>
                </GridItem>
                <GridItem xs={6} xl={3}>
                    <Card align="center">
                        <Symbol icon="cabin" />
                    </Card>
                </GridItem>
                <GridItem xs={6} xl={3}>
                    <Card align="center">
                        <Symbol icon="vape_free" />
                    </Card>
                </GridItem>
                <GridItem xs={6} xl={3}>
                    <Card align="center">
                        <Symbol icon="backpack" />
                    </Card>
                </GridItem>
            </GridContainer>

            <h3>Example 3</h3>

            <GridContainer style={{ marginBottom: "2rem" }}>
                <GridItem xs={12} md={6} xl={4}>
                    <Card align="center">
                        <Symbol icon="comment" />
                        <p>Comment</p>
                    </Card>
                </GridItem>
                <GridItem xs={12} md={6} xl={4}>
                    <Card align="center">
                        <Symbol icon="mode" />
                        <p>Condition</p>
                    </Card>
                </GridItem>
                <GridItem xs={12} md={6} xl={4}>
                    <Card align="center">
                        <Symbol icon="light_mode" />
                        <p>Mode</p>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                {iconCardsList.map((iconCardsProps, index) => (
                    <GridItem key={index} xs={6} md={3} xl={2}>
                        <Card align="center">
                            <Symbol icon="cable" />
                            <p>Relationship</p>
                        </Card>
                    </GridItem>
                ))}
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
GridItem;
