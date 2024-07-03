import Symbol from "@yakad/symbols";
import {
  Button,
  Card,
  Container,
  Hr,
  RadioButton,
  RadioGroup,
  Row,
  Spacer,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@yakad/ui";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Hr</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { Hr } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>{"<Hr />"}</code>
          </span>
          <Spacer />
          <Button icon={<Symbol icon="file_copy" />}></Button>
        </Row>
      </Card>

      <h2>Properties</h2>
      <p>Properties that are accepted as attributes:(Grid Item)</p>
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
            <Td>dotted | dashed | shortLine</Td>
          </Tr>
          <Tr>
            <Td>height</Td>
            <Td>number</Td>
          </Tr>
          <Tr>
            <Td>marginTopBottom</Td>
            <Td>number</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>Variant:</h3>
      <p>
        Here we have listed all kinds of HR features for you and given an
        example.
      </p>
      <Card>
        <h4>Normal Hr:</h4>
        <Hr marginTopBottom={3} />
        <h4>Dashed Hr:</h4>
        <Hr marginTopBottom={3} variant="dashed" />
        <h4>Dotted Hr:</h4>
        <Hr marginTopBottom={3} variant="dotted" />
        <h4>ShortLine Hr:</h4>
        <Hr marginTopBottom={3} variant="shortLine" />
      </Card>

      <h3>height</h3>
      <p>With this feature, you can adjust your Hr height.</p>
      <Card>
        <h4>Hr Height:</h4>
        <Hr height={0.5} />
        <Hr height={1} />
        <Hr height={1.5} />
        <Hr height={2} />
      </Card>

      <h3>marginTopBottom</h3>
      <p>
        With this property, we increase and decrease the top and bottom margins.
      </p>

      <Card>
        <p>No margin</p>
        <Hr />
        <p>margin = 5</p>
        <Hr marginTopBottom={5} />
        <p>margin = 10</p>
        <Hr marginTopBottom={10} />
      </Card>

      <h2>Examples</h2>

      <h3>Example 1</h3>

      <Card>
        <h3>Error 404</h3>
        <Hr />
        <p>
          The website hosting server will typically generate a &quot;404 Not
          Found&quot; web page when a user attempts to follow a broken or dead
          link; hence the 404 error is one of the most recognizable errors
          encountered on the World Wide Web.
        </p>
        <h3>please check your network or try again later!</h3>
        <Row align="center" style={{ marginTop: "5rem" }}>
          <Button variant="filledtonal">OK</Button>
          <Button variant="outlined">Cancle</Button>
        </Row>
      </Card>

      <h3>Example 2</h3>
      <Card>
        <Row align="center">
          <h3>Contact us</h3>
          <Symbol icon="support_agent" />
        </Row>
        <Hr variant="dashed" height={0.3} marginTopBottom={1} />
        <h4>What is your problem?</h4>
        <p>My problem is ...</p>
        <Button>Check...</Button>
        <h4>Rate to our Website!</h4>
        <RadioGroup name="rateRadio" defaultValue="check">
          <RadioButton label="Very Good!" />
          <RadioButton label="Good" value="check" />
          <RadioButton label="Not Bad" />
          <RadioButton label="Bad" />
        </RadioGroup>
        <Hr variant="dotted" height={0.5} />
        <Row align="center">
          <h3>Sign in to Comment</h3>
        </Row>
        <Stack align="center">
          <Button variant="filledtonal">Sign up</Button>
          <Button variant="outlined">Sign in</Button>
          <a href="#" style={{ color: "#000", textDecorationLine: "none" }}>
            Create new Accont!
          </a>
        </Stack>
      </Card>

      <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
