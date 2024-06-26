import {
  Button,
  Container,
  Main,
  Row,
  Stack,
  Hr,
  Card,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Spacer,
} from "@yakad/ui";

export default function Page() {
  return (
    <>
      <Container maxWidth="md">
        <h1>Yakad Buttons</h1>

        <Hr />

        <p>Discription</p>
        <Card>
          <Row>
            <span>
              <code>{'import { Button } from "@yakad/ui"'}</code>
              <br />
              <br />
              <code>{"<Button>Button</Button>"}</code>
            </span>
            <Spacer />
            <Button icon="content_copy"></Button>
          </Row>
        </Card>
        <h3>Simple Button</h3>
        <Card align="center">
          <Button>Button</Button>
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
              <Td>Size</Td>
              <Td>small | medium | large</Td>
            </Tr>
            <Tr>
              <Td>Variant</Td>
              <Td>
                text | outlined | filled | filledtonal | tonal | elevated | link
                | fab
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h3>Size:</h3>
        <p>With this property, different sizes can be given to our buttons.</p>
        <Card
          align="center"
          style={{
            maxWidth: "60rem",
          }}
        >
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="filledtonal" size="small">
              SMALL
            </Button>
            <Button variant="filledtonal" size="medium">
              MEDIUM
            </Button>
            <Button variant="filledtonal" size="large">
              LARGE
            </Button>
          </Row>
        </Card>
        <h3>Variant:</h3>
        <p>
          Here you can see different models and colors of buttons, which can be
          called with the variant property.
        </p>
        <Card align="center" style={{ maxWidth: "60rem", padding: "50px" }}>
          <Row
            style={{
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Button variant="elevated">ELEVATED</Button>
            <Button variant="fab">FAB</Button>
            <Button variant="filled">FILLED</Button>
            <Button variant="filledtonal">FILLEDTONAL</Button>
          </Row>

          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="link">LINK</Button>
            <Button variant="outlined">OUTLINEDE</Button>
            <Button variant="text">TEXT</Button>
            <Button variant="tonal">TONAL</Button>
          </Row>
        </Card>

        <h3>Borderstyle:</h3>
        <p>
          With this feature, you can easily and beautifully change the style of
          the button borders.
        </p>

        <Card align="center" style={{ maxWidth: "60rem", padding: "50px" }}>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="filledtonal" borderStyle="none">
              NONE
            </Button>
            <Button variant="filledtonal" borderStyle="rounded">
              ROUNDED
            </Button>
            <Button variant="filledtonal" borderStyle="semi">
              SEMI
            </Button>
            <Button variant="filledtonal" borderStyle="squircle">
              squircle
            </Button>
          </Row>
        </Card>

        <h3>FAB size:</h3>
        <p>Different sizes of buttons with variant fab</p>
        <Card
          align="center"
          style={{
            maxWidth: "60rem",
            margin: "auto",
          }}
        >
          <Stack>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <Button variant="fab" size="small">
                SMALL
              </Button>
              <Button variant="fab" size="medium">
                MEDIUM
              </Button>
              <Button variant="fab" size="large">
                LARGE
              </Button>
            </Row>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <Button variant="fab" size="small" icon="add"></Button>
              <Button variant="fab" size="medium" icon="add"></Button>
              <Button variant="fab" size="large" icon="add"></Button>
            </Row>
          </Stack>
        </Card>

        <h3>icon:</h3>
        <p>
          With this property, you can easily add different icons on your
          buttons.
        </p>
        <Card align="center" style={{ maxWidth: "60rem", padding: "50px" }}>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="outlined" icon="search">
              Search
            </Button>
            <Button iconPosition="end" variant="outlined" icon="search">
              Search
            </Button>
            <Button variant="outlined" icon="search"></Button>
          </Row>
        </Card>
      </Container>
      <ButtonLoading />
    </>
  );
}

function ButtonLoading() {
  return (
    <Container maxWidth="md">
      <h3>Loading:</h3>
      <p>With this option, you can put a loading sign on the buttons</p>
      <Card align="center" style={{ maxWidth: "60rem" }}>
        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="dots"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="dots"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="dots"
            iconPosition="end"
            disabled
          ></Button>
        </Row>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          ></Button>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          >
            Loading
          </Button>{" "}
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="spinner"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>{" "}
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          ></Button>
        </Row>
      </Card>
      <h3>Loading Variant:</h3>
      <p>
        And this is also different loading models that you can use whichever you
        like.
      </p>
      <Card style={{ maxWidth: "60rem" }} align="center">
        <Row align="center">
          <Button
            variant="outlined"
            icon="search"
            loadingVariant="dots"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingVariant="scaleOut"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingVariant="spinner"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
        </Row>
      </Card>

      <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}

function ButtonIcon() {
  return <div></div>;
}
