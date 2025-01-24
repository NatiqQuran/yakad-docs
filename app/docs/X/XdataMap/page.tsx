import Link from "next/link";
import { Container, Hr, CodeBox, Row, Button } from "@yakad/ui";
import { XdataMap } from "@yakad/x";
import Symbol from "@yakad/symbols";

const dataFromServer: object[] = [
    {
        name: "Mercedes-Benz",
        color: "Green",
        model: "G_class",
    },
    {
        name: "Mclaren",
        color: "Dark Gray",
        model: "720s",
    },
    {
        name: "BMW",
        color: "Withe",
        model: "i8",
    },
    {
        name: "Mustang",
        color: "Dark Blue",
        model: "gt500",
    },
];

export default function Page() {
    return (
        <Container size="md">
            <h1>XdataMap</h1>
            <Hr />
            <p>A simple fast intro XdataMap</p>
            <CodeBox>
                <code>{'import { XgetStart } from "@yakad/x";'}</code>
                <br />
                <br />
                <code>{"<XdataMap data={dataFromServer} />"}</code>
            </CodeBox>
            <h2>Properties</h2>
            <p>Properties that are accepted as attributes:</p>
            <XdataMap data={dataFromServer} />
            <h2>Useaful Links</h2>
            <Row>
                <Link
                    href="https://github.com/NatiqQuran/yakad/tree/main/packages/x/XdataMap"
                    target="_blank"
                >
                    <Button
                        size="large"
                        variant="link"
                        icon={<Symbol icon="link" />}
                    >
                        XdataMap Source code
                    </Button>
                </Link>
                <Link
                    href="https://github.com/NatiqQuran/yakad-docs/tree/main/app/docs/X/XdataMap"
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
