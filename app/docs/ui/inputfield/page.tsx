import {
  Button,
  Card,
  Container,
  GridContainer,
  GridItem,
  InputField,
  Row,
  Stack,
  Hr,
  Chekbox,
  Spacer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function Page() {
  return (
    <>
      <Container maxWidth="md">
        <h1>Input Field</h1>
        <Hr />
        <p>Discription</p>
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

        <h3>Simple InputField</h3>
        <Card style={{ maxWidth: "60rem" }}>
          <InputField style={{ width: "30rem" }} />
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
              <Td>variant</Td>
              <Td>outlined | filled</Td>
            </Tr>
          </Tbody>
        </Table>

        <h3>variant</h3>
        <p>
          Input fields help you to request details from people in a specific
          way. Variant is one of the features of the input that changes the
          appearance of the input.
        </p>
        <p>And there are two types of variants for the input field :</p>

        <Card>
          <Row>
            <p>1.</p>
            <InputField
              variant="outlined"
              type="Email"
              placeholder="outlined"
            />
            <p>2.</p>
            <InputField variant="filled" type="password" placeholder="filled" />
          </Row>
        </Card>
        <Row>
          <p>
            1. The first version of the period has a line and is empty inside.
          </p>
        </Row>
        <Row>
          <p>2. The second variant has an underline and is filled inside.</p>
        </Row>

        <h3>placeholder</h3>

        <p>
          Placeholder is a feature that can be used to place anything you want
          to be written on the inputs as an alternative.Most people write the
          input type in a placeholder. But placeholder has no rules about what
          you should write or not write. It is up to you.
        </p>
        <h4>Some examples of inputs</h4>
        <Card>
          <GridContainer>
            <GridItem xl={6} lg={12}>
              <p>3.</p>
              <InputField
                variant="outlined"
                type="email"
                placeholder="email outlined"
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <p>4.</p>
              <InputField
                variant="outlined"
                type="password"
                placeholder="password outlined"
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <p>5.</p>
              <InputField
                variant="filled"
                type="email"
                placeholder="email filled"
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <p>6.</p>
              <InputField
                variant="filled"
                type="password"
                placeholder="password filled"
              />
            </GridItem>
          </GridContainer>
        </Card>

        <h3>disabled:</h3>
        <p>You can&apos;t write any text in this type of inputs.</p>

        <Card>
          <GridContainer>
            <GridItem xl={6} lg={12}>
              <InputField placeholder="Active Field" />
              <InputField placeholder="Disable Field" disabled />
              <InputField
                placeholder="Disabled Field with value"
                value="some value"
                disabled
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <InputField variant="filled" placeholder="Active Field" />
              <InputField
                variant="filled"
                placeholder="Disable Field"
                disabled
              />
              <InputField
                variant="filled"
                placeholder="Disabled Field with value"
                value="some value"
                disabled
              />
            </GridItem>
          </GridContainer>
        </Card>
      </Container>
      <Container maxWidth="md">
        <h2>Examples</h2>
        <h3>Example 1 : Login form</h3>
        <Card style={{ maxWidth: "45rem" }} align="center">
          <Row align="center">
            <Symbol icon="login" />
            <h3>Log In</h3>
          </Row>
          <Hr />
          <form>
            <Stack style={{ maxWidth: "30rem", margin: "auto" }} align="center">
              <InputField placeholder="Username" type="Name" />
              <InputField placeholder="Password" type="Password" />
              <Chekbox label="Remember Me" />
              <Button variant="filled">Submit</Button>
            </Stack>
          </form>
          <Hr variant="shortLine" />
          <Button variant="outlined">Register</Button>
          <Button variant="text">cancel</Button>
        </Card>

        <h3>Example 2 : Register</h3>
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
        <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
          <h3>Source code in github</h3>
        </a>
      </Container>
    </>
  );
}
