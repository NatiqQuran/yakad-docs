import { Row, Button, Stack, InputField, CheckBox, Hr } from "@yakad/ui";
import { XloginBox } from "@yakad/x";

export default function Page() {
    return (
        <XloginBox>
            <Row align="center">
                <h3>You can put login Form here</h3>
            </Row>
            <Hr />
            <form>
                <Stack
                    style={{ maxWidth: "30rem", margin: "auto" }}
                    align="center"
                >
                    <InputField placeholder="Username" type="Name" />
                    <InputField placeholder="Password" type="Password" />
                    <Button variant="filled">Submit</Button>
                    <CheckBox label="Remember Me" />
                </Stack>
            </form>
            <Hr variant="shortLine" />
            <Stack align="center">
                <Button variant="outlined">Register</Button>
                <Button variant="text">cancel</Button>
            </Stack>
        </XloginBox>
    );
}
