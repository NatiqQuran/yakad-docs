"use client";

import {
    Card,
    Container,
    Hr,
    Tr,
    Table,
    Thead,
    Th,
    Tbody,
    Td,
    CodeBox,
    Button,
    Row,
} from "@yakad/ui";
import { XmenuList } from "@yakad/x";
import Symbol from "@yakad/symbols";
import Link from "next/link";

export default function Page() {
    const menuItems = [
        {
            name: "Overview",
            onclick: () => alert("/docs"),
        },
        {
            name: "Yakad UI",
            childs: [
                { name: "AppBar", onclick: () => alert("/docs/ui/appbar") },
                { name: "Button", onclick: () => alert("/docs/ui/button") },
                { name: "Card", onclick: () => alert("/docs/ui/card") },
                {
                    name: "InputField",
                    onclick: () => alert("/docs/ui/inputfield"),
                },
                {
                    name: "CodeField",
                    onclick: () => alert("/docs/ui/codefield"),
                },
                {
                    name: "Container",
                    onclick: () => alert("/docs/ui/container"),
                },
                { name: "Radio", onclick: () => alert("/docs/ui/Radio") },
                { name: "Checkbox", onclick: () => alert("/docs/ui/checkbox") },
                { name: "grid", onclick: () => alert("/docs/ui/grid") },
                { name: "hr", onclick: () => alert("/docs/ui/hr") },
                {
                    name: "clickAwayListiner",
                    onclick: () => alert("/docs/clickawaylistiner"),
                },
                { name: "Footer", onclick: () => alert("/docs/footer") },
            ],
        },

        {
            name: "Yakad X",
            childs: [
                {
                    name: "Xbackground",
                    onclick: () => alert("/docs/X/Xbackground"),
                },
                {
                    name: "XgetStart",
                    onclick: () => alert("/docs/X/XgetStart"),
                },
                {
                    name: "XloginBox",
                    onclick: () => alert("/docs/X/XloginBox"),
                },

                { name: "Xmenu", onclick: () => alert("/docs/X/Xmenu") },
                { name: "Xpanel", onclick: () => alert("/docs/X/Xpanel") },
                { name: "Xtable", onclick: () => alert("/docs/X/Xtable") },
            ],
        },
        { name: "Yakad Symbol", onclick: () => alert("/docs/symbol") },
        {
            name: "Yakad Lib",
        },
    ];

    return (
        <Container size="md">
            <h1>XmenuList</h1>
            <Hr />
            <p>A simple fast XmenuList</p>
            <CodeBox>
                <code>{'import { XmenuList } from "@yakad/x";'}</code>
                <br />
                <br />
                <code>{"<XmenuList menuItems={menuItems} />"}</code>
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
                        <Td>name</Td>
                        <Td>string</Td>
                    </Tr>
                    <Tr>
                        <Td>onclicks</Td>
                        <Td>function</Td>
                    </Tr>
                    <Tr>
                        <Td>childs</Td>
                        <Td>MenuItemChild</Td>
                    </Tr>
                    <Tr>
                        <Td>selected</Td>
                        <Td>boolean</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h2>Properties</h2>
            <h3>Data Example</h3>
            <Card style={{ maxWidth: "40rem" }}>
                <XmenuList menuitems={menuItems} />
            </Card>
            <h2>Useaful Links</h2>
            <Row>
                <Link
                    href="https://github.com/NatiqQuran/yakad/tree/main/packages/x/XmenuList"
                    target="_blank"
                >
                    <Button
                        size="large"
                        variant="link"
                        icon={<Symbol icon="link" />}
                    >
                        XmenuList Source code
                    </Button>
                </Link>
                <Link
                    href="https://github.com/NatiqQuran/yakad-docs/tree/main/app/docs/X/Xmenu"
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
