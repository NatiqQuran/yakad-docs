import { Card, Row, Button, InputField, CheckBox, Stack, Hr } from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function Example1() {
    return (
        <Card style={{ maxWidth: "45rem" }} align="center">
            <Row align="center">
                <Symbol icon="login" />
                <h3>Log In</h3>
            </Row>
            <Hr />
            <form>
                <Stack
                    style={{ maxWidth: "30rem", margin: "auto" }}
                    align="center"
                >
                    <InputField placeholder="Username" type="Name" />
                    <InputField placeholder="Password" type="Password" />
                    <CheckBox label="Remember Me" />
                    <Button variant="filled">Submit</Button>
                </Stack>
            </form>
            <Hr variant="shortLine" />
            <Button variant="outlined">Register</Button>
            <Button variant="text">cancel</Button>
        </Card>
    );
}
