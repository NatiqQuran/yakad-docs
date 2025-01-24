import { Card, InputField, Button, Stack, Row, Hr } from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function Example2() {
    return (
        <Card style={{ maxWidth: "45rem" }}>
            <Row align="center">
                <Symbol icon="account_circle" />
                <h3>Register</h3>
            </Row>
            <Hr />
            <form>
                <Stack style={{ maxWidth: "30rem", margin: "auto" }}>
                    <InputField variant="filled" placeholder="Name" />
                    <InputField variant="filled" placeholder="Username" />
                    <InputField
                        variant="filled"
                        placeholder="password"
                        type="password"
                    />
                    <InputField
                        variant="filled"
                        placeholder="verify password"
                        type="password"
                    />
                    <br />
                    <Row align="end">
                        <Button>Cancel</Button>
                        <Button variant="filled">Submit</Button>
                    </Row>
                </Stack>
            </form>
        </Card>
    );
}
