import Symbol from "@yakad/symbols";
import {
    Button,
    Card,
    Container,
    Hr,
    RadioButton,
    RadioGroup,
    Row,
    Spacer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@yakad/ui";

export default function Page() {
    return (
        <Container size="md">
            <h1>Radio Group & Radio Button</h1>
            <Hr />
            <p>
                Radio Group allow users to select a single option from a list of
                mutually exclusive options.
            </p>
            <Card>
                <Row>
                    <span>
                        <code>{'import { Radio } from "@yakad/ui"'}</code>
                        <br />
                        <br />
                        <code>
                            {"<RadioGroup><RadioButton /></RadioGroup>"}
                        </code>
                    </span>
                    <Spacer />
                    <Button icon={<Symbol icon="content_copy" />}></Button>
                </Row>
            </Card>

            <h2>Properties</h2>
            <h3>Radio Group Props</h3>
            <p>Radio Group Properties that are accepted as attributes:</p>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>name</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>defaultValue</Td>
                        <Td>string</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h3>Radio Button Props</h3>
            <p>Radio Button Properties that are accepted as attributes:</p>

            <Table>
                <Thead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>nameFromRadioGroup</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>label</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>value</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>defaultValue</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>checked</Td>
                        <Td>boolean</Td>
                    </Tr>
                    <Tr>
                        <Td>disabled</Td>
                        <Td>boolean</Td>
                    </Tr>
                    <Tr>
                        <Td>handleChecked</Td>
                        <Td>function</Td>
                    </Tr>
                    <Tr>
                        <Td>handleDefaultChecked</Td>
                        <Td>function</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h3>Default Value and Value</h3>
            <p>
                In this section, we give the default value to the radio group
                and the value to the radio button and set a value for each. If
                the default value is equal to any radio button value, that radio
                button will be checked.
            </p>
            <Card>
                <h3>Default Value =&gt;one</h3>
                <RadioGroup name="B" defaultvalue="one">
                    <RadioButton value="zero" label="value = Zero" />
                    <RadioButton value="one" label="value = One" />
                    <RadioButton value="two" label="value = two" />
                </RadioGroup>
            </Card>
            <h3>Label</h3>
            <p>
                We write the label in the radio button. The characteristic of
                the label is that it shows the value we write next to the radio
                button and creates a space between the radio button and the
                label value.
            </p>
            <Card>
                <RadioGroup name="C">
                    <RadioButton label="zero" value="a" />
                    <RadioButton label="one" value="b" />
                    <RadioButton label="two" value="c" />
                </RadioGroup>
            </Card>

            <h3>disabled</h3>
            <p>
                This feature makes us unable to click on the radio button and it
                is not checked.
            </p>
            <Card style={{ marginBottom: "3rem" }}>
                <RadioGroup name="E">
                    <RadioButton value="bir" label="enable" />
                    <RadioButton value="iki" label="disable" disabled />
                </RadioGroup>
            </Card>

            <h2>Examples</h2>

            <h3>Example 1</h3>
            <Card style={{ maxWidth: "60rem" }}>
                <h3>Choose the color you want!</h3>
                <Hr />
                <RadioGroup name="Example">
                    <RadioButton value="num1" label="Blue" />
                    <RadioButton value="num2" label="Red" />
                    <RadioButton value="num3" label="Yellow" />
                </RadioGroup>
                <Row align="end" style={{ marginTop: "20px" }}>
                    <Button variant="outlined">CLOSE</Button>
                    <Button variant="filled">ENTER</Button>
                </Row>
            </Card>

            <h3>Example 2</h3>

            <Card style={{ maxWidth: "60rem" }}>
                <h3>How do you think our site is?</h3>
                <Hr />
                <RadioGroup name="Example">
                    <RadioButton value="n1" label="Excellent" />
                    <RadioButton value="n2" label="Good" />
                    <RadioButton value="n3" label="Not Bad" />
                    <RadioButton value="n4" label="Bad" />
                </RadioGroup>
                <Row align="center">
                    <Button variant="filled">Comment</Button>
                </Row>
                <Hr />
                <Row align="center" style={{ marginTop: "2rem" }}>
                    <Button variant="outlined">Yes</Button>
                    <h3>Do you like these questions?</h3>
                    <Button variant="outlined">No</Button>
                </Row>
            </Card>
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
