import {
  Card,
  Chekbox,
  Container,
  RadioButton,
  RadioGroup,
  Row,
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
        <span style={{ fontSize: "15px" }}>Default Value =&gt;one</span>
        <RadioGroup name="B" defaultValue="ones">
          <RadioButton value="zero" />
          <span style={{ fontSize: "15px" }}>Value =&gt;zero</span>
          <RadioButton value="one" />
          <span style={{ fontSize: "15px" }}>Value =&gt;one</span>
          <RadioButton value="two" />
          <span style={{ fontSize: "15px" }}>Value =&gt;two</span>
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
      <Card>
        <RadioGroup name="D" defaultValue="bir">
          <RadioButton value="bir" label="onable" />
          <RadioButton disabled label="disable" />
        </RadioGroup>
      </Card>
    </Container>
  );
}
