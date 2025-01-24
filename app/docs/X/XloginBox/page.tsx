import Link from "next/link";
import { Container, Hr, CodeBox, Button, Row } from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function Page() {
    return (
        <Container size="md">
            <h1>XloginBox</h1>
            <Hr />
            <p>A simple fast intro XloginBox</p>
            <CodeBox>
                <code>{'import { XloginBox } from "@yakad/x";'}</code>
                <br />
                <br />
                <code>{"<XloginBox>Contenet</XloginBox>"}</code>
            </CodeBox>
            <h2>Properties</h2>

            <h2>Example</h2>
            <Link href="/examples/XloginBox" target="_blank">
                Exampl Link
            </Link>
            <h2>Useaful Links</h2>
            <Row>
                <Link
                    href="https://github.com/NatiqQuran/yakad/tree/main/packages/x/XloginBox"
                    target="_blank"
                >
                    <Button
                        size="large"
                        variant="link"
                        icon={<Symbol icon="link" />}
                    >
                        XloginBox Source code
                    </Button>
                </Link>
                <Link
                    href="https://github.com/NatiqQuran/yakad-docs/tree/main/app/docs/X/XloginBox"
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
