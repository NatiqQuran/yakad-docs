import { Card, Stack, Row, CodeField, Button } from "@yakad/ui";

export default function Example2() {
    return (
        <Card
            style={{
                maxWidth: "50rem",
            }}
        >
            <Row align="center">
                <h3>Verification Code </h3>
            </Row>
            <form style={{ margin: "auto" }}>
                <Stack align="center">
                    <CodeField length={4} />
                    <Button variant="outlined">Send Code by email</Button>
                    <Button variant="filled">Verify</Button>
                </Stack>
            </form>
        </Card>
    );
}
