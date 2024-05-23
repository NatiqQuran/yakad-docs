import {
  Button,
  Card,
  Container,
  Form,
  GridContainer,
  GridItem,
  InputField,
  Row,
  Spacer,
  Stack,
} from "@yakad/ui";

export default function DocsInputField() {
  return (
    <Container maxWidth="lg">
      <Stack>
        <h1 style={{ fontSize: "3rem" }}>Input Field</h1>
        <p style={{ fontSize: "2.5rem" }}>
          Input fields help you to request details from people in a specific
          way.
        </p>
        <Row></Row>
        <h1 style={{ fontSize: "2.5rem" }}>variant:</h1>
        <span style={{ fontSize: "2rem" }}>
          Variant is one of the features of the input that changes the
          appearance of the input.
        </span>
        <Card style={{ maxWidth: "80rem", alignItems: "center" }}>
          <GridContainer>
            <GridItem xl={12} lg={12}>
              <p style={{ fontSize: "2rem" }}>
                And there are two types of variants for the input field :
              </p>
            </GridItem>
            <GridItem xl={6} lg={12}>
              <span style={{ fontSize: "20px" }}>1.</span>
              <InputField
                variant="outlined"
                type="Email"
                placeholder="outlined"
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <span style={{ fontSize: "20px" }}>2.</span>
              <InputField
                variant="filled"
                type="password"
                placeholder="filled"
              />
            </GridItem>
          </GridContainer>
        </Card>
        <Row>
          <span style={{ fontSize: "20px" }}>1.</span>

          <p style={{ fontSize: "2rem" }}>
            The first version of the period has a line and is empty inside.
          </p>
        </Row>
        <Row>
          <span style={{ fontSize: "20px" }}>2.</span>
          <p style={{ fontSize: "2rem" }}>
            The second variant has an underline and is filled inside.
          </p>
        </Row>

        <h1 style={{ fontSize: "2.5rem" }}>placeholder :</h1>

        <p style={{ fontSize: "2rem" }}>
          Placeholder is a feature that can be used to place anything you want
          to be written on the inputs as an alternative.Most people write the
          input type in a placeholder. But placeholder has no rules about what
          you should write or not write. It is up to you.
        </p>
        <Card>
          <h1 style={{ fontSize: "2rem" }}>Some examples of inputs</h1>
          <GridContainer>
            <GridItem xl={6} lg={12}>
              <span style={{ fontSize: "20px" }}>3.</span>
              <InputField
                variant="outlined"
                type="email"
                placeholder="email outlined"
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <span style={{ fontSize: "20px" }}>4.</span>
              <InputField
                variant="outlined"
                type="password"
                placeholder="password outlined"
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <span style={{ fontSize: "20px" }}>5.</span>
              <InputField
                variant="filled"
                type="email"
                placeholder="email filled"
              />
            </GridItem>
            <GridItem xl={6} lg={12}>
              <span style={{ fontSize: "20px" }}>6.</span>
              <InputField
                variant="filled"
                type="password"
                placeholder="password filled"
              />
            </GridItem>
          </GridContainer>
        </Card>

        <h1>disabled:</h1>
        <span style={{ fontSize: "20px" }}>
          You can&apos;t write any text in this type of inputs.
        </span>

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
      </Stack>
    </Container>
  );
}
