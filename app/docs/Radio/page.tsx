import {
  Button,
  Card,
  Chekbox,
  Container,
  Hr,
  RadioButton,
  RadioGroup,
  Row,
  Spacer,
} from "@yakad/ui";

export default function DocsRadio() {
  return (
    <Container maxWidth="md">
      <h1>Radio Group and Radio Button</h1>
      <p style={{ fontSize: "20px" }}>
        Radio group is a collection of radio buttons, here you will find
        different types of radio buttons and radio groups.
      </p>
      <Card>
        <RadioGroup name="A">
          <RadioButton />
          <RadioButton />
          <RadioButton />
        </RadioGroup>
      </Card>
      <h1>Default Value and Value:</h1>
      <p style={{ fontSize: "20px" }}>
        In this section, we give the default value to the radio group and the
        value to the radio button and set a value for each. If the default value
        is equal to any radio button value, that radio button will be checked.
      </p>
      <Card>
        <h1 style={{ fontSize: "20px" }}>Default Value =&gt;one</h1>
        <RadioGroup name="B" defaultValue="one">
          <RadioButton value="zero" label="value = Zero" />
          <RadioButton value="one" label="value = One" />
          <RadioButton value="two" label="value = two" />
        </RadioGroup>
      </Card>
      <h1>Label:</h1>
      <p style={{ fontSize: "20px" }}>
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
      <h1>disabled:</h1>
      <p style={{ fontSize: "20px" }}>
        This feature makes us unable to click on the radio button and it is not
        checked.
      </p>
      <Card style={{ marginBottom: "3rem" }}>
        <RadioGroup name="D" defaultValue="bir">
          <RadioButton value="bir" label="inable" />
          <RadioButton disabled label="disable" />
        </RadioGroup>
      </Card>

      <h1>Example 1:</h1>
      <Card style={{ maxWidth: "60rem" }}>
        <h1>Choose the color you want!</h1>
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

      <h1>Example 2:</h1>

      <Card style={{ maxWidth: "60rem" }}>
        <h1>How do you think our site is?</h1>
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
          <h1>Do you like these questions?</h1>
          <Button variant="outlined">No</Button>
        </Row>
      </Card>
    </Container>
  );
}
