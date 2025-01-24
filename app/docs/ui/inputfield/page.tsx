import {
    Button,
    Card,
    Container,
    GridContainer,
    GridItem,
    InputField,
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

import Example1 from "./example1";
import Example2 from "./example2";

export default function Page() {
    return (
        <>
            <Container size="md">
                <h1>Input Field</h1>
                <Hr />
                <p>Fields let users to input the text.</p>
                <Card>
                    <Row>
                        <span>
                            <code>
                                {'import { InputField } from "@yakad/ui"'}
                            </code>
                            <br />
                            <br />
                            <code>
                                {" <InputField>InputField</InputField> "}
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
                            <Td>variant</Td>
                            <Td>outlined | filled</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <h3>variant</h3>
                <p>
                    Input fields help you to request details from people in a
                    specific way. Variant is one of the features of the input
                    that changes the appearance of the input. And there are two
                    types of variants for the input field :
                </p>
                <Card>
                    <Row>
                        <p>1.</p>
                        <InputField
                            variant="outlined"
                            type="Email"
                            placeholder="outlined"
                        />
                        <p>2.</p>
                        <InputField
                            variant="filled"
                            type="password"
                            placeholder="filled"
                        />
                    </Row>
                </Card>
                <Row>
                    <p>
                        1. The first version of the period has a line and is
                        empty inside.
                    </p>
                </Row>
                <Row>
                    <p>
                        2. The second variant has an underline and is filled
                        inside.
                    </p>
                </Row>

                <h3>placeholder</h3>

                <p>
                    Placeholder is a feature that can be used to place anything
                    you want to be written on the inputs as an alternative.Most
                    people write the input type in a placeholder. But
                    placeholder has no rules about what you should write or not
                    write. It is up to you.
                </p>
                <h4>Some examples of inputs</h4>
                <Card>
                    <GridContainer>
                        <GridItem xl={6} lg={12}>
                            <p>3.</p>
                            <InputField
                                variant="outlined"
                                type="email"
                                placeholder="email outlined"
                            />
                        </GridItem>
                        <GridItem xl={6} lg={12}>
                            <p>4.</p>
                            <InputField
                                variant="outlined"
                                type="password"
                                placeholder="password outlined"
                            />
                        </GridItem>
                        <GridItem xl={6} lg={12}>
                            <p>5.</p>
                            <InputField
                                variant="filled"
                                type="email"
                                placeholder="email filled"
                            />
                        </GridItem>
                        <GridItem xl={6} lg={12}>
                            <p>6.</p>
                            <InputField
                                variant="filled"
                                type="password"
                                placeholder="password filled"
                            />
                        </GridItem>
                    </GridContainer>
                </Card>

                <h3>disabled:</h3>
                <p>You can&apos;t write any text in this type of inputs.</p>

                <Card>
                    <GridContainer>
                        <GridItem xl={6} lg={12}>
                            <InputField placeholder="Active Field" />
                            <InputField placeholder="Disable Field" disabled />
                            <InputField
                                placeholder="Disabled Field with value"
                                value="some value"
                                disabled
                            />
                        </GridItem>
                        <GridItem xl={6} lg={12}>
                            <InputField
                                variant="filled"
                                placeholder="Active Field"
                            />
                            <InputField
                                variant="filled"
                                placeholder="Disable Field"
                                disabled
                            />
                            <InputField
                                variant="filled"
                                placeholder="Disabled Field with value"
                                value="some value"
                                disabled
                            />
                        </GridItem>
                    </GridContainer>
                </Card>
            </Container>
            <Container size="md">
                <h2>Examples</h2>
                <h3>Example 1 : Login form</h3>
                <Example1 />

                <h3>Example 2 : Register</h3>
                <Example2 />
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
        </>
    );
}
