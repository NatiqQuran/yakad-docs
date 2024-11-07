import Symbol from "@yakad/symbols";
import {
    Button,
    Card,
    Chekbox,
    Container,
    Hr,
    InputField,
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
    const disabledConfirmButton = () => {};

    return (
        <Container maxWidth="md">
            <h1>Checkbox</h1>
            <Hr />
            <p>
                Checkboxes allow the user to select one or more items from a
                set.
            </p>
            <Card>
                <Row>
                    <span>
                        <code>{'import { Checkbox } from "@yakad/ui"'}</code>
                        <br />
                        <br />
                        <code>{"<Checkbox />"}</code>
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
                        <Td>label</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>checked</Td>
                        <Td>True | False</Td>
                    </Tr>
                    <Tr>
                        <Td>disabled</Td>
                        <Td>True | False</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h3>label</h3>
            <p>
                The characteristic of the label is that it shows the value we
                write next to the Checkbox and creates a space between the
                Checkbox and the label value.
            </p>
            <Card>
                <Chekbox label="Test" />
            </Card>

            <h3>checked</h3>
            <p>With this feature, you can put your checkbox in tick mode.</p>
            <Card>
                <Chekbox checked label="checked" />
                <Chekbox label="not checked" />
                <Chekbox label="checked" checked />
                <Chekbox label="not checked" />
            </Card>
            <h3>disabled</h3>
            <p>
                This feature makes us unable to click on the Checkbox and it is
                not checked.
            </p>
            <Card>
                <Chekbox label="inabled" />
                <Chekbox label="disabled" disabled />
            </Card>
            <h2>Examples</h2>
            <h3>Example 1</h3>
            <Card style={{ maxWidth: "70rem" }}>
                <h3>Tick whichever one you like.</h3>
                <Chekbox label="Do you accept the rules of the site?" />
                <Chekbox label="Do you want to be notified of the site?" />
                <Chekbox label="Do you want us to play music for you?" />
                <Chekbox label="Do you want the page to Refresh?" />
            </Card>
            <h3>Example 2</h3>
            <Card style={{ maxWidth: "50rem" }}>
                <h3>A variety of features:</h3>
                <Hr />

                <h3>Disabled</h3>
                <Chekbox label="inabled" />
                <Chekbox disabled label="disabled" />
                <Hr />
                <h3>Checked</h3>
                <Chekbox checked label="checked" />
                <Chekbox label="not checked" />
                <Chekbox checked disabled label="dissabled checked" />
            </Card>
            <h3>Example 3</h3>
            <Card style={{ maxWidth: "50rem" }}>
                <Row align="center">
                    <Symbol icon="login" />
                    <h3>Sign Up</h3>
                </Row>
                <Hr />
                <h3>Enter your Username:</h3>
                <InputField placeholder="Username" type="name" />
                <h3>Enter your Password:</h3>
                <InputField placeholder="Password" type="password" />
                <Chekbox label="Remember My Password" />
                <Hr />
                <Chekbox label="You must accept the rules to Confirm!" />
                <Row align="center" style={{ marginTop: "2rem" }}>
                    <Button variant="elevated" disabled>
                        Confirm
                    </Button>
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
