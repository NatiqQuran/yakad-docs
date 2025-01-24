import Link from "next/link";
import { Container, Hr, CodeBox, Row, Button } from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function Page() {
    return (
        <Container size="md">
            <h1>Xtable</h1>
            <Hr />
            <p>A simple fast intro Xtable</p>
            <CodeBox>
                <code>{'import { Xtable } from "@yakad/x";'}</code>
                <br />
                <br />
                <code>{"<Xtable>Contenet</Xtable>"}</code>
            </CodeBox>

            <h2>Properties</h2>
            <p>Properties that are accepted as attributes:</p>
            <h2>Coming Soon</h2>
            <h2>Example</h2>
            <h2>Useaful Links</h2>
            <Row>
                <Link
                    href="https://github.com/NatiqQuran/yakad/tree/main/packages/x/Xtable"
                    target="_blank"
                >
                    <Button
                        size="large"
                        variant="link"
                        icon={<Symbol icon="link" />}
                    >
                        Xtable Source code
                    </Button>
                </Link>
                <Link
                    href="https://github.com/NatiqQuran/yakad-docs/tree/main/app/docs/X/Xtable"
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
