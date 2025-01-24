import {
    Container,
    Hr,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    CodeBox,
    Row,
    Button,
} from "@yakad/ui";
import Link from "next/link";
import Symbol from "@yakad/symbols";

export default function Page() {
    return (
        <Container size="md">
            <h1>Xpanel</h1>
            <Hr />
            <p>A simple fast intro Xpanel</p>
            <CodeBox>
                <code>{'import { Xpanel } from "@yakad/x";'}</code>
                <br />
                <br />
                <code>{"<Xpanel>Contenet</Xpanel>"}</code>
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
                        <Td>appbarChildren</Td>
                        <Td>JSX.Element</Td>
                    </Tr>
                    <Tr>
                        <Td>navigationChildren</Td>
                        <Td>JSX.Element</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h2>Example</h2>
            <Link href="/examples/Xpanel" target="_blank">
                Exampl Link
            </Link>
            <h2>Useaful Links</h2>
            <Row>
                <Link
                    href="https://github.com/NatiqQuran/yakad/tree/main/packages/x/Xpanel"
                    target="_blank"
                >
                    <Button
                        size="large"
                        variant="link"
                        icon={<Symbol icon="link" />}
                    >
                        Xpanel Source code
                    </Button>
                </Link>
                <Link
                    href="https://github.com/NatiqQuran/yakad-docs/tree/main/app/docs/X/Xpanel"
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
