import {
    Button,
    Card,
    Container,
    Hr,
    Row,
    Spacer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

import Example1 from "./example1";
import Example2 from "./example2";
import Example3 from "./example3";

export default function Page() {
    return (
        <Container maxWidth="md">
            <h1>Card</h1>
            <Hr />
            <p>Cards contain content and actions about a subject.</p>
            <Card>
                <Row>
                    <span>
                        <code>{'import { Card } from "@yakad/ui"'}</code>
                        <br />
                        <br />
                        <code>{"<Card>Card</Card>"}</code>
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
                Center the content, align it to the right, or align it to the
                left.
            </p>
            <Card
                align="start"
                style={{ maxWidth: "60rem", marginBottom: "1rem" }}
            >
                Start
            </Card>
            <Card
                align="center"
                style={{ maxWidth: "60rem", marginBottom: "1rem" }}
            >
                Center
            </Card>
            <Card
                align="end"
                style={{ maxWidth: "60rem", marginBottom: "1rem" }}
            >
                End
            </Card>

            <h2>Examples</h2>
            <p>yakad cards are here to edit your site professionally!</p>
            <h3>Example 1</h3>
            <p>
                Working with these cards is very easy and you can easily
                organize your site with it cards. An example of a card using a
                grid:
            </p>
            <Example1 />
            <h3>Example 2</h3>
            <p>
                You can put anything you want inside the cards, such as: text,
                photo, video and...
            </p>
            <Example2 />
            <h3>Example 3</h3>
            <p>You can even put a very large text inside using Yakad Card.</p>
            <Example3 />

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
