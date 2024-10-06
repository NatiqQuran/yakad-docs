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
      <h1>Radio Group and Radio Button</h1>
      <Hr />
      <p>
        Radio Group allow users to select a single option from a list of
        mutually exclusive options.
      </p>
      <Card>
        <Row>
          <span>
            <code>{'import { Radio } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>{"<RadioGroup><RadioButton /></RadioGroup>"}</code>
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
            <Td>value</Td>
            <Td>string</Td>
          </Tr>
          <Tr>
            <Td>label</Td>
            <Td>string</Td>
          </Tr>
          <Tr>
            <Td>checked</Td>
            <Td>True | False</Td>
          </Tr>
          <Tr>
            <Td>disabled</Td>
            <Td>True | False</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>Default Value and Value</h3>
      <p>
        In this section, we give the default value to the radio group and the
        value to the radio button and set a value for each. If the default value
        is equal to any radio button value, that radio button will be checked.
      </p>
      <Card>
        <h3>Default Value =&gt;one</h3>
        <RadioGroup name="B" defaultValue="one">
          <RadioButton value="zero" label="value = Zero" />
          <RadioButton value="one" label="value = One" />
          <RadioButton value="two" label="value = two" />
        </RadioGroup>
      </Card>
      <h3>Label</h3>
      <p>
        We write the label in the radio button. The characteristic of the label
        is that it shows the value we write next to the radio button and creates
        a space between the radio button and the label value.
      </p>
      <Card>
        <RadioGroup name="C">
          <RadioButton label="zero" />
          <RadioButton label="one" />
          <RadioButton label="two" />
        </RadioGroup>
      </Card>

      <h3>checked</h3>
      <p>
        Use this property in each of the radio buttons, that radio button will
        be in checked mode.
      </p>

      <Card>
        <RadioGroup name="D">
          <RadioButton label="uncheckd" />
          <RadioButton label="checked" checked />
          <RadioButton label="unchecked" />
        </RadioGroup>
      </Card>

      <h3>disabled</h3>
      <p>
        This feature makes us unable to click on the radio button and it is not
        checked.
      </p>
      <Card style={{ marginBottom: "3rem" }}>
        <RadioGroup name="E" defaultValue="bir">
          <RadioButton value="bir" label="inable" />
          <RadioButton disabled label="disable" />
        </RadioGroup>
      </Card>

      <h2>Examples</h2>

      <h3>Example 1</h3>
      <Card style={{ maxWidth: "60rem" }}>
        <h3>Choose the color you want!</h3>
        <Hr />
        <RadioGroup name="Example" defaultValue="">
          <RadioButton value="num1" label="Blue" />
          <RadioButton value="num2" label="Red" />
          <RadioButton value="num3" label="Yellow" />
        </RadioGroup>
        <Row align="end" style={{ marginTop: "20px" }}>
          <Button variant="outlined">CLOSE</Button>
          <Button variant="filled">ENTER</Button>
        </Row>
      </Card>

      <h3>Example 2</h3>

      <Card style={{ maxWidth: "60rem" }}>
        <h3>How do you think our site is?</h3>
        <Hr />
        <RadioGroup name="Example" defaultValue="">
          <RadioButton value="n1" label="Excellent" />
          <RadioButton value="n2" label="Good" />
          <RadioButton value="n3" label="Not Bad" />
          <RadioButton value="n4" label="Bad" />
        </RadioGroup>
        <Row align="center">
          <Button variant="filled">Comment</Button>
        </Row>
        <Hr />
        <Row align="center" style={{ marginTop: "2rem" }}>
          <Button variant="outlined">Yes</Button>
          <h3>Do you like these questions?</h3>
          <Button variant="outlined">No</Button>
        </Row>
      </Card>
      <h2>Links</h2>
      <a
        href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar"
        target="_blank"
      >
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
